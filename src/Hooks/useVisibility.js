
import { useState, useEffect, useRef } from 'react';

const useVisibility = (threshold = 0.4) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Element is 40% visible
          } else {
            setIsVisible(false); // Element is not visible
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: threshold, // Trigger visibility at specified threshold (default 0.4)
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold]);

  return [targetRef, isVisible ]
};

export default useVisibility
