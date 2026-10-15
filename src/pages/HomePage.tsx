import React from 'react';
import { PageRoute, PageSEOData } from '../types/seo';
import { PAGES_DATA } from '../data/pagesData';
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, BatteryCharging, Smartphone, ShieldCheck, Zap } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  seoModeActive: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, seoModeActive }) => {
  const pageData = PAGES_DATA['/'];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 pb-20">
      
      {/* Visual SEO Mode Banner (Only when active) */}
      {seoModeActive && (
        <aside 
          aria-label="SEO Presentation Annotation Banner"
          className="bg-amber-100 border-b border-amber-300 py-2.5 px-4 text-xs font-mono text-amber-950 flex flex-wrap items-center justify-between gap-3 sticky top-16 z-30 shadow-xs"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-[11px] bg-amber-400 text-stone-950 px-2 py-0.5 rounded">
              Presentation Mode Active
            </span>
            <span>Target Main Keyword: <strong className="underline">"{pageData.mainKeyword}"</strong></span>
            <span>·</span>
            <span>Related: <em>"{pageData.relatedKeywords[0]}"</em>, <em>"{pageData.relatedKeywords[1]}"</em></span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">H1 / H2 Tag Badges</span>
            <span className="bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded">Alt Text Markers</span>
            <span className="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded">Internal Anchors</span>
          </div>
        </aside>
      )}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        
        {/* Curatorial Header & Metadata */}
        <div className="border-b border-stone-200 pb-6 mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-stone-500 mb-3">
            <span className="font-semibold text-amber-700 tracking-wide uppercase">Hardware Laboratory Report</span>
            <span aria-hidden="true">·</span>
            <time dateTime={pageData.publishDate}>Updated {pageData.publishDate}</time>
            <span aria-hidden="true">·</span>
            <span>{pageData.estimatedReadTime}</span>
            <span aria-hidden="true">·</span>
            <span>{pageData.wordCount} words</span>
            <span aria-hidden="true">·</span>
            <span>By {pageData.author}</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight max-w-4xl">
            {seoModeActive && <span className="seo-heading-badge bg-rose-600 text-white">H1</span>}
            {pageData.h1}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl">
            A research-backed <span className={seoModeActive ? 'seo-highlight-main font-semibold' : ''}>smartphone buying guide india</span> engineered for 2026 buyers. We analyze real 5G network carrier aggregation across Airtel and Jio, benchmark thermal resilience in Indian summers, and test whether modern mid-range devices can replace ₹80,000 flagships.
          </p>
        </div>

        {/* 2-Column Split: Hero Image & Key Purchasing Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Visual with Figure, Figcaption & Alt Tag */}
          <div className="lg:col-span-8 space-y-3">
            <figure className="relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200 shadow-md">
              <img
                src={pageData.heroImage.src}
                alt={pageData.heroImage.altText}
                className="w-full h-auto object-cover max-h-[500px]"
                loading="eager"
              />
              {seoModeActive && (
                <div className="absolute top-3 left-3 bg-stone-950/90 text-amber-400 border border-amber-500/50 text-[11px] font-mono px-2.5 py-1.5 rounded-md shadow max-w-md">
                  <span className="font-bold text-white block mb-0.5">Image Alt Text (SEO Optimized):</span>
                  <span>"{pageData.heroImage.altText}"</span>
                  <div className="text-[10px] text-stone-400 mt-1">
                    Format: {pageData.heroImage.format} · Size: {pageData.heroImage.compressionNote}
                  </div>
                </div>
              )}
            </figure>
            <figcaption className="text-xs font-sans text-stone-500 italic pl-1">
              {pageData.heroImage.caption}
            </figcaption>
          </div>

          {/* Key Buying Checklist Column */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-5">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                2026 Buying Standards
              </span>
              <h3 className="text-base font-semibold text-stone-900 mt-0.5">
                Indian Market Hardware Invariants
              </h3>
            </div>

            <ul className="space-y-4 text-xs text-stone-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">5G Band Aggregation:</strong>
                  Must feature N28 (700MHz), N78 (3500MHz), and N77 for seamless urban and highway handoffs.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Thermal Buffer:</strong>
                  At least 4,000mm² vapor chamber area to prevent throttling during 40°C peak summers.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">OIS Camera Sensor:</strong>
                  Sony LYT-600 or IMX890 sensor with hardware OIS to prevent blurry low-light photos.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Software Lifespan:</strong>
                  Minimum 3 years of Android version upgrades and 4 years of bimonthly security patches.
                </div>
              </li>
            </ul>

            <div className="pt-2 border-t border-stone-100">
              <button
                onClick={() => onNavigate('/best-smartphones-under-30000')}
                className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Explore Top Sub-₹30,000 Picks</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* Featured Editorial Articles Grid with Descriptive Internal Anchors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-stone-200">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              Deep-Dive Editorial Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
              Targeted Hardware Investigations for 2026
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-sm">
            Rigorous evaluations tested by TechNova India hardware lab analysts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Sub-30k Guide */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="h-48 overflow-hidden bg-stone-100">
                <img
                  src={PAGES_DATA['/best-smartphones-under-30000'].heroImage.src}
                  alt={PAGES_DATA['/best-smartphones-under-30000'].heroImage.altText}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2.5">
                <div className="text-xs text-stone-500 flex items-center gap-2">
                  <span>Buying Guide</span>
                  <span>·</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  {PAGES_DATA['/best-smartphones-under-30000'].h1}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Real benchmark scores, battery drain comparisons, and Sony OIS camera shootouts among the top phones in India.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onNavigate('/best-smartphones-under-30000')}
                className={`text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''
                }`}
              >
                <span>Read {pageData.internalLinks[0].anchorText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Battery Longevity Guide */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="h-48 overflow-hidden bg-stone-100">
                <img
                  src={PAGES_DATA['/battery-health-charging-guide'].heroImage.src}
                  alt={PAGES_DATA['/battery-health-charging-guide'].heroImage.altText}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2.5">
                <div className="text-xs text-stone-500 flex items-center gap-2">
                  <span>Chemical Analysis</span>
                  <span>·</span>
                  <span>7 min read</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  {PAGES_DATA['/battery-health-charging-guide'].h1}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Laboratory cycle degradation tests on dual-cell fast charging, the 80% charge limit myth, and thermal management.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onNavigate('/battery-health-charging-guide')}
                className={`text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''
                }`}
              >
                <span>Consult our {pageData.internalLinks[1].anchorText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Chipset Benchmark Faceoff */}
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="h-48 overflow-hidden bg-stone-100">
                <img
                  src={PAGES_DATA['/snapdragon-vs-dimensity-comparison'].heroImage.src}
                  alt={PAGES_DATA['/snapdragon-vs-dimensity-comparison'].heroImage.altText}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2.5">
                <div className="text-xs text-stone-500 flex items-center gap-2">
                  <span>Silicon Benchmarks</span>
                  <span>·</span>
                  <span>9 min read</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  {PAGES_DATA['/snapdragon-vs-dimensity-comparison'].h1}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Head-to-head BGMI 90 FPS gaming tests, sustained frame-time graphs, and Adreno Turnip open driver benefits.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onNavigate('/snapdragon-vs-dimensity-comparison')}
                className={`text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''
                }`}
              >
                <span>Compare {pageData.internalLinks[2].anchorText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* Mandatory Question-Answer H2 Sections (Requirement: At least 2 QA H2 sections on homepage & every article) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-stone-200">
        
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
            Frequently Asked Consumer Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
            {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
            Essential Smartphone Purchasing Questions Answered
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Grounded in empirical New Delhi testing laboratory observations.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* QA 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-start gap-2">
              {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white shrink-0 mt-1">H2 Q1</span>}
              <span>{pageData.h2QASections[0].question}</span>
            </h2>

            <div className="text-sm text-stone-700 leading-relaxed space-y-3">
              <p>
                {pageData.h2QASections[0].answer}
              </p>
              <p>
                When searching for the <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>best mobile phones india 2026</span>, network band carrier aggregation makes the difference between consistent 300 Mbps speeds and sudden dropouts in elevator shafts or suburban rail commutes. Always verify official band documentation rather than trusting retail packaging alone.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Lab Key Takeaways:
              </span>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {pageData.h2QASections[0].keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* QA 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-start gap-2">
              {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white shrink-0 mt-1">H2 Q2</span>}
              <span>{pageData.h2QASections[1].question}</span>
            </h2>

            <div className="text-sm text-stone-700 leading-relaxed space-y-3">
              <p>
                {pageData.h2QASections[1].answer}
              </p>
              <p>
                Our testing reveals that flagship phones costing ₹75,000+ primarily differentiate on periscope telephoto zoom beyond 10x and premium titanium framing. For daily performance, battery endurance, and display clarity under direct afternoon sun, sub-₹30,000 devices offer the optimum price-to-utility ratio. For a comprehensive breakdown, consult our curated <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>top tech reviews india</span> directory.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Lab Key Takeaways:
              </span>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {pageData.h2QASections[1].keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* Editorial Methodology & Trust Footprint */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-6 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-2">
          <div className="flex items-center gap-2 text-stone-900 font-semibold font-mono uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>TechNova India Editorial Independence Guarantee</span>
          </div>
          <p className="leading-relaxed">
            All smartphones evaluated on TechNova India are retail units purchased anonymously in Delhi NCR or Mumbai through authorized channels. We do not accept sponsored review verdicts or pre-screened golden review samples from manufacturers.
          </p>
        </div>
      </section>

    </article>
  );
};
