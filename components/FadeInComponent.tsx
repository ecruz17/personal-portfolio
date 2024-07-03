import React, { useEffect, useRef } from 'react';
import styles from './Animations.module.css';

interface Props {
  children: React.ReactNode;
  direction?: string;
}

export const FadeInComponent = ({ children, direction = "left" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${direction === "left" ? styles.fadeInLeft : styles.fadeInRight}`}>
      {children}
    </div>
  );
};
