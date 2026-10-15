import React from 'react';
import { PageRoute } from '../types/seo';
import { ShieldCheck, Search, SlidersHorizontal, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenDeck: () => void;
  seoModeActive: boolean;
  onToggleSeoMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenDeck,
  seoModeActive,
  onToggleSeoMode
}) => {
  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Buying Guide', route: '/' },
    { label: 'Best Under ₹30k', route: '/best-smartphones-under-30000' },
    { label: 'Battery Longevity', route: '/battery-health-charging-guide' },
    { label: 'Chipset Faceoff', route: '/snapdragon-vs-dimensity-comparison' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element brand wordmark */}
        <button
          onClick={() => onNavigate('/')}
          className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span className="font-serif tracking-tight text-2xl text-amber-500">TechNova</span>
          <span className="font-sans text-xs tracking-widest uppercase font-semibold text-stone-400">India</span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 text-sm ${
                  isActive
                    ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action button + SEO presentation quick toggles */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleSeoMode}
            title="Toggle Visual SEO Screenshot Overlay"
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              seoModeActive
                ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">SEO Overlay</span>
            <span className="sm:hidden">SEO</span>
          </button>

          <button
            onClick={onOpenDeck}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>SEO Deck & Audit</span>
          </button>
        </div>

      </div>

      {/* Mobile navigation row */}
      <div className="md:hidden overflow-x-auto flex items-center gap-4 px-4 py-2 border-t border-stone-800 text-xs bg-stone-950">
        {navItems.map((item) => (
          <button
            key={item.route}
            onClick={() => onNavigate(item.route)}
            className={`whitespace-nowrap shrink-0 py-1 ${
              currentRoute === item.route
                ? 'text-amber-400 font-bold border-b border-amber-400'
                : 'text-stone-400'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
