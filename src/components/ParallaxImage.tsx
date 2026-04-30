import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  magnitude?: number; // 0 to 1 scale, e.g., 0.15 is subtle, 0.45 is very pronounced
}

export default function ParallaxImage({ src, alt, className = "", containerClassName = "", magnitude = 0.15 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Add multiple offsets to smooth parallax when element is at top
    offset: ["start end", "end start"]
  });

  const scale = 1 + (magnitude * 2);
  const y = useTransform(scrollYProgress, [0, 1], [`-${magnitude * 100}%`, `${magnitude * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${containerClassName}`}>
      <motion.img 
        style={{ y, scale }}
        src={src} 
        alt={alt} 
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover origin-center ${className}`}
      />
    </div>
  );
}
