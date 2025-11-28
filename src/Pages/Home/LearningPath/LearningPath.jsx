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
import { TbSocial } from 'react-icons/tb';
import { MdAutoAwesomeMotion } from 'react-icons/md';
import { PiSlideshow, PiVideoLight } from 'react-icons/pi';
import { VscGoToEditingSession } from 'react-icons/vsc';
import { BsAsterisk } from 'react-icons/bs';
import { IoLogoSlack } from 'react-icons/io5';
import { GiGolfFlag } from 'react-icons/gi';
import flagJson from './flag.json';
import Lottie from 'lottie-react';
import './Learning.css';

const learningTracks = [
  {
    title: 'আফটার ইফেক্টস বেসিকস',
    description:
      'After Effects-এর ভিত্তি, মূল ফাংশন এবং ওয়ার্কফ্লো একদম পরিষ্কারভাবে শিখবেন।',
    icon: <FaReact size={28} className="text-purple-400" />,
  },
  {
    title: 'সোস্যাল মিডিয়া এডস মোশন',
    description:
      'সোশ্যাল মিডিয়ার জন্য আকর্ষণীয়, স্ক্রল থামিয়ে দেওয়া মোশন অ্যাড ডিজাইন ও অ্যানিমেট করা শিখবেন।',
    icon: <TbSocial size={28} className="text-blue-400" />,
  },
  {
    title: 'লটটি এবং ওয়েব মোশন',
    description:
      'ওয়েবসাইট ও অ্যাপে ব্যবহারযোগ্য কোড-রেডি অ্যানিমেশন তৈরি করার প্র্যাকটিক্যাল গাইডলাইন।',
    icon: <MdAutoAwesomeMotion size={28} className="text-pink-400" />,
  },
  {
    title: 'অ্যাপ এবং ওয়েব শোকেজ অ্যানিমেশন ',
    description:
      'ক্লায়েন্টের দেওয়া স্ক্রিনশট নিয়ে কীভাবে প্রিমিয়াম লেভেলের অ্যাপ/ওয়েব শোকেস ভিডিও বানাবেন, তা শিখবেন।',
    icon: <PiSlideshow size={28} className="text-yellow-400" />,
  },
  {
    title: 'ভিডিও এডিটিং এর জন্য মোশন ',
    description:
      'ভিডিও এডিটে সিনেমাটিক ফিল আনতে প্রয়োজনীয় 2D/3D মোশন টেকনিক শিখবেন।',
    icon: <BsAsterisk size={28} className="text-cyan-400" />,
  },
  {
    title: 'এক্সপ্লেইনার ভিডিও ',
    description:
      'জটিল আইডিয়াকে ছোট ছোট ভিজ্যুয়াল সিনে ভেঙে আকর্ষণীয় স্টোরি বানানোর এক্সপ্লেইনার ভিডিও প্রসেস শিখবেন।',
    icon: <PiVideoLight size={28} className="text-purple-400" />,
  },
  {
    title: 'সাস এক্সপ্লেইনার ভিডিও ',
    description:
      'ড্যাশবোর্ড, ইউজার ফ্লো, গ্রাফ, স্ট্যাটস—সবকিছুকে পরিষ্কার ও সুন্দরভাবে মোশনে উপস্থাপন করা শিখবেন।',
    icon: <VscGoToEditingSession size={28} className="text-pink-400" />,
  },
  {
    title: 'লোগো অ্যানিমেশন ',
    description:
      'ব্র্যান্ড আইডেন্টিটিকে “অ্যালাইভ” ফিল করানোর মতো ইউনিক ও প্রিমিয়াম লোগো অ্যানিমেশন টেকনিক শিখবেন।',
    icon: <IoLogoSlack size={28} className="text-blue-400" />,
  },
  {
    title: 'এই কোর্স শেষ করার পর আপনি যা পাবেন',
    description:
      'আপনার হাতে থাকবে একটি শক্তিশালী, প্রফেশনাল Behance পোর্টফোলিও—যা ক্লায়েন্ট দেখেই কাজ দেওয়ার মতো কোয়ালিটিতে তৈরি হবে। এবং আপনি তৎক্ষণাৎ ক্লায়েন্ট প্রজেক্ট শুরু করার মতো দক্ষ হয়ে উঠবেন।',
    icon: (
      <Lottie
        animationData={flagJson}
        className="flag"
        loop={true}
        style={{ width: 40, height: 40 }}
      />
    ),
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
          <h2 className="text-3xl md:text-[40px] font-medium  text-white  mb-4">
            লার্নিং পাথ
          </h2>
          <p className="text-gray-400 text-lg mb-5 leading-[22px] md:w-[60%] mx-auto">
            ধাপে ধাপে <span className="text-yellow-400">বাংলায় </span> শেখানো
            হবে —ডিটেইলড প্রজেক্ট ফাইল, হ্যান্ডস-অন প্র্যাকটিস টাস্ক,
            স্টেপ-বাই-স্টেপ এক্সারসাইজ, কনস্ট্রাকটিভ রিভিউ এবং মোশন ডিজাইন
            দক্ষভাবে মাস্টারি করতে প্রয়োজনীয় দিক নির্দেশনা
          </p>
        </div>

        <div className="space-y-12 relative z-10">
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
                  // data-aos="fade-up"
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
                          className={`text-md text-center md:text-xl ${
                            !isLeft
                              ? 'text-center md:text-left w-full md:w-[90%]'
                              : ''
                          } ${isLeft ? 'md:text-right' : ''}`}
                        >
                          {track.title}
                        </h3>
                        <p
                          className={`text-gray-400 text-center text-md leading-5 pt-2 ${
                            !isLeft
                              ? 'text-center md:text-left w-full md:w-[90%]'
                              : ''
                          } ${isLeft ? 'text-center md:text-right' : ''}`}
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
                // initial={{ width: '0%' }}
                // whileInView={{ width: '100%' }}
                // transition={{ duration: 1, ease: 'easeOut' }}
                // viewport={{ once: true }}
                className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400"
              ></motion.div>

              <div className="relative z-10 bg-[#0a0612] py-8 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  {learningTracks[8].icon}
                </div>
                <h3 className="text-lg md:text-xl mb-2">
                  {learningTracks[8].title}
                </h3>
                <p className="text-gray-400 text-md  mx-auto px-2 md:px-4">
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
