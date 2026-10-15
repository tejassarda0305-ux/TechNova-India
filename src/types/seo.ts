export type PageRoute = 
  | '/'
  | '/best-smartphones-under-30000'
  | '/battery-health-charging-guide'
  | '/snapdragon-vs-dimensity-comparison';

export interface KeywordData {
  keyword: string;
  type: 'main' | 'related';
  searchVolumeIndia: string;
  keywordDifficulty: number; // 0-100
  intent: 'Commercial' | 'Informational' | 'Transactional' | 'Navigational';
  cpcINR: string;
  targetPlacement: string;
}

export interface QASection {
  question: string;
  answer: string;
  keyInsights: string[];
}

export interface InternalLinkItem {
  anchorText: string;
  targetUrl: PageRoute;
  contextNote: string;
}

export interface ImageOptimizationData {
  src: string;
  altText: string;
  caption: string;
  dimensions: string;
  format: string;
  compressionNote: string;
}

export interface PageSEOData {
  route: PageRoute;
  navTitle: string;
  pageType: 'Home' | 'Article';
  
  // Real Head Tags
  seoTitle: string; // 30-60 chars target
  metaDescription: string; // 120-160 chars target
  canonicalUrl: string;
  
  // Keywords
  mainKeyword: string;
  relatedKeywords: [string, string];
  keywordsResearch: KeywordData[];
  
  // Headings
  h1: string;
  h2QASections: [QASection, QASection, ...QASection[]];
  
  // Social Cards
  ogType: 'website' | 'article';
  ogImage: string;
  
  // Rich Structured Data Schema (JSON-LD)
  schemaJsonLd: Record<string, any>;
  
  // Content & Assets
  heroImage: ImageOptimizationData;
  supportingImages?: ImageOptimizationData[];
  internalLinks: InternalLinkItem[];
  
  // Editorial Metadata
  author: string;
  publishDate: string;
  modifiedDate: string;
  estimatedReadTime: string;
  wordCount: number;
}
