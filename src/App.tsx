import React, { useState, useEffect, useCallback } from 'react';
import { PageRoute } from './types/seo';
import { PAGES_DATA } from './data/pagesData';
import { updateDOMSEO } from './utils/seoUpdater';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEOInspectorToolbar } from './components/SEOInspectorToolbar';

// Pages
import { HomePage } from './pages/HomePage';
import { Sub30kArticlePage } from './pages/Sub30kArticlePage';
import { BatteryHealthArticlePage } from './pages/BatteryHealthArticlePage';
import { ChipsetArticlePage } from './pages/ChipsetArticlePage';

export default function App() {
  // Parse initial route from browser window pathname
  const getInitialRoute = (): PageRoute => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname as PageRoute;
      if (path in PAGES_DATA) {
        return path;
      }
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);
  const [seoModeActive, setSeoModeActive] = useState<boolean>(false);
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);

  // Navigate handler that updates browser history and real DOM metadata
  const handleNavigate = useCallback((route: PageRoute) => {
    if (route in PAGES_DATA) {
      setCurrentRoute(route);
      window.history.pushState({}, '', route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Synchronize browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      if (path in PAGES_DATA) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Real DOM Head SEO tags on route change
  useEffect(() => {
    const activePage = PAGES_DATA[currentRoute] || PAGES_DATA['/'];
    updateDOMSEO(activePage);
  }, [currentRoute]);

  const currentPageData = PAGES_DATA[currentRoute] || PAGES_DATA['/'];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 selection:bg-amber-300 selection:text-stone-950">
      
      {/* Top Bar Contract Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenDeck={() => setIsDeckOpen(true)}
        seoModeActive={seoModeActive}
        onToggleSeoMode={() => setSeoModeActive(prev => !prev)}
      />

      {/* Main Dynamic Route Content */}
      <main className="flex-1">
        {currentRoute === '/' && (
          <HomePage onNavigate={handleNavigate} seoModeActive={seoModeActive} />
        )}
        {currentRoute === '/best-smartphones-under-30000' && (
          <Sub30kArticlePage onNavigate={handleNavigate} seoModeActive={seoModeActive} />
        )}
        {currentRoute === '/battery-health-charging-guide' && (
          <BatteryHealthArticlePage onNavigate={handleNavigate} seoModeActive={seoModeActive} />
        )}
        {currentRoute === '/snapdragon-vs-dimensity-comparison' && (
          <ChipsetArticlePage onNavigate={handleNavigate} seoModeActive={seoModeActive} />
        )}
      </main>

      {/* Editorial Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDeck={() => setIsDeckOpen(true)}
      />

      {/* SEO Presentation Inspector & Documentation Deck */}
      <SEOInspectorToolbar
        currentRoute={currentRoute}
        currentPage={currentPageData}
        seoModeActive={seoModeActive}
        onToggleSeoMode={() => setSeoModeActive(prev => !prev)}
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
