import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import appStore from '/src/assets/AppStore.svg';
import noFusionIcon from '/src/assets/nf-icon.jpg';
import noFusionScreen from '/src/assets/NoFusion2.png';
import noFusionAlt from '/src/assets/NoFusion1.png';
import filterScreen from '/src/assets/nf-filter.jpg';
import halationPhoto from '/src/assets/nf-halation.jpg';
import heifScreen from '/src/assets/nf-heif.png';
import liveScreen from '/src/assets/nf-live.png';
import overviewImage from '/src/assets/nf-overview.jpg';
import pgytechImage from '/src/assets/nf-pgytech.png';
import portraitImage from '/src/assets/nf-portrait.jpg';
import themeScreen from '/src/assets/nf-theme.jpg';
import './NoFusionDetail.css';
import './NoFusionDetailResponsive.css';

type NoFusionDetailProps = {
  onNavigateHome: () => void;
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

function NoFusionDetail({ onNavigateHome }: NoFusionDetailProps) {
  const { t } = useTranslation();
  const scrollY = useScrollY();
  const featureKeys = ['raw', 'live', 'manual', 'style'];
  const workflowKeys = ['capture', 'choose', 'keep'];

  return (
    <main className="nofusion-page">
      <section className="nofusion-hero">
        <div className="nofusion-hero-copy">
          <button className="back-link" type="button" onClick={onNavigateHome}>
            {t('detail.back')}
          </button>
          <img className="detail-icon" src={noFusionIcon} alt="" />
          <p className="eyebrow">{t('detail.hero.eyebrow')}</p>
          <h1>No Fusion</h1>
          <p>{t('detail.hero.body')}</p>
          <div className="hero-actions">
            <a
              className="app-store-badge"
              href="https://apps.apple.com/us/app/no-fusion/id6444706244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`No Fusion ${t('download_app_store')}`}
            >
              <img src={appStore} alt={t('download_app_store')} />
            </a>
            <a className="text-link" href="#nofusion-deep-dive">
              {t('detail.hero.secondary')}
            </a>
          </div>
        </div>
        <div
          className="nofusion-hero-visual"
          aria-hidden="true"
          style={{ transform: `translate3d(0, ${Math.min(scrollY * 0.06, 42)}px, 0)` }}
        >
          <img className="detail-phone detail-phone-back" src={noFusionAlt} alt="" />
          <img className="detail-phone detail-phone-front" src={noFusionScreen} alt="" />
        </div>
      </section>

      <section id="nofusion-deep-dive" className="detail-statement">
        <p>{t('detail.statement.eyebrow')}</p>
        <h2>{t('detail.statement.headline')}</h2>
      </section>

      <section className="sticky-story">
        <div className="sticky-copy">
          <p className="eyebrow">{t('detail.story.eyebrow')}</p>
          <h2>{t('detail.story.headline')}</h2>
          <p>{t('detail.story.body')}</p>
        </div>
        <div className="story-frames">
          <figure className="story-frame story-wide">
            <img src={portraitImage} alt={t('detail.story.portraitAlt')} />
            <figcaption>{t('detail.story.portrait')}</figcaption>
          </figure>
          <figure className="story-frame">
            <img src={halationPhoto} alt={t('detail.story.halationAlt')} />
            <figcaption>{t('detail.story.halation')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="feature-band">
        {featureKeys.map((key) => (
          <div className="feature-item" key={key}>
            <span>{t(`detail.features.${key}.index`)}</span>
            <h3>{t(`detail.features.${key}.title`)}</h3>
            <p>{t(`detail.features.${key}.body`)}</p>
          </div>
        ))}
      </section>

      <section className="control-section">
        <div className="control-copy">
          <p className="eyebrow">{t('detail.controls.eyebrow')}</p>
          <h2>{t('detail.controls.headline')}</h2>
          <p>{t('detail.controls.body')}</p>
        </div>
        <div className="control-images" aria-hidden="true">
          <img src={filterScreen} alt="" />
          <img src={themeScreen} alt="" />
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-copy">
          <p className="eyebrow">{t('detail.workflow.eyebrow')}</p>
          <h2>{t('detail.workflow.headline')}</h2>
        </div>
        <div className="workflow-list">
          {workflowKeys.map((key) => (
            <div key={key}>
              <h3>{t(`detail.workflow.${key}.title`)}</h3>
              <p>{t(`detail.workflow.${key}.body`)}</p>
            </div>
          ))}
        </div>
        <div className="workflow-visuals" aria-hidden="true">
          <img src={liveScreen} alt="" />
          <img src={heifScreen} alt="" />
        </div>
      </section>

      <section className="partner-section">
        <img src={overviewImage} alt={t('detail.partner.overviewAlt')} />
        <div>
          <p className="eyebrow">{t('detail.partner.eyebrow')}</p>
          <h2>{t('detail.partner.headline')}</h2>
          <p>{t('detail.partner.body')}</p>
          <img className="partner-mark" src={pgytechImage} alt="No Fusion and PGYTECH" />
        </div>
      </section>

      <section className="detail-cta">
        <h2>{t('detail.cta.headline')}</h2>
        <p>{t('detail.cta.body')}</p>
        <a
          className="app-store-badge"
          href="https://apps.apple.com/us/app/no-fusion/id6444706244"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`No Fusion ${t('download_app_store')}`}
        >
          <img src={appStore} alt={t('download_app_store')} />
        </a>
      </section>
    </main>
  );
}

export default NoFusionDetail;
