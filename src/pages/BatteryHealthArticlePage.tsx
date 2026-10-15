import React from 'react';
import { PageRoute, PageSEOData } from '../types/seo';
import { PAGES_DATA } from '../data/pagesData';
import { ArrowLeft, ArrowRight, BatteryCharging, CheckCircle2, ChevronRight, ShieldCheck, Thermometer, Zap } from 'lucide-react';

interface ArticleProps {
  onNavigate: (route: PageRoute) => void;
  seoModeActive: boolean;
}

export const BatteryHealthArticlePage: React.FC<ArticleProps> = ({ onNavigate, seoModeActive }) => {
  const pageData = PAGES_DATA['/battery-health-charging-guide'];

  const chargingMetrics = [
    {
      wattage: '18W Standard USB-PD',
      architecture: 'Single-cell (4.4V / 4A)',
      peakTemp: '34.2°C',
      chargeTime: '1 hr 38 min',
      cycleHealth1000: '84.8%',
      stressFactor: 'Low thermal, prolonged high-voltage dwell'
    },
    {
      wattage: '67W Turbo Charge',
      architecture: 'Dual-cell (Dual 33.5W Pumps)',
      peakTemp: '37.1°C',
      chargeTime: '42 min',
      cycleHealth1000: '83.2%',
      stressFactor: 'Moderate thermal, low voltage dwell'
    },
    {
      wattage: '120W HyperCharge / SuperVOOC',
      architecture: 'Dual-cell Dual-channel (Dual 60W)',
      peakTemp: '39.8°C (with bypass active)',
      chargeTime: '22 min',
      cycleHealth1000: '81.9%',
      stressFactor: 'Brief thermal pulse, minimal saturation dwell'
    }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 pb-20">
      
      {/* Visual SEO Presentation Banner */}
      {seoModeActive && (
        <aside 
          aria-label="SEO Presentation Annotation Banner"
          className="bg-amber-100 border-b border-amber-300 py-2 px-4 text-xs font-mono text-amber-950 flex flex-wrap items-center justify-between gap-3 sticky top-16 z-30 shadow-xs"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-[11px] bg-amber-400 text-stone-950 px-2 py-0.5 rounded">
              Presentation Mode Active
            </span>
            <span>Main Target: <strong className="underline">"{pageData.mainKeyword}"</strong></span>
            <span>·</span>
            <span>Related: <em>"{pageData.relatedKeywords[0]}"</em>, <em>"{pageData.relatedKeywords[1]}"</em></span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">H1/H2 Badges</span>
            <span className="bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded">Alt Tag Markers</span>
            <span className="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded">Internal Anchors</span>
          </div>
        </aside>
      )}

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <button 
            onClick={() => onNavigate('/')} 
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-stone-800 font-medium">Article 2</span>
          <span>/</span>
          <span className="text-stone-500 truncate max-w-xs">{pageData.navTitle}</span>
        </nav>
      </div>

      {/* Article Header & Byline */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
            <span className="font-semibold text-amber-700 uppercase tracking-wider">Materials &amp; Thermal Lab</span>
            <span>·</span>
            <time dateTime={pageData.publishDate}>Published {pageData.publishDate}</time>
            <span>·</span>
            <span>{pageData.estimatedReadTime}</span>
            <span>·</span>
            <span>{pageData.wordCount} words</span>
            <span>·</span>
            <span>By {pageData.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
            {seoModeActive && <span className="seo-heading-badge bg-rose-600 text-white">H1</span>}
            {pageData.h1}
          </h1>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed pt-2">
            Understanding the real relationship between <span className={seoModeActive ? 'seo-highlight-main font-semibold' : ''}>smartphone battery health fast charging</span> requires debunking common lithium-ion myths. We hooked 5,000mAh test cells to calibrated electrochemical analyzers in our New Delhi laboratory to determine whether 120W charging truly damages long-term battery lifespan.
          </p>
        </div>

        {/* Hero Figure */}
        <div className="mt-8 space-y-2">
          <figure className="relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200 shadow-md">
            <img
              src={pageData.heroImage.src}
              alt={pageData.heroImage.altText}
              className="w-full h-auto object-cover max-h-[480px]"
              loading="eager"
            />
            {seoModeActive && (
              <div className="absolute top-3 left-3 bg-stone-950/90 text-amber-400 border border-amber-500/50 text-[11px] font-mono px-2.5 py-1.5 rounded-md shadow max-w-md">
                <span className="font-bold text-white block mb-0.5">Image Alt Tag (SEO Optimized):</span>
                <span>"{pageData.heroImage.altText}"</span>
                <div className="text-[10px] text-stone-400 mt-1">
                  Format: {pageData.heroImage.format} · Size: {pageData.heroImage.compressionNote}
                </div>
              </div>
            )}
          </figure>
          <figcaption className="text-xs text-stone-500 italic pl-1">
            {pageData.heroImage.caption}
          </figcaption>
        </div>
      </header>

      {/* Main Editorial Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-stone-800 text-sm sm:text-base leading-relaxed">
        
        {/* Section 1: Electrochemical Degradation Principles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
            The Science of Lithium-Ion Battery Wear: Temperature vs Voltage
          </h2>
          <p>
            Every modern smartphone utilizes lithium-cobalt-oxide (LiCoO2) or silicon-carbon anode pouch cells. As you charge and discharge, lithium ions shuttle between cathode and anode. Battery capacity loss is driven primarily by two distinct physical mechanisms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-semibold font-mono text-xs uppercase">
                <Thermometer className="w-4 h-4" />
                <span>1. Thermal SEI Layer Thickening</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                When internal cell temperatures exceed 38°C during charging, the Solid Electrolyte Interphase (SEI) protective layer on the graphite anode begins to decompose and rebuild thicker, permanently trapping active lithium ions and reducing usable milliamp-hours.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-semibold font-mono text-xs uppercase">
                <Zap className="w-4 h-4" />
                <span>2. High-Voltage Lattice Micro-Cracking</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Holding cell potential above 4.25V (representing 95% to 100% state-of-charge) causes structural mechanical stress on cathode crystal lattices. This is why learning how to <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>preserve mobile battery life</span> focuses on limiting saturation time.
              </p>
            </div>
          </div>
          <p className="pt-2">
            In our <button onClick={() => onNavigate('/best-smartphones-under-30000')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[1].anchorText}</button>, we observed that phones with dual-cell configurations sustained substantially cooler temperatures during rapid power delivery.
          </p>
        </section>

        {/* Section 2: Laboratory Test Matrix */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
              1,000-Cycle Endurance Comparison: 18W vs 67W vs 120W
            </h2>
            <span className="text-xs font-mono text-stone-500">Lab Data (Oct 2026)</span>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-stone-200 font-mono text-xs">
                  <th className="p-3.5">Charging Standard</th>
                  <th className="p-3.5">Internal Circuit Topography</th>
                  <th className="p-3.5">Peak Surface Temp (32°C room)</th>
                  <th className="p-3.5">0-100% Time</th>
                  <th className="p-3.5">Health After 1,000 Cycles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {chargingMetrics.map((item) => (
                  <tr key={item.wattage} className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 font-semibold text-stone-900">{item.wattage}</td>
                    <td className="p-3.5 text-xs text-stone-600">{item.architecture}</td>
                    <td className="p-3.5 font-mono text-stone-800">{item.peakTemp}</td>
                    <td className="p-3.5 font-mono text-stone-800">{item.chargeTime}</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-700">{item.cycleHealth1000}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 italic">
            *Test methodology: Automated programmable load bank cycling 5,000mAh pouch cells from 10% to 100% with a 15-minute cool-down rest interval in controlled 32°C ambient environment.
          </p>
        </section>

        {/* Section 3: The 120W Myth Debunking */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
            Answering the Industry Question: Does 120W Charging Ruin Battery?
          </h2>
          <p>
            The popular fear regarding <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>does 120w charging ruin battery</span> components assumes that 120 watts flows directly into a single fragile lithium cell. In reality, proprietary architectures like SuperVOOC and HyperCharge split the battery pack into two physical 2,500mAh series cells. Dual charge pumps step down high input voltage (20V/6A) into two concurrent streams of 5V/12A, ensuring no individual battery cell encounters greater electrical stress than a conventional 30W charger.
          </p>
          <p>
            In fact, because 120W charging completes in 20 minutes, the cell spends only 8 minutes in the high-heat fast-charging window before dropping down to low trickle currents. Meanwhile, a slow 18W charger keeps the phone lukewarm for nearly 100 minutes. For silicon power consumption dynamics, see the <button onClick={() => onNavigate('/snapdragon-vs-dimensity-comparison')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[2].anchorText}</button>.
          </p>
        </section>

        {/* Mandatory Q&A H2 Sections */}
        <section className="border-t border-stone-200 pt-10 space-y-8">
          
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              Consumer Battery Science Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Essential Battery Longevity Questions Answered
            </h2>
          </div>

          {/* QA 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-start gap-2">
              {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white shrink-0 mt-1">H2 Q1</span>}
              <span>{pageData.h2QASections[0].question}</span>
            </h2>

            <p className="text-stone-700 leading-relaxed">
              {pageData.h2QASections[0].answer}
            </p>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Lab Evaluation Takeaways:
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

            <p className="text-stone-700 leading-relaxed">
              {pageData.h2QASections[1].answer}
            </p>

            <p className="text-stone-700 leading-relaxed">
              For complete purchasing guidelines covering battery capacities across budget and flagship brackets, return to <button onClick={() => onNavigate('/')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[0].anchorText}</button>.
            </p>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                Lab Evaluation Takeaways:
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

        </section>

        {/* Actionable Rules of Thumb Card */}
        <section className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <BatteryCharging className="w-4 h-4 text-amber-400" />
            <span>Summary: 4 Habits for 4+ Years of Mobile Battery Health</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-300">
            <div className="p-3 bg-stone-800/80 rounded border border-stone-700">
              <strong className="text-white block mb-1">1. Avoid Gaming While Fast Charging:</strong>
              Dual heat generation from the SoC and charging circuitry can push internal temperatures above 42°C.
            </div>
            <div className="p-3 bg-stone-800/80 rounded border border-stone-700">
              <strong className="text-white block mb-1">2. Enable 80% Charge Limit:</strong>
              Prevents high electrochemical voltage stress overnight, doubling cycle count.
            </div>
            <div className="p-3 bg-stone-800/80 rounded border border-stone-700">
              <strong className="text-white block mb-1">3. Avoid 0% Deep Discharges:</strong>
              Recharge before dropping below 15% to avoid copper dendrite formation on the anode.
            </div>
            <div className="p-3 bg-stone-800/80 rounded border border-stone-700">
              <strong className="text-white block mb-1">4. Remove Thick Cases During 100W+:</strong>
              Allows rear metal or glass surfaces to vent thermal energy freely into ambient air.
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <button
              onClick={() => onNavigate('/best-smartphones-under-30000')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sub-₹30,000 Picks</span>
            </button>
            <button
              onClick={() => onNavigate('/snapdragon-vs-dimensity-comparison')}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Guide: Snapdragon vs Dimensity Faceoff</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

      </div>

    </article>
  );
};
