import { useEffect, useState } from "react";
import { STORY_CHAPTERS, type storyChapter } from "./Story.constant";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Story = () => {
  const storyChapters = STORY_CHAPTERS;
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="story" className="relative">
      {/* Fixed Backgrounds */}
      <div className="fixed inset-0 z-0">
        {storyChapters.map((chapter, index) => (
          <div
            key={index}
            className="absolute inset-0 h-[100dvh] w-full transition-opacity duration-1000 story-bg"
            style={{
              opacity: activeChapter === index ? 1 : 0,
              backgroundImage: `url('${chapter.backgroundImage}')`,
              // Custom CSS properties for better control
              '--bg-position-mobile': 'center center',
              '--bg-position-desktop': chapter.desktopPosition || 'center 40%',
              '--bg-size-mobile': 'cover',
              '--bg-size-desktop': 'cover',
            } as React.CSSProperties}
          >
            {/* Multi-layer gradient for better visual hierarchy */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Story Chapters */}
      <div className="relative z-10">
        {storyChapters.map((chapter, index) => (
          <StoryChapter
            key={index}
            chapter={chapter}
            index={index}
            isActive={activeChapter === index}
            onInView={() => {
              setActiveChapter(index);
            }}
          />
        ))}
      </div>

      {/* CSS Styles */}
      <style>{`
        .story-bg {
          background-repeat: no-repeat;
          background-size: var(--bg-size-mobile);
          background-position: var(--bg-position-mobile);
        }
        
        @media (min-width: 768px) {
          .story-bg {
            background-size: var(--bg-size-desktop);
            background-position: var(--bg-position-desktop);
          }
        }
        
        /* Alternative: Letterbox effect for ultra-wide screens */
        @media (min-width: 1920px) {
          .story-bg {
            background-size: contain;
            background-position: center center;
            background-color: #000;
          }
        }
      `}</style>
    </section>
  );
};

interface StoryChapterProps {
    index: number;
    chapter: storyChapter;
    isActive: boolean;
    onInView: () => void;
}

const StoryChapter: React.FC<StoryChapterProps> = ({ chapter, onInView }) => {
    const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      onInView()
    }
  }, [inView, onInView])

  return (
    <div id="story" ref={ref} className="flex min-h-[100dvh] items-center justify-center px-4 py-16 sm:py-20">
      <motion.div
        className="mx-auto max-w-2xl text-center text-white relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="mb-4 inline-block rounded-full bg-primary/80 backdrop-blur-md px-4 py-2 text-sm font-medium sm:mb-6 sm:px-6 sm:py-3 sm:text-base border border-white/20"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {chapter.decade}
        </motion.div>

        <motion.h2
          className={`font-title mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl drop-shadow-2xl`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {chapter.title}
        </motion.h2>

        <motion.p
          className="mb-6 text-lg font-light leading-relaxed sm:mb-8 sm:text-xl drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {chapter.description}
        </motion.p>

        <motion.p
          className="text-base leading-relaxed text-gray-200 sm:text-lg drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {chapter.content}
        </motion.p>
      </motion.div>
    </div>
  )
}