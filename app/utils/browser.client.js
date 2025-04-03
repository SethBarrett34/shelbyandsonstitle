/**
 * Browser utilities to help with cross-browser compatibility
 * Only runs on the client side
 */

/**
 * Force reload CSS to avoid browser caching issues
 */
export const reloadStylesheets = () => {
  if (typeof document === 'undefined') return; // Server-side check
  
  const links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.rel === 'stylesheet' && link.href) {
      const url = new URL(link.href);
      url.searchParams.set('_t', Date.now().toString());
      link.href = url.toString();
    }
  }
};

/**
 * Apply consistent styling for service cards across browsers
 */
export const normalizeServiceCardStyling = () => {
  if (typeof document === 'undefined') return; // Server-side check
  
  // Find all service cards and apply consistent styling
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    // Reset any browser-specific styling
    card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    card.style.backgroundColor = 'white';
    card.style.border = '1px solid #e5e7eb';
    
    // Add consistent hover effect
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      card.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      card.style.transform = 'translateY(0)';
    });
  });
};

/**
 * Detect browser vendor and apply specific fixes if needed
 */
export const detectBrowser = () => {
  if (typeof navigator === 'undefined') return null; // Server-side check
  
  const userAgent = navigator.userAgent;
  let browserName;
  
  // More reliable Brave detection
  const isBrave = async () => {
    try {
      return navigator.brave && await navigator.brave.isBrave.call(navigator);
    } catch (e) {
      return false;
    }
  };
  
  // Check for Edge first (Edge contains Chrome in UA)
  if (userAgent.indexOf("Edg") !== -1) {
    browserName = "edge";
  } 
  // Check for Opera (also contains Chrome in UA)
  else if (userAgent.indexOf("OPR") !== -1 || userAgent.indexOf("Opera") !== -1) {
    browserName = "opera";
  }
  // Firefox check
  else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  }
  // Safari check (must exclude Chrome)
  else if (userAgent.match(/safari/i) && userAgent.indexOf("Chrome") === -1) {
    browserName = "safari";
  }
  // Check for Chrome
  else if (userAgent.match(/chrome|chromium|crios/i)) {
    // This will be further checked for Brave
    browserName = "chrome";
  }
  else {
    browserName = "unknown";
  }
  
  // Try to detect Brave asynchronously
  if (browserName === "chrome") {
    isBrave().then(isBraveBrowser => {
      if (isBraveBrowser) {
        browserName = "brave";
        document.documentElement.classList.add(`browser-brave`);
      }
    }).catch(() => {
      // Ignore errors in Brave detection
    });
  }
  
  // Add browser-specific class to html element
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add(`browser-${browserName}`);
  }
  
  return browserName;
};

/**
 * Initialize browser compatibility fixes
 */
export const initBrowserCompat = () => {
  if (typeof window === 'undefined') return; // Server-side check
  
  // Detect browser
  const browser = detectBrowser();
  
  // Force reload CSS after slight delay to ensure all styles are loaded
  setTimeout(reloadStylesheets, 200);
  
  // Apply consistent styling to service cards
  setTimeout(normalizeServiceCardStyling, 500);
  
  // Add listener for route changes
  document.addEventListener('remix:navigation', () => {
    // Reload stylesheets on route changes
    setTimeout(reloadStylesheets, 100);
    
    // Re-apply consistent styling to service cards
    setTimeout(normalizeServiceCardStyling, 300);
  });
};

// Auto-initialize in browser environments
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initBrowserCompat);
  
  // Add a secondary initialization after full page load
  window.addEventListener('load', () => {
    setTimeout(normalizeServiceCardStyling, 300);
  });
} 