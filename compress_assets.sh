#!/usr/bin/env bash

# 说明：
#   1. 扫描 src/assets 目录下的 PNG/JPG/JPEG 文件。
#   2. 若图片宽或高超过 2500 像素，则等比缩放，使最大边 = 2500。
#   3. 对 PNG 进行无损(或近无损)压缩，保留 alpha 通道；对 JPG/JPEG 以高画质有损压缩(质量约 85)。
#   4. 不处理 MP4 或其他格式文件。
#   5. 压缩结果直接覆盖原文件（如需保留原图请自行修改 mv → cp）。
# 依赖：ffmpeg、ffprobe 已正确安装。

set -euo pipefail

ASSET_DIR="src/assets"
MAX_DIM=2500  # 最大允许宽/高
JPG_Q=3       # ffmpeg -qscale:v 值，1(最好) - 31(最差)，这里≈85 质量

# macOS du 与 GNU du 输出差异较大，这里统一用 human-readable
size_h(){ du -h "$1" | awk '{print $1}' ; }

process_image() {
  local file="$1" ext tmp dim w h max scale_param
  ext="${file##*.}"
  # 将扩展名转换为小写，兼容 macOS bash 3
  ext_lc=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

  # 取宽高
  dim=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$file") || return
  w=${dim%x*}
  h=${dim#*x}
  max=$(( w > h ? w : h ))

  scale_param=""
  if (( max > MAX_DIM )); then
    if (( w >= h )); then
      scale_param="scale=${MAX_DIM}:-1"
    else
      scale_param="scale=-1:${MAX_DIM}"
    fi
  fi

  echo "处理: $file (原大小 $(size_h "$file"), ${w}x${h})"

  tmp="${file%.*}.tmp.${ext_lc}"

  if [[ $ext_lc == "png" ]]; then
    # PNG: 保留 alpha 通道，使用无损压缩。ffmpeg 默认保 alpha。
    if [[ -n $scale_param ]]; then
      ffmpeg -hide_banner -loglevel error -y -i "$file" -vf "$scale_param" -compression_level 9 "$tmp"
    else
      ffmpeg -hide_banner -loglevel error -y -i "$file" -compression_level 9 "$tmp"
    fi
  elif [[ $ext_lc == "jpg" || $ext_lc == "jpeg" ]]; then
    if [[ -n $scale_param ]]; then
      ffmpeg -hide_banner -loglevel error -y -i "$file" -vf "$scale_param" -qscale:v "$JPG_Q" "$tmp"
    else
      ffmpeg -hide_banner -loglevel error -y -i "$file" -qscale:v "$JPG_Q" "$tmp"
    fi
  else
    return  # 不支持的扩展名
  fi

  mv -f "$tmp" "$file"
  echo "  新大小: $(size_h "$file")"

  # 若 PNG 仍超过 1MB，进一步有损压缩（缩放至 1200px）
  if [[ $ext_lc == "png" ]]; then
    size_bytes=$(stat -f%z "$file")
    if (( size_bytes > 1048576 )); then  # 1MB
      echo "  >1MB，再次压缩到 1200px 长边..."
      # 再次获取尺寸
      dim=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$file") || true
      w=${dim%x*}
      h=${dim#*x}
      if (( w >= h )); then
        scale_small="scale=1200:-1"
      else
        scale_small="scale=-1:1200"
      fi
      tmp2="${file%.*}.tmp2.png"
      ffmpeg -hide_banner -loglevel error -y -i "$file" -vf "$scale_small" -compression_level 9 "$tmp2"
      mv -f "$tmp2" "$file"
      echo "    再压缩后大小: $(size_h "$file")"
    fi
  fi
}

echo -e "开始压缩 $ASSET_DIR 中的图片...\n"

shopt -s nullglob
for img in "$ASSET_DIR"/*.{png,PNG,jpg,JPG,jpeg,JPEG}; do
  [ -e "$img" ] || continue
  process_image "$img"
done

echo -e "\n全部处理完成！" 