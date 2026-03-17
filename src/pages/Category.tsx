import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MorphOverlay = () => (
  <motion.div
    className="fixed inset-0 z-50 bg-[#11152B] pointer-events-none"
    initial={{ clipPath: "circle(150% at 50% 50%)" }}
    animate={{ clipPath: "circle(0% at 50% 50%)" }}
    exit={{ clipPath: "circle(150% at 50% 50%)" }}
    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
  />
);

export default function Category() {
  const { id } = useParams();
  const title = id?.replace('-', ' ').toUpperCase();

  return (
    <motion.div
      className="min-h-screen w-full pt-32 px-8 flex flex-col items-center bg-[#11152B] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MorphOverlay />
      
      {/* BACK UI 좌측 상단 배치 */}
      <Link to="/" className="absolute top-10 left-10 z-20 flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:opacity-50 transition-opacity">
        <ArrowLeft size={20} /> Back
      </Link>
      
      <div className="w-full max-w-7xl mb-12 flex items-center justify-center z-10 relative">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase text-center">
          {title}
        </h1>
      </div>

      {id === 'data-design' ? (
        <div className="w-full max-w-5xl flex-1 z-10 relative flex flex-col gap-12 pb-20">
          <div className="flex flex-col gap-8">
            {/* Week 1 텍스트로 범주 분리 */}
            <h2 className="text-3xl font-black tracking-widest uppercase text-white border-b border-white/20 pb-4">
              Week 1
            </h2>
            
            {/* 첨부된 9개의 사진 영역 */}
            <div className="flex flex-col gap-12">
              <img 
                src="https://github.com/user-attachments/assets/31578600-68aa-44fb-9473-04252814fbf0" 
                alt="Data Design - Slide 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/576daf3a-0886-43b5-bd3c-312b01f371de" 
                alt="Data Design - Slide 2" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/4219c6b8-159d-4183-97d6-cf7f98e88e4a" 
                alt="Data Design - Slide 3" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/7204b9fd-76ff-4db8-9efe-f223096e4c49" 
                alt="Data Design - Slide 4" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/cebaf4a1-d74a-42d0-8535-fa07ae1483c2" 
                alt="Data Design - Slide 5" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/7e25fa7b-140c-47e1-9b07-d2d0c8361995" 
                alt="Data Design - Slide 6" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/aa81ebdf-897f-49a2-907b-0d8b63ceff3a" 
                alt="Data Design - Slide 7" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/ef58c498-b18f-414d-9398-37521afa9971" 
                alt="Data Design - Slide 8" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/2d4de455-1dc5-45eb-b6a7-a66673932176" 
                alt="Data Design - Slide 9" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      ) : id === 'visual-design' ? (
        <div className="w-full max-w-5xl flex-1 z-10 relative flex flex-col gap-12 pb-20">
          <div className="flex flex-col gap-8">
            {/* BAIT 텍스트로 범주 분리 */}
            <h2 className="text-3xl font-black tracking-widest uppercase text-white border-b border-white/20 pb-4">
              BAIT
            </h2>
            
            {/* BAIT 사진 영역 */}
            <div className="flex flex-col gap-12">
              <img 
                src="https://github.com/user-attachments/assets/f9ecc26a-0fac-4781-8d89-5395e3243a45" 
                alt="Frame 33.jpg" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/de7c5c01-c17e-4e3d-a0f4-c0215dc095da" 
                alt="Frame 34.jpg" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/35bc4358-08d2-4481-9a7d-105f25d500d5" 
                alt="Frame 35.jpg" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-12">
            {/* IM NOT CUTE ANYMORE 텍스트로 범주 분리 */}
            <h2 className="text-3xl font-black tracking-widest uppercase text-white border-b border-white/20 pb-4">
              I'M NOT CUTE ANYMORE
            </h2>
            
            {/* IM NOT CUTE ANYMORE 사진 영역 */}
            <div className="flex flex-col gap-12">
              <img 
                src="https://github.com/user-attachments/assets/d26d9765-3be1-4c37-9109-9bf2683df0e2" 
                alt="I'M NOT CUTE ANYMORE - Image 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/6dfb2a8c-5a0d-4c04-bb23-f7afb6a2156a" 
                alt="I'M NOT CUTE ANYMORE - Image 2" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-12">
            {/* ELECTRIC ANGEL 텍스트로 범주 분리 */}
            <h2 className="text-3xl font-black tracking-widest uppercase text-white border-b border-white/20 pb-4">
              ELECTRIC ANGEL
            </h2>
            
            {/* ELECTRIC ANGEL 사진 영역 */}
            <div className="flex flex-col gap-12">
              <img 
                src="https://github.com/user-attachments/assets/9ba88873-aec0-459b-96f9-ba500d0893e7" 
                alt="ELECTRIC ANGEL - Image 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <img 
                src="https://github.com/user-attachments/assets/befb6cb8-625c-4a86-ae0b-d1406fd31536" 
                alt="ELECTRIC ANGEL - Image 2" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-12">
            {/* BUTTERFLY 텍스트로 범주 분리 */}
            <h2 className="text-3xl font-black tracking-widest uppercase text-white border-b border-white/20 pb-4">
              BUTTERFLY
            </h2>
            
            {/* BUTTERFLY 사진 영역 */}
            <div className="flex flex-col gap-12">
              <img 
                src="https://github.com/user-attachments/assets/13e88e4f-1b99-451a-a280-4ecefdfae0b7" 
                alt="BUTTERFLY - Image 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-12">
            {/* Let'sBooM 텍스트로 범주 분리 */}
            <h2 className="text-3xl font-black tracking-widest uppercase text-white border-b border-white/20 pb-4">
              Let'sBooM
            </h2>
            
            {/* Let'sBooM 사진 영역 */}
            <div className="flex flex-col gap-12">
              {/* 아래 src 속성에 이미지 URL을 넣어주세요 */}
              <img 
                src="https://github.com/user-attachments/assets/ec3f8d02-b947-4c78-abc3-708dfb097387" 
                alt="Let'sBooM - Image 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl bg-white/5 min-h-[200px]"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-7xl flex-1 glass rounded-t-3xl p-10 flex items-center justify-center border-b-0 z-10 relative">
          <p className="text-gray-400 font-medium tracking-widest uppercase text-center">
            Empty space for future content
            <br />
            (AI Studio integration)
          </p>
        </div>
      )}
    </motion.div>
  );
}
