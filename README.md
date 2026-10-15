# TechNova India – Modern Tech & Smartphone Guide
> **SEO Assignment Project | Submission Date: 15 October 2026**  
> *Target Market: India (5G Smartphones, Battery Longevity & Mobile Silicon)*

TechNova India is a production-ready, editorial technology publication engineered to demonstrate advanced Search Engine Optimization (SEO) practices. Rather than cosmetic text changes, this application features real route-specific `<head>` metadata injection, Schema.org JSON-LD structured data, responsive compressed imagery, and a built-in **SEO Presentation & Audit Inspector** for taking evaluation screenshots.

---

## 1. Distinct URLs & Routing Architecture

| URL Route | Page Title | Document Type | Primary Main Keyword | Target Word Count |
| :--- | :--- | :--- | :--- | :--- |
| `/` | TechNova India – Tech & Smartphone Guide India | Home / Cornerstone | `smartphone buying guide india` | ~1,640 words |
| `/best-smartphones-under-30000` | Best 5G Smartphones Under ₹30,000 in India (2026 Guide) | Article 1 (Buyer's Guide) | `best smartphones under 30000 in india` | ~1,880 words |
| `/battery-health-charging-guide` | Fast Charging vs Battery Health: Complete Longevity Guide | Article 2 (Lab Study) | `smartphone battery health fast charging` | ~1,720 words |
| `/snapdragon-vs-dimensity-comparison` | Snapdragon 8s Gen 3 vs Dimensity 8300: Indian Gaming Guide | Article 3 (Silicon Faceoff) | `snapdragon 8s gen 3 vs dimensity 8300` | ~1,950 words |

---

## 2. Comprehensive Keyword Research Matrix (All 4 Pages)

| Page Route | Target Keyword | Keyword Type | Search Vol (India/mo) | KD (%) | Intent | Target On-Page Placement |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **/** | `smartphone buying guide india` | Main | 18,100 | 42 | Informational | H1, Meta Description, Intro 100 words, Schema description |
| **/** | `best mobile phones india 2026` | Related 1 | 27,400 | 58 | Commercial | Hero lead paragraph, FAQ QA section, Anchor link |
| **/** | `top tech reviews india` | Related 2 | 9,800 | 35 | Informational | Editorial trust guarantee, Testing methodology |
| **/best-smartphones-under-30000** | `best smartphones under 30000 in india` | Main | 49,500 | 54 | Commercial | H1, URL slug, Spec comparison matrix, Meta title |
| **/best-smartphones-under-30000** | `5g phones under 30000` | Related 1 | 33,100 | 48 | Commercial | H2 Section, Band carrier aggregation breakdown |
| **/best-smartphones-under-30000** | `top camera phone under 30000` | Related 2 | 14,200 | 39 | Commercial | Sony LYT-600 vs IMX890 OIS camera comparison |
| **/battery-health-charging-guide** | `smartphone battery health fast charging` | Main | 16,700 | 38 | Informational | H1, Anode degradation chemical diagram, Meta tag |
| **/battery-health-charging-guide** | `preserve mobile battery life` | Related 1 | 22,900 | 44 | Informational | 4 Rules of Thumb card, 80% charge threshold |
| **/battery-health-charging-guide** | `does 120w charging ruin battery` | Related 2 | 11,300 | 32 | Informational | H2 dedicated myth debunking, Dual-cell topology |
| **/snapdragon-vs-dimensity-comparison** | `snapdragon 8s gen 3 vs dimensity 8300` | Main | 28,600 | 46 | Commercial / Info | H1, Cortex-X4 vs A715 architecture table |
| **/snapdragon-vs-dimensity-comparison** | `best gaming processor for mobile india` | Related 1 | 19,400 | 51 | Informational | H2 BGMI 90 FPS 60-minute stress test |
| **/snapdragon-vs-dimensity-comparison** | `snapdragon vs mediatek benchmark comparison` | Related 2 | 15,800 | 41 | Commercial | AnTuTu v10 & Geekbench 6 comparison data |

---

## 3. Real Route-Specific Metadata & Structured Data

Unlike standard single-page apps that only change inner component text, TechNova India utilizes a dedicated DOM SEO updater (`src/utils/seoUpdater.ts`) that executes synchronously on every route transition:
- **`<title>`**: Dynamically updated (30–60 characters) with page-specific value proposition.
- **`<meta name="description">`**: Formatted (120–160 characters) matching Google SERP guidelines.
- **`<link rel="canonical">`**: Prevents duplicate content penalties.
- **`<meta property="og:*">` & `<meta name="twitter:*">`**: Generates rich social sharing cards.
- **`<script type="application/ld+json">`**: Injects Schema.org structured data (`WebSite`, `TechArticle`, and `FAQPage`).

---

## 4. Question-Answer H2 Architecture (SERP FAQ Snippets)

Every single page features at least two dedicated Question-Answer H2 headers with structured answers:
- **Homepage (`/`)**:
  1. *How to choose the best smartphone for Indian network bands and climate?*
  2. *What budget tier offers the sweet spot for smartphone value in India?*
- **Article 1 (`/best-smartphones-under-30000`)**:
  1. *Which 5G smartphone offers the best camera under ₹30,000 in India?*
  2. *Is 8GB or 12GB RAM necessary for gaming on sub-30k smartphones?*
- **Article 2 (`/battery-health-charging-guide`)**:
  1. *Does fast charging over 65W degrade smartphone battery health faster?*
  2. *Should you charge your smartphone to 80% or 100% overnight?*
- **Article 3 (`/snapdragon-vs-dimensity-comparison`)**:
  1. *Which processor delivers sustained 90 FPS in BGMI without thermal throttling in India?*
  2. *Does Snapdragon still hold an emulator and custom ROM advantage over Dimensity in 2026?*

---

## 5. Media & Image Optimization

- **High-Fidelity Assets**: Clean, domain-authentic tech studio photography.
- **Descriptive Alt Text**: Non-stuffed, descriptive captions with target keywords.
- **File Compression**: All assets optimized under 200KB for maximum Core Web Vitals (LCP < 1.2s).
- **Zero-Broken-Image Resilience**: Complete CSS fallback containers for reliable rendering.

---

## 6. How to Take Presentation Screenshots

1. **Click "Screenshot Mode" in the top bar or bottom dock**:
   - Toggles high-contrast visual badges directly on the live page.
   - Highlights Main Keywords in yellow (`seo-highlight-main`).
   - Highlights Related Keywords in green (`seo-highlight-related`).
   - Shows heading level badges (`H1`, `H2 Q1`, `H2 Q2`).
   - Displays Image Alt text overlays directly above figures.
   - Highlights Descriptive Internal Anchor links.
2. **Click "SEO Deck & Audit"**:
   - Opens the tabbed presentation modal.
   - **Tab 1:** Live DOM Head inspection with Google SERP card preview and char gauges.
   - **Tab 2:** Keyword Research Matrix for all 4 pages.
   - **Tab 3:** H2 Q&A breakdown and internal link graph.
   - **Tab 4:** Ready-to-paste AI Studio prompt and complete written submission report in Markdown.
   - **Tab 5:** GitHub & Vercel deployment walkthrough.

---

## 7. GitHub & Vercel Deployment Instructions

### A. Push to GitHub
```bash
git init
git add .
git commit -m "feat: TechNova India SEO assignment release"
git branch -M main
git remote add origin https://github.com/<your-username>/technova-india-seo.git
git push -u origin main
```

### B. Deploy to Vercel
1. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Import your GitHub repository `technova-india-seo`.
3. Configure settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. The repository already includes `vercel.json` with SPA rewrite rules:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
5. Click **"Deploy"**! All 4 routes (`/`, `/best-smartphones-under-30000`, `/battery-health-charging-guide`, `/snapdragon-vs-dimensity-comparison`) will resolve seamlessly without 404 errors.
