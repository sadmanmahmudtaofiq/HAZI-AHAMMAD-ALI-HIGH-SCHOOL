import { useEffect, useRef, useState } from "react";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
  direction = "up", // "up", "none"
  tag = "div",
}) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    );
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;
    const currentEl = elementRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.unobserve(currentEl);
    };
  }, [threshold, isVisible]);

  const Component = tag;

  return (
    <Component
      ref={elementRef}
      className={`reveal-item ${isVisible ? "is-revealed" : ""} reveal-${direction} ${className}`}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
