import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  threshold = 0.1,
  once = true,
  className = '',
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(node);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
