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
    title: 'After Effects Basics',
    description: 'Learn the most fundamentals of after effects software.',
    icon: <FaReact size={28} className="text-purple-400" />,
  },
  {
    title: 'Social Media Ads Motion',
    description:
      'Design and animate social media ads that engage the audience.',
    icon: <FaVideo size={28} className="text-blue-400" />,
  },
  {
    title: 'Lottie & Web Motion',
    description:
      'Bring your work to websites and apps with code-ready animations.',
    icon: <FaLaptopCode size={28} className="text-pink-400" />,
  },
  {
    title: 'App or Web Showcase animation',
    description:
      'Take screenshots from clients and turn it into an amazing motion showcase',
    icon: <FaPencilRuler size={28} className="text-yellow-400" />,
  },
  {
    title: 'Motion for Video Editing',
    description: 'Learn the amazing 3D animation technique like Iman gadzhi.',
    icon: <FaRocket size={28} className="text-cyan-400" />,
  },
  {
    title: 'Explainer Video',
    description: 'Turn stories into a compelling motion that sells ideas.',
    icon: <FaRocket size={28} className="text-cyan-400" />,
  },
  {
    title: 'SaaS Explainers',
    description: 'Animate user flows, dashboards, and product journeys.',
    icon: <FaRocket size={28} className="text-cyan-400" />,
  },
  {
    title: 'Logo Animation',
    description: 'Learn to animate brand identities that feel alive.',
    icon: <FaRocket size={28} className="text-cyan-400" />,
  },
  {
    title: 'After finishing this course, you will be able to create',
    description:
      'You will have a strong ready portfolio to show your clients and starts earning right away.',
    icon: <FaRocket size={28} className="text-cyan-400" />,
  },
];

// Connector Line Component
const ConnectorLine = ({ isLeft }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 15%'],
  });

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
      <motion.div
        style={{ scale: dotScale, opacity: glowOpacity }}
        className="w-4 h-4 bg-linear-to-r from-purple-400 to-pink-400 rounded-full z-20 shadow-[0_0_15px_rgba(255,0,150,0.7)]"
      ></motion.div>
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });
  const gradientHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="relative bg-[#0a0612] text-white  pt-20 md:pt-32">
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-15 top-0 right-0 blur-[100px] z-50" />
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-15 top-1/3 left-0 blur-[100px] z-50" />
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-5 bottom-0 right-0 blur-[100px] z-50" />

      <div
        ref={containerRef}
        className="max-w-[1140px] mx-auto relative px-5 md:px-0"
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-[250px] flex justify-center">
          <div className="border-l-2 border-dashed border-gray-600 absolute top-52 bottom-0"></div>
          <motion.div
            style={{ height: gradientHeight }}
            className="w-0.5 bg-linear-to-b from-blue-400 to-pink-400 absolute top-52"
          ></motion.div>
        </div>

        <div className="text-center mb-20 h-40">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Bricolage Grotesque' }}
          >
            Learning Path
          </h2>
          <p className="text-lg text-gray-400 leading-tight w-full md:w-[60%] mx-auto">
            Taught in <span className="text-yellow-400">Bangla</span> includes
            detailed project files, hands-on practice tasks, step-by-step
            exercises, constructive reviews, and guidance to master motion
            design efficiently.
          </p>
        </div>

        <div className="space-y-24 relative z-10">
          {learningTracks.slice(0, 8).map((track, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between relative ${
                  !isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-1/2 transform hidden md:flex -translate-x-1/2   items-center justify-center">
                  <ConnectorLine isLeft={isLeft} />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-offset="150"
                  data-aos-duration="900"
                  className={`w-full md:w-[45%] border border-gray-800 rounded-2xl p-6 backdrop-blur-xl delay-200 transition-all overflow-hidden  duration-300 ${
                    isLeft
                      ? 'text-right md:text-right'
                      : 'text-left md:text-left'
                  }`}
                >
                  {!isLeft && (
                    <div className="absolute w-24 h-24 bg-[#4107a4] -bottom-20 blur-[100px] -right-10 md:hidden" />
                  )}
                  {isLeft && (
                    <div className="absolute w-24 h-24 bg-[#4107a4] -bottom-20 blur-[100px] -left-10 md:hidden" />
                  )}

                  <div
                    className={`flex flex-col md:flex-row items-center gap-3 mb-3 ${
                      isLeft ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    {isLeft && (
                      <div className="md:order-2 mb-3 md:mb-0">
                        <div className="border border-gray-700 w-16 h-16 rounded-full flex justify-center items-center">
                          {track.icon}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row gap-3 items-center">
                      {!isLeft && (
                        <div>
                          <div className="border border-gray-700 w-16 h-16 rounded-full flex justify-center items-center mb-3 md:mb-0">
                            {track.icon}
                          </div>
                        </div>
                      )}
                      <div>
                        <h3
                          className={`text-xl text-center md:text-2xl font-semibold ${
                            !isLeft ? 'text-left w-full md:w-[90%]' : ''
                          } ${isLeft ? 'md:text-right' : ''}`}
                        >
                          {track.title}
                        </h3>
                        <p
                          className={`text-gray-400 text-center text-lg leading-5 pt-2 ${
                            !isLeft ? 'text-left w-full md:w-[90%]' : ''
                          } ${isLeft ? ' text-right' : ''}`}
                        >
                          {track.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            data-aos-duration="1000"
            className="flex justify-center relative"
          >
            <div className="w-full md:w-[60%] relative bg-[#0f0a1a]/80 rounded-2xl p-0.5 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400"
              ></motion.div>

              <div className="relative z-10 bg-[#0a0612] py-8 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  {learningTracks[8].icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {learningTracks[8].title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mx-auto px-2 md:px-0">
                  {learningTracks[8].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
