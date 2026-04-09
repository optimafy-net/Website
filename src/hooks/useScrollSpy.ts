import { useState, useEffect } from 'react';

export const useScrollSpy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const current = ids.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (current && current !== activeId) {
        setActiveId(current);
        // Update URL hash without jumping
        window.history.pushState(null, '', `#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
};
