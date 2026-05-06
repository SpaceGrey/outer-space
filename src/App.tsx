import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomePage from './HomePage';
import NoFusionDetail from './NoFusionDetail';
import './App.css';

type RoutePath = '/' | '/nofusion';

function normalizePath(pathname: string): RoutePath {
  return pathname === '/nofusion' ? '/nofusion' : '/';
}

function App() {
  const { t, i18n } = useTranslation();
  const [path, setPath] = useState<RoutePath>(() => normalizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = path === '/nofusion' ? 'No Fusion - Raster Field' : 'Raster Field';
    setMenuOpen(false);
  }, [path]);

  function navigate(nextPath: RoutePath) {
    setMenuOpen(false);

    if (nextPath !== path) {
      window.history.pushState(null, '', nextPath);
      setPath(nextPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollHomeSection(sectionId: string) {
    setMenuOpen(false);

    const scrollToSection = () => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (path !== '/') {
      window.history.pushState(null, '', '/');
      setPath('/');
      window.setTimeout(scrollToSection, 60);
      return;
    }

    scrollToSection();
  }

  function toggleLanguage() {
    void i18n.changeLanguage(i18n.language.startsWith('zh') ? 'en' : 'zh');
  }

  return (
    <>
      <header className={`site-nav ${menuOpen ? 'nav-open' : ''}`}>
        <button className="nav-brand brand-wordmark" type="button" onClick={() => navigate('/')}>
          Raster Field
        </button>
        <nav className="nav-links" aria-label={t('nav.products')}>
          <button type="button" onClick={() => scrollHomeSection('my-classic')}>
            {t('my_classic')}
          </button>
          <button type="button" onClick={() => navigate('/nofusion')}>
            {t('no_fusion')}
          </button>
          <button type="button" onClick={() => scrollHomeSection('word-linker')}>
            {t('word_linker')}
          </button>
        </nav>
        <div className="nav-actions">
          <button className="nav-language" type="button" onClick={toggleLanguage}>
            {i18n.language.startsWith('zh') ? 'EN' : '中文'}
          </button>
          <button
            className="nav-menu-toggle"
            type="button"
            aria-label={menuOpen ? t('nav.close') : t('nav.menu')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {path === '/nofusion' ? (
        <NoFusionDetail onNavigateHome={() => navigate('/')} />
      ) : (
        <HomePage onOpenNoFusion={() => navigate('/nofusion')} />
      )}
    </>
  );
}

export default App;
