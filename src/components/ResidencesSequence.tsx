import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

const FRAME_COUNT = 192;

export default function ResidencesSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);
  
  // Track scroll for text animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 1], [1, 1, 0, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.1, 0.25, 1], [0, 0, -50, -50]);
  
  // Background & Canvas fading
  const backgroundColor = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], ["#111111", "#111111", "#111111", "#FBFBFA"]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  
  // Pre-allocated image array
  const images = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT));
  const loadedCount = useRef(0);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d", { alpha: false });
    
    // Load all frames concurrently
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(5, '0');
      img.src = `/house%202/${paddedIndex}.jpg`;
      img.onload = () => {
        images.current[i - 1] = img;
        loadedCount.current++;
        
        if (i === 1 && canvasRef.current && context) {
          context.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
        
        if (loadedCount.current === 1) {
          setImagesLoaded(true);
        }
      };
    }
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current) return;
    
    const targetIndex = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(latest) - 1));
    
    let img = images.current[targetIndex];
    if (!img || !img.complete) {
      for (let j = targetIndex - 1; j >= 0; j--) {
        if (images.current[j]?.complete) {
          img = images.current[j];
          break;
        }
      }
    }
    
    if (img?.complete) {
      const ctx = canvasRef.current.getContext('2d', { alpha: false });
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  });

  return (
    <motion.section ref={containerRef} style={{ backgroundColor }} className="h-[300vh] relative text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* We assume images are standard 1920x1080 (16:9). 
            Using object-cover to match window size */}
        <motion.canvas 
          ref={canvasRef} 
          width={1920} 
          height={1080} 
          style={{ opacity: canvasOpacity }}
          className="w-full h-full object-cover"
        />
        
        {/* Texts Overlay Container */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
          
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-sans font-black uppercase tracking-tighter leading-[0.85] mb-6">
              The <span className="italic font-light text-[#D4AF37]">Residences</span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
              Sanctuaries of scale, light, and materiality. Discover a curated collection of homes designed for the most discerning.
            </p>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}
