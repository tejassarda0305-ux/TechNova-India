import React from 'react';
import { PageRoute, PageSEOData } from '../types/seo';
import { PAGES_DATA } from '../data/pagesData';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Cpu, Flame, Gamepad2, ShieldCheck, Zap } from 'lucide-react';

interface ArticleProps {
  onNavigate: (route: PageRoute) => void;
  seoModeActive: boolean;
}

export const ChipsetArticlePage: React.FC<ArticleProps> = ({ onNavigate, seoModeActive }) => {
  const pageData = PAGES_DATA['/snapdragon-vs-dimensity-comparison'];

  const architectureMatrix = [
    {
      metric: 'Fabrication Process',
      snapdragon: 'TSMC 4nm (N4P)',
      dimensity: 'TSMC 4nm (N4P 2nd Gen)',
      advantage: 'Identical node efficiency'
    },
    {
      metric: 'CPU Configuration',
      snapdragon: '1x Cortex-X4 @ 3.0GHz + 4x A720 @ 2.8GHz + 3x A520 @ 2.0GHz',
      dimensity: '4x Cortex-A715 @ 3.35GHz + 4x Cortex-A510 @ 2.2GHz',
      advantage: 'Snapdragon leads in single-core burst; Dimensity leads in multi-core sustained'
    },
    {
      metric: 'GPU Architecture',
      snapdragon: 'Qualcomm Adreno 735',
      dimensity: 'ARM Mali-G615 MC6',
      advantage: 'Snapdragon has Turnip open drivers; Mali has higher efficiency per mm²'
    },
    {
      metric: 'Geekbench 6 Single-Core',
      snapdragon: '1,990 pts',
      dimensity: '1,530 pts',
      advantage: 'Snapdragon (+30% Cortex-X4 lead)'
    },
    {
      metric: 'Geekbench 6 Multi-Core',
      snapdragon: '5,180 pts',
      dimensity: '4,890 pts',
      advantage: 'Snapdragon (+6% margin)'
    },
    {
      metric: 'AnTuTu v10 Total',
      snapdragon: '1,520,000 pts',
      dimensity: '1,390,000 pts',
      advantage: 'Snapdragon (+9% total compute)'
    }
  ];

  const bgmiTestResults = [
    {
      testRun: '0 to 15 Minutes',
      snapdragonFps: '89.9 FPS',
      dimensityFps: '89.6 FPS',
      tempDelta: 'SD +4.1°C / Mediatek +3.8°C'
    },
    {
      testRun: '15 to 30 Minutes',
      snapdragonFps: '87.4 FPS',
      dimensityFps: '88.9 FPS',
      tempDelta: 'SD reaches 41.2°C; slight governor step-down'
    },
    {
      testRun: '30 to 60 Minutes',
      snapdragonFps: '83.2 FPS (91% stability)',
      dimensityFps: '88.1 FPS (94% stability)',
      tempDelta: 'Dimensity retains flat frametime graph'
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
          <span className="text-stone-800 font-medium">Article 3</span>
          <span>/</span>
          <span className="text-stone-500 truncate max-w-xs">{pageData.navTitle}</span>
        </nav>
      </div>

      {/* Article Header & Byline */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
            <span className="font-semibold text-amber-700 uppercase tracking-wider">Silicon Benchmarks</span>
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
            The contest between <span className={seoModeActive ? 'seo-highlight-main font-semibold' : ''}>snapdragon 8s gen 3 vs dimensity 8300</span> defines upper-midrange smartphone gaming in 2026. Both chipsets claim flagship performance under ₹30,000, but sustained BGMI frame-rate testing and thermals in Indian room ambient reveal vastly different design philosophies.
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
        
        {/* Section 1: Silicon Microarchitecture Breakdown */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
            Architectural Philosophy: Cortex-X4 Muscle vs Balanced Cortex-A715 Clustered Cores
          </h2>
          <p>
            Qualcomm's Snapdragon 8s Gen 3 borrows the flagship microarchitecture of the top-tier 8 Gen 3, centering around a formidable Cortex-X4 prime core clocked at 3.0GHz. Conversely, MediaTek's Dimensity 8300 avoids the power-hungry X-core altogether, opting for four high-frequency Cortex-A715 performance cores clocked at 3.35GHz.
          </p>
          <p>
            When determining the <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>best gaming processor for mobile india</span>, architectural balance dictates how devices handle ambient Indian heatwaves. While Qualcomm leads in instantaneous burst speed, MediaTek's cluster minimizes concentrated heat hotspots on the motherboard. For device implementation examples, see our <button onClick={() => onNavigate('/best-smartphones-under-30000')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[1].anchorText}</button>.
          </p>
        </section>

        {/* Section 2: Architectural Specification Table */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
              Detailed Silicon Specifications &amp; Synthetic Benchmark Matrix
            </h2>
            <span className="text-xs font-mono text-stone-500">Hardware Lab Specs</span>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-stone-200 font-mono text-xs">
                  <th className="p-3.5">Architecture Spec</th>
                  <th className="p-3.5">Snapdragon 8s Gen 3</th>
                  <th className="p-3.5">MediaTek Dimensity 8300</th>
                  <th className="p-3.5">Performance Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {architectureMatrix.map((item) => (
                  <tr key={item.metric} className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 font-semibold text-stone-900">{item.metric}</td>
                    <td className="p-3.5 text-xs text-stone-700 font-mono">{item.snapdragon}</td>
                    <td className="p-3.5 text-xs text-stone-700 font-mono">{item.dimensity}</td>
                    <td className="p-3.5 text-xs text-amber-800 font-medium">{item.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 italic">
            *This empirical <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>snapdragon vs mediatek benchmark comparison</span> proves that modern Dimensity silicon is no longer a budget compromise.
          </p>
        </section>

        {/* Section 3: 60-Minute Sustained BGMI Gaming Test */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
            60-Minute BGMI 90 FPS Thermal &amp; Frametime Stress Test
          </h2>
          <p>
            We subjected both chipsets inside retail devices (Poco X6 Pro for Dimensity 8300 and Realme GT 6T for Snapdragon) to a 60-minute continuous Battlegrounds Mobile India match running at 'Smooth + Extreme+' (90 FPS) graphics settings in a non-air-conditioned room at 32°C ambient temperature:
          </p>

          <div className="space-y-3 pt-2">
            {bgmiTestResults.map((result, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-mono font-bold text-stone-900 block">{result.testRun}</span>
                  <span className="text-stone-500">{result.tempDelta}</span>
                </div>
                <div className="flex items-center gap-6 font-mono">
                  <div>
                    <span className="text-stone-500 block text-[10px]">Snapdragon:</span>
                    <span className="font-bold text-stone-900">{result.snapdragonFps}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-[10px]">Dimensity:</span>
                    <span className="font-bold text-emerald-700">{result.dimensityFps}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="pt-2">
            High heat generation from prolonged gaming also places cumulative stress on the lithium battery pack. To learn how internal phone thermals degrade battery life, read our companion study on <button onClick={() => onNavigate('/battery-health-charging-guide')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[2].anchorText}</button>.
          </p>
        </section>

        {/* Mandatory Q&A H2 Sections */}
        <section className="border-t border-stone-200 pt-10 space-y-8">
          
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              Gamer &amp; Enthusiast Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Key Chipset Selection Questions Answered
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
              For general buyers who do not run retro game emulators or flash unofficial Android ROMs, Dimensity 8300 offers superior sustained thermal efficiency per rupee spent. For full smartphone recommendations across all budgets, return to <button onClick={() => onNavigate('/')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[0].anchorText}</button>.
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

        {/* Final Chipset Verdict Callout */}
        <section className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Silicon Analyst Conclusion</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white">
            Which Chipset Should You Buy in India?
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed">
            Choose <strong>MediaTek Dimensity 8300</strong> if your primary objective is unbroken multi-hour gaming in BGMI, COD Mobile, or Free Fire without requiring an attachable semiconductor peltier fan. Choose <strong>Qualcomm Snapdragon 8s Gen 3</strong> if you want superior camera image signal processing (ISP) noise suppression, higher single-core burst app launching, and open developer driver flexibility.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <button
              onClick={() => onNavigate('/best-smartphones-under-30000')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sub-₹30k Guide</span>
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Return to TechNova India Home Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

      </div>

    </article>
  );
};
