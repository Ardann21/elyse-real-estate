import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

const FRAME_COUNT = 192;

export default function SequenceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);
  
  // Track scroll for text animations
  const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.3, 0.4, 1], [0, 0, 1, 1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.3, 0.4, 1], [50, 50, 0, 0, -50, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8, 0.9, 1], [0, 0, 1, 1, 0, 0]);
  const text2Y = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8, 0.9, 1], [50, 50, 0, 0, -50, -50]);
  
  // Background & Canvas fading
  const backgroundColor = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], ["#111111", "#111111", "#111111", "#FBFBFA"]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  
  // Pre-allocated image array — frames slot into correct positions as they load
  const images = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT));
  const loadedCount = useRef(0);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d", { alpha: false });
    
    // Load all frames concurrently — browser manages 6 connections internally
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(5, '0');
      img.src = `/house/${paddedIndex}.jpg`;
      img.onload = () => {
        images.current[i - 1] = img;
        loadedCount.current++;
        
        // Draw first frame immediately when loaded
        if (i === 1 && canvasRef.current && context) {
          context.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
        
        // Mark as loaded when first frame is ready (enables scroll interaction immediately)
        if (loadedCount.current === 1) {
          setImagesLoaded(true);
        }
      };
    }
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current) return;
    
    const targetIndex = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(latest) - 1));
    
    // Find the target frame, or nearest loaded frame as fallback
    let img = images.current[targetIndex];
    if (!img || !img.complete) {
      // Search backward for nearest loaded frame
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
    <motion.section ref={containerRef} style={{ backgroundColor }} className="h-[400vh] relative text-white">
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
        <div className="absolute inset-0 z-10 pointer-events-none">
          
          {/* First Text - Left Side */}
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 max-w-sm"
          >
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Fluid <br/><span className="italic font-light text-[#D4AF37]">Form</span>
            </h2>
            <p className="font-light text-white/80 text-lg leading-relaxed">
              Every curve of the structure is intentionally mapped to capture the rhythm of the surrounding light, shifting perspectives from dawn to dusk.
            </p>
          </motion.div>
          
          {/* Second Text - Right Side */}
          <motion.div 
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 max-w-sm text-right"
          >
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Seamless<br/>
              <span className="italic font-light text-[#D4AF37]">Integration</span>
            </h2>
            <p className="font-light text-white/80 text-lg leading-relaxed">
              Living spaces extend harmoniously into the natural canopy, erasing the boundaries between the interior sanctuary and the exterior world.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
