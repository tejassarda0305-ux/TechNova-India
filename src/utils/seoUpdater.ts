import { PageSEOData } from '../types/seo';

/**
 * Updates the actual HTML <head> elements in the DOM for the given page.
 * This guarantees real route-specific SEO tags rather than only cosmetic DOM text.
 */
export function updateDOMSEO(pageData: PageSEOData): void {
  if (typeof document === 'undefined') return;

  // 1. Update Title tag
  document.title = pageData.seoTitle;

  // Helper to get or create <meta> tag
  const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // 2. Meta description
  setMetaTag('name', 'description', pageData.metaDescription);

  // 3. Canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', pageData.canonicalUrl);

  // 4. OpenGraph tags
  setMetaTag('property', 'og:title', pageData.seoTitle);
  setMetaTag('property', 'og:description', pageData.metaDescription);
  setMetaTag('property', 'og:url', pageData.canonicalUrl);
  setMetaTag('property', 'og:type', pageData.ogType);
  setMetaTag('property', 'og:site_name', 'TechNova India');
  if (pageData.heroImage?.src) {
    // Resolve absolute URL for image if needed
    const imgUrl = pageData.heroImage.src.startsWith('http') 
      ? pageData.heroImage.src 
      : `${window.location.origin}${pageData.heroImage.src}`;
    setMetaTag('property', 'og:image', imgUrl);
    setMetaTag('name', 'twitter:image', imgUrl);
  }

  // 5. Twitter Card tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', pageData.seoTitle);
  setMetaTag('name', 'twitter:description', pageData.metaDescription);

  // 6. Schema.org JSON-LD structured data
  const SCRIPT_ID = 'technova-schema-jsonld';
  let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = SCRIPT_ID;
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(pageData.schemaJsonLd, null, 2);

  // Dispatch custom event so the SEO presentation inspector can re-inspect the live DOM immediately
  window.dispatchEvent(new CustomEvent('seo:updated', { detail: pageData }));
}

/**
 * Reads live metadata directly from the active DOM head for verification
 */
export function readLiveDOMHead() {
  if (typeof document === 'undefined') return null;

  const title = document.title;
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
  const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
  const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
  const ogType = document.querySelector('meta[property="og:type"]')?.getAttribute('content') || '';
  const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '';
  const jsonLdContent = document.getElementById('technova-schema-jsonld')?.textContent || '';

  return {
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterCard,
    jsonLdContent
  };
}
