import { useState, useEffect } from 'react';

export const useAnalytics = () => {
  const [scrollDepthsTracked, setScrollDepthsTracked] = useState<number[]>([]);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const scrollPercent = (scrollPos / scrollHeight) * 100;

      const depths = [25, 50, 75, 100];
      depths.forEach(depth => {
        if (scrollPercent >= depth && !scrollDepthsTracked.includes(depth)) {
          console.log(`[Analytics] User reached ${depth}% scroll depth`);
          setScrollDepthsTracked(prev => [...prev, depth]);
          // Here you would call GTM or GA4 event track
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDepthsTracked]);

  const trackCTA = (label: string) => {
    console.log(`[Analytics] CTA Click: ${label}`);
  };

  const trackFormAbandonment = (field: string) => {
    console.log(`[Analytics] User left form at field: ${field}`);
  };

  useEffect(() => {
    return () => {
      const timeOnPage = (Date.now() - startTime) / 1000;
      console.log(`[Analytics] Total time on page: ${timeOnPage}s`);
    };
  }, [startTime]);

  return { trackCTA, trackFormAbandonment };
};
