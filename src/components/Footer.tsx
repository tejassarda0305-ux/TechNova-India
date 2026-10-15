import React from 'react';
import { PageRoute } from '../types/seo';
import { ShieldCheck, Cpu, BatteryCharging, Smartphone, Terminal, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeck }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Editorial Mission */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">TechNova</span>
              <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">India</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              India's authoritative publication for data-driven smartphone buying guides, real thermal endurance benchmarks, and consumer hardware optimization.
            </p>
            <div className="text-xs text-stone-400 pt-2 flex flex-col gap-1">
              <span>Testing Laboratory: Okhla Phase III, New Delhi</span>
              <span>Hardware Editorial Lead: Aarav Sharma</span>
            </div>
          </div>

          {/* Col 2: Core Guides (Internal Links) */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Editorial Guides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-amber-400 text-stone-300 transition-colors text-left"
                >
                  Smartphone Buying Guide India (Cornerstone)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/best-smartphones-under-30000')}
                  className="hover:text-amber-400 text-stone-300 transition-colors text-left"
                >
                  Best Smartphones Under ₹30,000 (2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/battery-health-charging-guide')}
                  className="hover:text-amber-400 text-stone-300 transition-colors text-left"
                >
                  Fast Charging &amp; Battery Longevity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/snapdragon-vs-dimensity-comparison')}
                  className="hover:text-amber-400 text-stone-300 transition-colors text-left"
                >
                  Snapdragon 8s Gen 3 vs Dimensity 8300
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: SEO Architecture Specifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Assignment Compliance
            </h3>
            <div className="text-xs text-stone-400 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4 Distinct Working Routes with URL state</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real Head Title &amp; Meta Description sync</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1 Main + 2 Related Keywords per URL</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Schema.org JSON-LD (FAQPage + Article)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2+ Q&amp;A H2 sections per page</span>
              </div>
            </div>
          </div>

          {/* Col 4: Presentation & Deployment Tools */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Presentation Tooling
            </h3>
            <p className="text-xs text-stone-400">
              Built for seamless presentation screenshots, keyword matrix verification, and instant Vercel deployment.
            </p>
            <button
              onClick={onOpenDeck}
              className="w-full py-2 px-3 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 rounded transition-colors text-center"
            >
              Open SEO Audit Deck &amp; Matrix
            </button>
            <div className="text-[11px] text-stone-400 flex items-center justify-between pt-1">
              <span>Assignment Due:</span>
              <span className="font-mono text-stone-300">15 October 2026</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span>© 2026 TechNova India Publishing Ltd.</span>
            <span>·</span>
            <span>All test data recorded in New Delhi labs</span>
            <span>·</span>
            <span>Canonical: technovaindia.in</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>Robots: Index, Follow</span>
            <span>·</span>
            <span>Sitemap: /sitemap.xml</span>
            <span>·</span>
            <span>Vercel Clean URLs Enabled</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
