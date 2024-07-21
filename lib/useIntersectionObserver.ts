import { useEffect, useState, useRef, MutableRefObject } from 'react';

export const useIntersectionObserver = (): {
  ref: MutableRefObject<HTMLDivElement | null>;
  isIntersecting: boolean;
} => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry);
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { ref, isIntersecting };
};
