import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      outer_space: 'Raster Field',
      my_classic: 'My Classic',
      no_fusion: 'No Fusion',
      word_linker: 'Word Linker',
      learn_more: 'Learn More',
      download_app_store: 'Download on the App Store',
      nav: {
        products: 'Products',
      },
      home: {
        hero: {
          eyebrow: 'Independent iPhone apps from Hangzhou',
          body: 'Three small tools from Raster Field with a clear point of view: music nostalgia, honest photography, and vocabulary memory.',
          primary: 'Explore No Fusion',
          secondary: 'View all apps',
        },
        products: {
          eyebrow: 'The apps',
          headline: 'Focused experiences, built with the quiet confidence of native software.',
        },
        myClassic: {
          eyebrow: 'Music',
          headline: 'Bring the iPod feeling back to iPhone.',
          body: 'My Classic turns your music library into a tactile player with a familiar click wheel and Cover Flow mood.',
        },
        noFusion: {
          eyebrow: 'Camera',
          headline: 'A camera for people who notice over-processing.',
          body: 'No Fusion keeps iPhone photos cleaner: less forced sharpening, RAW and Live Photo together, manual controls when you need them.',
        },
        wordLinker: {
          eyebrow: 'Learning',
          headline: 'Your life becomes the vocabulary notebook.',
          body: 'Word Linker helps you scan, collect, and review words in the moments where you actually meet them.',
        },
        studio: {
          eyebrow: 'Studio',
          body: 'Raster Field designs focused iOS apps for people who care about craft, speed, and the small details of daily tools.',
          social: 'Social links',
        },
      },
      detail: {
        back: 'Back to Raster Field',
        hero: {
          eyebrow: 'No Fusion for iPhone',
          body: 'Shoot with a calmer camera pipeline. Keep texture, preserve choice, and avoid the harsh look that makes every photo feel the same.',
          secondary: 'See the details',
        },
        statement: {
          eyebrow: 'Less algorithm. More photograph.',
          headline: 'No Fusion is built for photographers who want iPhone convenience without the over-cooked finish.',
        },
        story: {
          eyebrow: 'Image first',
          headline: 'Keep the scene’s character.',
          body: 'The app gives you a cleaner capture surface and lets tone, depth, grain, and light stay readable before editing.',
          portrait: 'Portrait depth control for natural subject separation.',
          portraitAlt: 'No Fusion portrait focus example with tulips',
          halation: 'Night lights can keep atmosphere without turning brittle.',
          halationAlt: 'Night street photo sample with red lights',
        },
        features: {
          raw: {
            index: '01',
            title: 'RAW and Live Photo, together',
            body: 'Keep a high-flexibility RAW file while still saving the motion and context of the moment.',
          },
          live: {
            index: '02',
            title: 'A calmer capture surface',
            body: 'The interface stays out of the way, so exposure, focus, and timing remain the center of the shot.',
          },
          manual: {
            index: '03',
            title: 'Manual when it matters',
            body: 'Quick access to focus, exposure, and lens choices gives you control without turning capture into a settings hunt.',
          },
          style: {
            index: '04',
            title: 'Looks with restraint',
            body: 'Filters and tones are designed to shape color without burying the original texture of the photo.',
          },
        },
        controls: {
          eyebrow: 'Controls',
          headline: 'Fast changes, visible state, no clutter.',
          body: 'Switch looks, formats, and shooting preferences from the capture screen. The controls are large enough to read and quiet enough to ignore.',
        },
        workflow: {
          eyebrow: 'Workflow',
          headline: 'Capture now. Decide later.',
          capture: {
            title: 'Shoot with intent',
            body: 'Use manual controls, depth, and format choices at the moment of capture.',
          },
          choose: {
            title: 'Keep flexible files',
            body: 'RAW, HEIF, and Live Photo options let each scene keep the right amount of information.',
          },
          keep: {
            title: 'Edit from a cleaner base',
            body: 'Start from an image that has not already been pushed into a harsh, sharpened style.',
          },
        },
        partner: {
          eyebrow: 'Hardware ready',
          headline: 'Designed to feel good with camera accessories.',
          body: 'No Fusion keeps the capture flow deliberate whether you shoot handheld or mount the phone into a grip-led setup.',
          overviewAlt: 'No Fusion app overview graphic',
        },
        cta: {
          headline: 'Make the iPhone camera feel quieter.',
          body: 'Download No Fusion and keep more room for your own taste in the final image.',
        },
      },
      bring_back_ipod: 'Bring back iPod to iPhone.',
      remove_oversharpen: 'Remove the over-sharpen of iPhone camera.',
      shoot_raw_live: 'Shoot RAW and Live Photo at the same time.',
      life_notebook: 'Life is your best notebook.',
      scan: 'Scan',
      learn: 'Learn',
      review: 'Review',
      explain_because: 'Because Apple thinks my app is too similar to iPod, I have to use some camouflage.',
      step1: 'Step 1:',
      download_console: 'Download the game console',
      step2: 'Step 2:',
      enter_code: 'Enter the',
      step3: 'Step 3:',
      enjoy: 'Enjoy',
      go_app_store: 'Go to App Store',
      hangzhou_swift: 'Raster Field',
    },
  },
  zh: {
    translation: {
      outer_space: 'Raster Field',
      my_classic: 'My Classic',
      no_fusion: 'No Fusion',
      word_linker: 'Word Linker',
      learn_more: '了解更多',
      download_app_store: '前往 App Store 下载',
      nav: {
        products: '产品',
      },
      home: {
        hero: {
          eyebrow: '来自杭州的独立 iPhone 应用',
          body: 'Raster Field 的三款目标清晰的小工具：音乐怀旧、真实摄影和单词记忆。',
          primary: '查看 No Fusion',
          secondary: '浏览全部应用',
        },
        products: {
          eyebrow: '产品',
          headline: '专注的体验，带着原生软件应有的安静质感。',
        },
        myClassic: {
          eyebrow: '音乐',
          headline: '把 iPod 的感觉带回 iPhone。',
          body: 'My Classic 让你的音乐资料库变成一个有触感的播放器，保留熟悉的转盘和 Cover Flow 氛围。',
        },
        noFusion: {
          eyebrow: '相机',
          headline: '为在意过度处理的人做的相机。',
          body: 'No Fusion 让 iPhone 照片更干净：减少强制锐化，同时保留 RAW 与实况照片，需要时也能快速手动控制。',
        },
        wordLinker: {
          eyebrow: '学习',
          headline: '让生活变成你的单词本。',
          body: 'Word Linker 帮你在真正遇见单词的场景里扫描、收集和复习。',
        },
        studio: {
          eyebrow: '工作室',
          body: 'Raster Field 设计专注的 iOS 应用，服务在意质感、速度和日常工具细节的人。',
          social: '社交链接',
        },
      },
      detail: {
        back: '返回 Raster Field',
        hero: {
          eyebrow: 'No Fusion for iPhone',
          body: '用更安静的相机流程拍摄。保留纹理，保留选择，也避开那种让每张照片都相似的重口味处理。',
          secondary: '查看细节',
        },
        statement: {
          eyebrow: '少一点算法，多一点照片。',
          headline: 'No Fusion 为希望保留 iPhone 便利、同时避开过度处理质感的摄影者而做。',
        },
        story: {
          eyebrow: '图像优先',
          headline: '保留场景自己的性格。',
          body: '应用提供更干净的拍摄界面，让色调、景深、颗粒和光线在进入编辑前依然清楚可读。',
          portrait: '人像景深控制，让主体分离更自然。',
          portraitAlt: 'No Fusion 郁金香人像对焦示例',
          halation: '夜晚灯光可以保留氛围，而不是变得生硬。',
          halationAlt: '红色灯光的夜间街景样张',
        },
        features: {
          raw: {
            index: '01',
            title: 'RAW 与实况照片同时保留',
            body: '既保留后期空间更大的 RAW，也保存当下的动作和现场感。',
          },
          live: {
            index: '02',
            title: '更安静的拍摄界面',
            body: '界面尽量不抢戏，让曝光、对焦和按下快门的时机回到照片本身。',
          },
          manual: {
            index: '03',
            title: '需要时立刻手动',
            body: '快速调整对焦、曝光与镜头选择，不需要在设置里来回寻找。',
          },
          style: {
            index: '04',
            title: '克制的影调与滤镜',
            body: '滤镜负责塑造颜色，而不是掩盖照片原本的纹理。',
          },
        },
        controls: {
          eyebrow: '控制',
          headline: '状态清楚，切换迅速，没有杂乱。',
          body: '在拍摄界面直接切换影调、格式和拍摄偏好。控件足够清楚，也足够安静。',
        },
        workflow: {
          eyebrow: '工作流',
          headline: '先捕捉，再决定。',
          capture: {
            title: '带着意图拍摄',
            body: '在按下快门前就能处理手动控制、景深和格式选择。',
          },
          choose: {
            title: '保留灵活文件',
            body: 'RAW、HEIF 与实况照片选项，让每个场景保留合适的信息量。',
          },
          keep: {
            title: '从更干净的底片开始编辑',
            body: '从没有被过度锐化定型的图像开始，后期选择会更自由。',
          },
        },
        partner: {
          eyebrow: '硬件友好',
          headline: '适合搭配摄影配件使用。',
          body: '无论手持拍摄，还是把 iPhone 装进手柄类设备，No Fusion 都尽量保持稳定、直接的捕捉流程。',
          overviewAlt: 'No Fusion 应用功能总览图',
        },
        cta: {
          headline: '让 iPhone 相机安静一点。',
          body: '下载 No Fusion，把最后影像的审美选择留给自己。',
        },
      },
      bring_back_ipod: '让 iPod 回归 iPhone。',
      remove_oversharpen: '去除 iPhone 相机过度锐化。',
      shoot_raw_live: '同时拍摄 RAW 与实况照片。',
      life_notebook: '生活是你最好的笔记本。',
      scan: '扫描',
      learn: '学习',
      review: '复习',
      explain_because: '因为 Apple 认为我的应用与 iPod 过于相似，所以我不得不用一些伪装。',
      step1: '步骤 1：',
      download_console: '下载游戏主机',
      step2: '步骤 2：',
      enter_code: '输入',
      step3: '步骤 3：',
      enjoy: '享受吧',
      go_app_store: '前往 App Store',
      hangzhou_swift: 'Raster Field',
    },
  },
};

const userLang = navigator.language.startsWith('zh') ? 'zh' : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: userLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
