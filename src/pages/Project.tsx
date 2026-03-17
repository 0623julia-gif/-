import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, GripVertical } from "lucide-react";

const MorphOverlay = () => (
  <motion.div
    className="fixed inset-0 z-50 bg-[#11152B] pointer-events-none"
    initial={{ clipPath: "circle(150% at 50% 50%)" }}
    animate={{ clipPath: "circle(0% at 50% 50%)" }}
    exit={{ clipPath: "circle(150% at 50% 50%)" }}
    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
  />
);

export default function Project() {
  const { id } = useParams();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const onUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging]);

  const skeletonImg = `https://picsum.photos/seed/wireframe${id}/1200/800?grayscale&blur=2`;
  const finalImg = `https://picsum.photos/seed/final${id}/1200/800`;

  return (
    <motion.div
      className="min-h-screen w-full bg-[#11152B] text-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MorphOverlay />
      
      <header className="w-full p-8 flex items-center justify-between z-10 relative">
        <h1 className="text-3xl font-black tracking-tighter uppercase">
          Project {id}
        </h1>
        <Link to="/" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:opacity-50 transition-opacity">
          <ArrowLeft size={20} /> Back to Map
        </Link>
      </header>

      <div className="flex-1 w-full flex items-center justify-center p-8 relative z-0">
        <motion.div 
          ref={containerRef}
          className="w-full max-w-6xl aspect-video relative overflow-hidden rounded-2xl cursor-ew-resize select-none shadow-2xl"
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Final Output (Bottom Layer) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={finalImg} 
              alt="Final Output" 
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              Final Output
            </div>
          </div>

          {/* Skeleton/Wireframe (Top Layer) */}
          <div 
            className="absolute inset-0 w-full h-full border-r-2 border-white"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src={skeletonImg} 
              alt="Skeleton Wireframe" 
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 bg-white/80 text-black backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              Formative Grid
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center -ml-[2px]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
              <GripVertical size={20} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
