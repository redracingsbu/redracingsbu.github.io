/**
 * Utility functions for tracking GoatCounter analytics in a React SPA.
 * Handles the edge case where the GoatCounter async script hasn't fully loaded yet.
 */

const waitForGoatCounter = (callback, maxRetries = 50, intervalMs = 100) => {
  let retries = 0;
  
  const check = () => {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      callback();
    } else if (retries < maxRetries) {
      retries++;
      setTimeout(check, intervalMs);
    }
  };
  
  check();
};

export const trackPageview = (path) => {
  waitForGoatCounter(() => {
    window.goatcounter.count({
      path: path,
    });
  });
};

export const trackEvent = (eventName, title = '') => {
  waitForGoatCounter(() => {
    window.goatcounter.count({
      path: eventName,
      title: title || eventName,
      event: true,
    });
  });
};
