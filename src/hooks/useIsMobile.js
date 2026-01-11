import { useEffect, useState } from 'react';

function getIsMobile(breakpointPx) {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(max-width: ${breakpointPx - 1}px)`).matches;
}

export function useIsMobile(breakpointPx = 1024) {
  const [isMobile, setIsMobile] = useState(() => getIsMobile(breakpointPx));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(max-width: ${breakpointPx - 1}px)`,
    );

    const handleChange = () => {
      setIsMobile(mediaQueryList.matches);
    };

    handleChange();

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
      return () => mediaQueryList.removeEventListener('change', handleChange);
    }

    mediaQueryList.addListener(handleChange);
    return () => mediaQueryList.removeListener(handleChange);
  }, [breakpointPx]);

  return isMobile;
}
