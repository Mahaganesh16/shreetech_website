'use client';

import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      if (
        direction !== scrollDirection &&
        (currentScrollY - lastScrollY > 10 || currentScrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }

      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    updateScrollDirection();

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return { scrollDirection, scrollY, isScrolled };
}

