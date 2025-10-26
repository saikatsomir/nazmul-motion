import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  FaReact,
  FaVideo,
  FaLaptopCode,
  FaPencilRuler,
  FaRocket,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const learningTracks = [
  {
    title: 'Beginner Track',
    description:
      'Motion Basics, Keyframes, Easing, Graph Editor, Logo animation principles.',
    icon: <FaReact size={28} className="text-purple-400" />,
  },
  {
    title: 'Intermediate Track',
    description:
      'Explainer video flow, storytelling, camera moves, transitions.',
    icon: <FaVideo size={28} className="text-blue-400" />,
  },
  {
    title: 'Pro Level',
    description:
      'SaaS product animation, UI/UX motion, Lottie for websites, client workflow.',
    icon: <FaLaptopCode size={28} className="text-pink-400" />,
  },
  {
    title: 'Advanced Techniques',
    description:
      'Master complex timing, dynamic easing, and polished cinematic motion.',
    icon: <FaPencilRuler size={28} className="text-yellow-400" />,
  },
  {
    title: 'Launch Project',
    description:
      'Final project showcasing all skills — includes feedback, reviews, and certification.',
    icon: <FaRocket size={28} className="text-cyan-400" />,
  },
];

// Connector Line Component (scroll-reveal + reverse)
const ConnectorLine = ({ isLeft }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 15%'],
  });

  // Smooth spring animation
  const width = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0px', '70px']),
    {
      stiffness: 100,
      damping: 20,
    }
  );
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Glowing Dot */}
      <motion.div
        style={{ scale: dotScale, opacity: glowOpacity }}
        className="w-4 h-4 bg-linear-to-r from-purple-400 to-pink-400 rounded-full z-20 shadow-[0_0_15px_rgba(255,0,150,0.7)]"
      ></motion.div>

      {/* Scroll-synced Gradient Line */}
      <motion.div
        style={{ width, opacity: glowOpacity }}
        className={`h-[3px] absolute rounded-full bg-linear-to-r from-purple-400 via-pink-400 to-fuchsia-500 shadow-[0_0_12px_rgba(255,0,255,0.5)] ${
          isLeft ? 'right-4' : 'left-4'
        }`}
      ></motion.div>
    </div>
  );
};

export const LearningPath = () => {
  const containerRef = useRef(null);

  // Scroll progress for vertical timeline spine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  const gradientHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="relative bg-[#0a0612] text-white  ">
      {/* <div className="absolute w-96 h-96 bg-[#4107a4] opacity-15 top-60 left-0 blur-[100px] z-50" />
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-15 top-1/3 right-0 blur-[100px] z-50" />
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-15 bottom-0 left-0 blur-[100px] z-50" /> */}

      <div ref={containerRef} className="max-w-[1140px] mx-auto relative">
        {/* Vertical Timeline Spine */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-[250px] flex justify-center">
          {/* Static dotted line */}
          <div className="border-l-2 border-dashed border-gray-600 absolute top-52 bottom-0"></div>

          {/* Animated gradient line */}
          <motion.div
            style={{ height: gradientHeight }}
            className="w-0.5 bg-linear-to-b from-blue-400 to-pink-400 absolute top-52"
          ></motion.div>
        </div>

        {/* Header */}
        <div className="text-center mb-20 h-40">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque' }}
          >
            Learning Path
          </h2>
          <p className="text-gray-300 text-lg leading-tight w-[60%] mx-auto">
            Taught in <span className="text-yellow-400">Bangla</span> — includes
            detailed project files, hands-on practice tasks, step-by-step
            exercises, constructive reviews, and guidance to master motion
            design efficiently.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-24 relative z-10">
          {learningTracks.slice(0, 4).map((track, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex items-center justify-between relative ${
                  isLeft ? '' : 'flex-row-reverse'
                }`}
              >
                {/* Connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <ConnectorLine isLeft={isLeft} />
                </div>

                {/* Card */}
                <div
                  data-aos="fade-up"
                  data-aos-offset="150"
                  data-aos-duration="900"
                  className={`w-[45%] border border-gray-800 rounded-2xl p-6 backdrop-blur-xl transition-all overflow-hidden duration-300 ${
                    isLeft ? 'text-right' : 'text-left'
                  }`}
                >
                  {!isLeft && (
                    <div className="absolute w-32 h-32 bg-[#4107a4] -bottom-20 blur-[100px] -right-10" />
                  )}
                  {isLeft && (
                    <div className="absolute w-32 h-32 bg-[#4107a4] -bottom-20 blur-[100px] -left-10" />
                  )}

                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      isLeft ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div className="order-2">
                      {isLeft && (
                        <div className="border border-gray-700 w-16 h-16 rounded-full flex justify-center items-center">
                          {track.icon}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3 items-center">
                      {!isLeft && (
                        <div className="border border-gray-700 w-16 h-16 rounded-full flex justify-center items-center">
                          {track.icon}
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-semibold">
                          {track.title}
                        </h3>
                        <div className={`${isLeft && 'flex justify-end'}`}>
                          <p
                            className={`text-gray-300 text-lg leading-relaxed ${
                              isLeft && ' w-[90%]'
                            }`}
                          >
                            {track.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final Centered Card */}
          <div
            data-aos-duration="1000"
            className="flex justify-center   relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2  flex flex-col items-center">
              {/* <div className="w-4 h-4 bg-gray-500 rounded-full z-10 mb-2"></div> */}
              {/* <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '70px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="w-0.5 bg-gradient-to-b from-blue-400 to-pink-400"
              ></motion.div> */}
            </div>

            <div className="w-[60%] relative bg-[#0f0a1a]/80 rounded-2xl p-0.5 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400"
              ></motion.div>

              <div className="relative z-10 bg-[#0a0612] p-8 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  {learningTracks[4].icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  {learningTracks[4].title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[500px] mx-auto">
                  {learningTracks[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
