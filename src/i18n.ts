import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      outer_space: 'Outer Space',
      my_classic: 'My Classic',
      no_fusion: 'No Fusion',
      word_linker: 'Word Linker',
      bring_back_ipod: 'Bring back iPod to iPhone.',
      remove_oversharpen: 'Remove the over-sharpen of iPhone camera.',
      shoot_raw_live: 'Shoot RAW and Live Photo at the same time.',
      life_notebook: 'Life is your best notebook.',
      learn_more: 'Learn More',
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
      hangzhou_swift: 'Hangzhou Swift Software Studio'
    }
  },
  zh: {
    translation: {
      outer_space: 'Outer Space',
      my_classic: 'My Classic',
      no_fusion: 'No Fusion',
      word_linker: 'Word Linker',
      bring_back_ipod: '让 iPod 回归 iPhone。',
      remove_oversharpen: '去除 iPhone 相机过度锐化。',
      shoot_raw_live: '同时拍摄 RAW 与实况照片。',
      life_notebook: '生活是你最好的笔记本。',
      learn_more: '了解更多',
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
      hangzhou_swift: 'Hangzhou Swift Software Studio'
    }
  }
};

// Browser language detection (默认简体中文)
const userLang = navigator.language.startsWith('zh') ? 'zh' : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: userLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 