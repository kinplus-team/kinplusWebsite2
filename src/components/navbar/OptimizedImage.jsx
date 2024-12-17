import { useInView } from "react-intersection-observer";
import React, { memo } from "react";

const OptimizedImage = memo(({ src, alt, width, height, priority = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <div
      ref={ref}
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        style={{ opacity: inView ? 1 : 0 }}
        className="transition-opacity duration-100"
      />
    </div>
  );
});

export default OptimizedImage;
