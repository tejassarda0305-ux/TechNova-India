import React from 'react';
import { PageRoute, PageSEOData } from '../types/seo';
import { PAGES_DATA } from '../data/pagesData';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Star } from 'lucide-react';

interface ArticleProps {
  onNavigate: (route: PageRoute) => void;
  seoModeActive: boolean;
}

export const Sub30kArticlePage: React.FC<ArticleProps> = ({ onNavigate, seoModeActive }) => {
  const pageData = PAGES_DATA['/best-smartphones-under-30000'];

  const phoneLineup = [
    {
      name: 'Realme GT 6T',
      chipset: 'Snapdragon 7+ Gen 3',
      antutu: '1,320,000',
      display: '6.78" 1.5K 120Hz LTPO 6000-nit',
      camera: '50MP Sony LYT-600 OIS',
      battery: '5500 mAh / 120W SuperVOOC',
      price: '₹28,999',
      bestFor: 'Best Overall Display & Charging'
    },
    {
      name: 'Poco X6 Pro 5G',
      chipset: 'Dimensity 8300-Ultra',
      antutu: '1,385,000',
      display: '6.67" 1.5K 120Hz AMOLED Flow',
      camera: '64MP Omnivision OIS',
      battery: '5000 mAh / 67W Turbo',
      price: '₹24,999',
      bestFor: 'Pure Gaming FPS Value'
    },
    {
      name: 'OnePlus Nord 4',
      chipset: 'Snapdragon 7+ Gen 3',
      antutu: '1,290,000',
      display: '6.74" 1.5K 120Hz Super Fluid',
      camera: '50MP Sony LYT-600 OIS',
      battery: '5500 mAh / 100W SUPERVOOC',
      price: '₹29,999',
      bestFor: 'All-Metal Unibody & 4 Years OS Updates'
    },
    {
      name: 'Nothing Phone (2a) Plus',
      chipset: 'Dimensity 7350 Pro',
      antutu: '805,000',
      display: '6.7" FHD+ 120Hz Flexible AMOLED',
      camera: '50MP Samsung GN9 OIS + 50MP Ultra-wide',
      battery: '5000 mAh / 50W Fast',
      price: '₹27,999',
      bestFor: 'Cleanest Software & Dual 50MP Cameras'
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
          <span className="text-stone-800 font-medium">Article 1</span>
          <span>/</span>
          <span className="text-stone-500 truncate max-w-xs">{pageData.navTitle}</span>
        </nav>
      </div>

      {/* Article Header & Byline */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
            <span className="font-semibold text-amber-700 uppercase tracking-wider">Benchmark Guide</span>
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
            Selecting the <span className={seoModeActive ? 'seo-highlight-main font-semibold' : ''}>best smartphones under 30000 in india</span> in 2026 requires looking past headline Megapixels and marketing benchmarks. Our New Delhi hardware testing lab subjected the top contenders to sustained BGMI 90 FPS gaming in 35°C ambient temperatures, 4K video recording thermal checks, and battery degradation tracking.
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
        
        {/* Section 1: The ₹30,000 Paradigm Shift */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
            The Sub-₹30,000 Shift: Flagship Hardware Without Flagship Prices
          </h2>
          <p>
            Historically, buying a mid-range phone meant compromising on either camera stabilization or sustained thermal performance. In 2026, the competitive landscape for <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>5g phones under 30000</span> has fundamentally flipped. With upper-midrange silicon built on TSMC's 4nm node, these smartphones match the raw computational horsepower of 2024 tier-1 flagships while delivering significantly better battery endurance.
          </p>
          <p>
            As detailed in <button onClick={() => onNavigate('/')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[0].anchorText}</button>, consumer priorities in India demand reliable cellular reception in multi-story high-rises and rapid thermal dissipation during high-traffic commute navigation.
          </p>
        </section>

        {/* Section 2: Comprehensive Specification & Benchmark Table */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
              Head-to-Head Specification &amp; Laboratory Benchmark Matrix
            </h2>
            <span className="text-xs font-mono text-stone-500">Tested Oct 2026</span>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-stone-200 font-mono text-xs">
                  <th className="p-3.5">Device Name</th>
                  <th className="p-3.5">Processor &amp; AnTuTu</th>
                  <th className="p-3.5">Display Panel</th>
                  <th className="p-3.5">Primary Camera</th>
                  <th className="p-3.5">Battery / Fast Charge</th>
                  <th className="p-3.5">Price (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {phoneLineup.map((phone) => (
                  <tr key={phone.name} className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 font-semibold text-stone-900">
                      <div>{phone.name}</div>
                      <span className="text-[11px] text-amber-700 font-normal">{phone.bestFor}</span>
                    </td>
                    <td className="p-3.5">
                      <div className="font-medium">{phone.chipset}</div>
                      <div className="font-mono text-stone-500 text-xs tabular-nums">{phone.antutu} pts</div>
                    </td>
                    <td className="p-3.5 text-xs text-stone-600">{phone.display}</td>
                    <td className="p-3.5 text-xs text-stone-600">{phone.camera}</td>
                    <td className="p-3.5 text-xs">
                      <div className="font-medium text-stone-900">{phone.battery}</div>
                      <button 
                        onClick={() => onNavigate('/battery-health-charging-guide')}
                        className={`text-[11px] text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'font-mono text-blue-700' : ''}`}
                      >
                        Longevity stats ›
                      </button>
                    </td>
                    <td className="p-3.5 font-mono font-bold text-stone-900 whitespace-nowrap">
                      {phone.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 italic">
            *AnTuTu v10 scores averaged across 3 consecutive runs at 28°C ambient room temperature with flight mode disabled.
          </p>
        </section>

        {/* Section 3: Camera Analysis */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {seoModeActive && <span className="seo-heading-badge bg-blue-600 text-white">H2</span>}
            Finding the Top Camera Phone Under ₹30,000
          </h2>
          <p>
            When hunting for a <span className={seoModeActive ? 'seo-highlight-related font-semibold' : ''}>top camera phone under 30000</span>, the presence of a Sony LYT-600 or IMX890 sensor with true optical image stabilization is the critical differentiator. Budget phones frequently inflate marketing spec sheets with useless 2-megapixel macro and depth modules. In our portrait tests, the OnePlus Nord 4 and Realme GT 6T demonstrated superior highlight rolloff in challenging direct Indian afternoon sun.
          </p>
          <p>
            Furthermore, image processing pipeline latency directly ties into thermal headroom. For a technical analysis of how thermal throttling impacts image signal processing (ISP) frame rates, refer to our <button onClick={() => onNavigate('/snapdragon-vs-dimensity-comparison')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[2].anchorText}</button>.
          </p>
        </section>

        {/* Mandatory Q&A H2 Sections */}
        <section className="border-t border-stone-200 pt-10 space-y-8">
          
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              Consumer Q&amp;A Section
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Critical Buyer Inquiries for Sub-₹30,000 Phones
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
              Fast charging speeds in this category range from 67W to 120W. To evaluate if ultra-high wattage compromises your phone's battery over a 3-year ownership span, check our laboratory investigation on <button onClick={() => onNavigate('/battery-health-charging-guide')} className={`font-semibold text-amber-700 hover:underline cursor-pointer ${seoModeActive ? 'p-1 rounded bg-blue-50 border border-blue-200 text-blue-800' : ''}`}>{pageData.internalLinks[1].anchorText}</button>.
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

        {/* Final Verdict Callout */}
        <section className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>TechNova India October 2026 Lab Verdict</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white">
            Our Top Recommended Pick Under ₹30,000
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed">
            For users seeking an uncompromising daily driver, the <strong>Realme GT 6T</strong> captures our highest recommendation due to its class-leading 6,000-nit LTPO display that remains perfectly legible under direct Delhi sun, paired with consistent 120W dual-cell charging. For hardcore gaming enthusiasts demanding maximum sustained FPS per rupee, the <strong>Poco X6 Pro</strong> represents unbeatable raw value at ₹24,999.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <button
              onClick={() => onNavigate('/')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Buying Guide</span>
            </button>
            <button
              onClick={() => onNavigate('/battery-health-charging-guide')}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next Guide: Battery Health &amp; 120W Longevity</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

      </div>

    </article>
  );
};
