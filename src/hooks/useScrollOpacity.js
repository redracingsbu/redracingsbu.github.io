import { useEffect, useRef, useState } from 'react';

export function useScrollOpacity({ fadeDistanceRatio = 0.6 } = {}) {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const rafIdRef = useRef(0);
  const lastOpacityRef = useRef(1);

  useEffect(() => {
    const update = () => {
      rafIdRef.current = 0;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const nextOpacity = Math.max(0, 1 - scrollY / (windowHeight * fadeDistanceRatio));

      if (Math.abs(nextOpacity - lastOpacityRef.current) < 0.001) return;

      lastOpacityRef.current = nextOpacity;
      setScrollOpacity(nextOpacity);
    };

    const handleScroll = () => {
      if (rafIdRef.current) return;
      rafIdRef.current = window.requestAnimationFrame(update);
    };

    // Set initial opacity (in case the page is loaded mid-scroll)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = 0;
    };
  }, [fadeDistanceRatio]);

  return scrollOpacity;
}
