"use client";

import React, { useRef } from "react";

export const SlideIn = (props: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current !== null) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("animate-slide-up");
          ref.current?.classList.remove("opacity-0");
        }
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);
  return (
    <div className="opacity-0" ref={ref}>
      {props.children}
    </div>
  );
};
