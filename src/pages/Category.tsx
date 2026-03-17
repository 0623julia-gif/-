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
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::b2ea450c9870193a:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::9128aa6e89b311ab:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 2" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::766479d0b1f62859:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 3" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::d4a65f6a9f352108:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 4" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::29dcea94c36bfbfd:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 5" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::081e0426ceaef36d:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 6" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::ed621fc8e4ea0a9e:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 7" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::4ba0b932fc29024f:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 8" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773762272.408166000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::7c62fef21e3ecdaa:000001f0f01018bc:00064d3a36256d0f" 
                alt="Data Design - Slide 9" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
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
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773235168.658817000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::99b96b16525b6794:000001f0f01018bc:00064cbf7c50926f" 
                alt="Frame 33.jpg" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773235168.658817000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::777985a43f1e6fe5:000001f0f01018bc:00064cbf7c50926f" 
                alt="Frame 34.jpg" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773235168.658817000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::5e359e4278d95637:000001f0f01018bc:00064cbf7c50926f" 
                alt="Frame 35.jpg" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
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
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773242960.169669000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::e51e72babe0296ce:000001f0f01018bc:00064cc14cb8931f" 
                alt="I'M NOT CUTE ANYMORE - Image 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773242960.169669000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::46dc5c40d33f9e1f:000001f0f01018bc:00064cc14cb8931f" 
                alt="I'M NOT CUTE ANYMORE - Image 2" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
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
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773243588.219668000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::edf9fee2fc956b4c:000001f0f01018bc:00064cc17229433f" 
                alt="ELECTRIC ANGEL - Image 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773243588.219668000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::4c38d858e5d4639d:000001f0f01018bc:00064cc17229433f" 
                alt="ELECTRIC ANGEL - Image 2" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
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
                src="https://aistudio.google.com/_/upload/cd9b5d94-fff8-4d72-9708-08b295e2819b/attachment/1773246102.630331000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::9dbad39b3bcd7a9a:000001f0f01018bc:00064cc20807b2df" 
                alt="BUTTERFLY - Image 1" 
                className="w-full h-auto block object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
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
