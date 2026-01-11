import { useEffect, useState } from 'react';

export function useScrollOpacity({ fadeDistanceRatio = 0.6 } = {}) {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const nextOpacity = Math.max(0, 1 - scrollY / (windowHeight * fadeDistanceRatio));
      setScrollOpacity(nextOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fadeDistanceRatio]);

  return scrollOpacity;
}
