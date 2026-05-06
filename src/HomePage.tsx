import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import appStore from '/src/assets/AppStore.svg';
import myClassicIcon from '/src/assets/mypod-icon.png';
import myClassicScreen from '/src/assets/mypod-1.png';
import myClassicAlt from '/src/assets/mypod-3.png';
import noFusionIcon from '/src/assets/nf-icon.jpg';
import noFusionScreen from '/src/assets/NoFusion2.png';
import noFusionAlt from '/src/assets/NoFusion1.png';
import wordLinkerIcon from '/src/assets/word-linker-icon.jpg';
import wordLinkerScreen from '/src/assets/wordlinker-1.png';
import wordLinkerAlt from '/src/assets/wordlinker-3.png';
import bili from '/src/assets/bili.svg';
import linkin from '/src/assets/linkin.svg';
import mail from '/src/assets/mail.svg';
import twitter from '/src/assets/twitter.svg';
import xhs from '/src/assets/xhs.svg';
import './HomePage.css';
import './HomePageResponsive.css';

type HomePageProps = {
  onOpenNoFusion: () => void;
};

type ProductSectionProps = {
  id: string;
  theme: 'light' | 'dark' | 'blue';
  title: string;
  eyebrow: string;
  headline: string;
  body: string;
  icon: string;
  screen: string;
  altScreen: string;
  appStoreUrl: string;
  reverse?: boolean;
  onLearnMore?: () => void;
};

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

function ProductSection({
  id,
  theme,
  title,
  eyebrow,
  headline,
  body,
  icon,
  screen,
  altScreen,
  appStoreUrl,
  reverse = false,
  onLearnMore,
}: ProductSectionProps) {
  const { t } = useTranslation();

  return (
    <section id={id} className={`product-section product-${theme} ${reverse ? 'product-reverse' : ''}`}>
      <div className="product-copy">
        <p className="eyebrow">{eyebrow}</p>
        <div className="product-title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h2>{headline}</h2>
        <p>{body}</p>
        <div className="product-actions">
          <a
            className="app-store-badge"
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} ${t('download_app_store')}`}
          >
            <img src={appStore} alt={t('download_app_store')} />
          </a>
          {onLearnMore ? (
            <button className="text-link" type="button" onClick={onLearnMore}>
              {t('learn_more')}
            </button>
          ) : null}
        </div>
      </div>
      <div className="product-visual" aria-hidden="true">
        <img className="product-phone product-phone-back" src={altScreen} alt="" />
        <img className="product-phone product-phone-front" src={screen} alt="" />
      </div>
    </section>
  );
}

function HomePage({ onOpenNoFusion }: HomePageProps) {
  const { t } = useTranslation();
  const scrollY = useScrollY();

  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">{t('home.hero.eyebrow')}</p>
          <h1 className="brand-wordmark hero-wordmark">Raster Field</h1>
          <p>{t('home.hero.body')}</p>
          <div className="hero-actions">
            <button type="button" onClick={onOpenNoFusion}>
              {t('home.hero.primary')}
            </button>
            <a href="#products">{t('home.hero.secondary')}</a>
          </div>
        </div>
        <div
          className="hero-device-stage"
          aria-hidden="true"
          style={{ transform: `translate3d(-50%, ${Math.min(scrollY * 0.08, 34)}px, 0)` }}
        >
          <img className="hero-device hero-device-left" src={myClassicScreen} alt="" />
          <img className="hero-device hero-device-main" src={noFusionScreen} alt="" />
          <img className="hero-device hero-device-right" src={wordLinkerScreen} alt="" />
        </div>
      </section>

      <section id="products" className="product-intro">
        <p>{t('home.products.eyebrow')}</p>
        <h2>{t('home.products.headline')}</h2>
      </section>

      <ProductSection
        id="my-classic"
        theme="light"
        title={t('my_classic')}
        eyebrow={t('home.myClassic.eyebrow')}
        headline={t('home.myClassic.headline')}
        body={t('home.myClassic.body')}
        icon={myClassicIcon}
        screen={myClassicScreen}
        altScreen={myClassicAlt}
        appStoreUrl="https://apps.apple.com/app/my-classic/id6443811423"
      />

      <ProductSection
        id="no-fusion"
        theme="dark"
        title={t('no_fusion')}
        eyebrow={t('home.noFusion.eyebrow')}
        headline={t('home.noFusion.headline')}
        body={t('home.noFusion.body')}
        icon={noFusionIcon}
        screen={noFusionScreen}
        altScreen={noFusionAlt}
        appStoreUrl="https://apps.apple.com/us/app/no-fusion/id6444706244"
        reverse
        onLearnMore={onOpenNoFusion}
      />

      <ProductSection
        id="word-linker"
        theme="blue"
        title={t('word_linker')}
        eyebrow={t('home.wordLinker.eyebrow')}
        headline={t('home.wordLinker.headline')}
        body={t('home.wordLinker.body')}
        icon={wordLinkerIcon}
        screen={wordLinkerScreen}
        altScreen={wordLinkerAlt}
        appStoreUrl="https://apps.apple.com/cn/app/id6463197638"
      />

      <section className="studio-section">
        <div className="studio-brand">
          <h2 className="brand-wordmark studio-wordmark">{t('hangzhou_swift')}</h2>
        </div>
        <p>{t('home.studio.body')}</p>
        <div className="social-links" aria-label={t('home.studio.social')}>
          <a href="https://twitter.com/Wangpeiyi23" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="X" />
          </a>
          <a href="https://www.linkedin.com/in/peiyi-wang23/" target="_blank" rel="noopener noreferrer">
            <img src={linkin} alt="LinkedIn" />
          </a>
          <a href="https://www.xiaohongshu.com/user/profile/5ddf818d000000000100176c" target="_blank" rel="noopener noreferrer">
            <img src={xhs} alt="Xiaohongshu" />
          </a>
          <a href="https://space.bilibili.com/13003762" target="_blank" rel="noopener noreferrer">
            <img src={bili} alt="Bilibili" />
          </a>
          <a href="mailto:wangpeiyi0223@gmail.com">
            <img src={mail} alt="Email" />
          </a>
        </div>
        <a className="beian-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
          豫ICP备2024043127号
        </a>
      </section>
    </main>
  );
}

export default HomePage;
