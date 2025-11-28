import { MdArrowOutward } from "react-icons/md";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaBehance,
} from "react-icons/fa";
import hero from "./images/hero1.png";
import thumbail from "./images/thumbnail.jpg";
import "./Banner.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const videoId = "nCZbZyyuHRg";
  const statsData = [
    { title: "Founder", subtitle: "Founder of Motionsbay" },
    { title: "Top Rated", subtitle: "Seller on Fiverr" },
    { title: "Vetted Pro", subtitle: "Seller on Fiverr" },
    { title: "4000+ Projects", subtitle: "Completed on Fiverr" },
    { title: "$365,556", subtitle: "Earned on Fiverr" },
    { title: "350+ Projects", subtitle: "Completed on Motionsbay" },
    { title: "$65,000", subtitle: "Earned on Motionsbay" },
  ];
  const duplicatedStats = [...statsData, ...statsData];
  const scrollWidth = duplicatedStats.length * 150;
  const duration = 20;

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={31} />,
      href: " https://www.instagram.com/nazmul.motion",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={31} />,
      href: "https://www.linkedin.com/in/nazmul-hoque-motion-designer/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={31} />,
      href: " https://www.facebook.com/nazmul.motion/",
    },
    {
      name: "Behance",
      icon: <FaBehance size={31} />,
      href: "https://www.behance.net/nazmulhoque41",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={31} />,
      href: " https://www.youtube.com/@nazmul.motion",
    },
    {
      name: "Twitter",
      icon: <FaSquareXTwitter size={31} />,
      href: " https://x.com/nazmulmotion",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0a0612] min-h-screen text-white pt-28 relative overflow-hidden z-40">
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#4107a4]/20 blur-[100px] -left-20 -top-20 -z-10" />
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#060422] blur-[60px] -right-40 sm:-right-80 top-[30%] -z-10" />

      <div
        ref={ref}
        className="w-full max-w-[1340px] px-5 md:px-0 mx-auto relative"
      >
        <motion.div>
          <div className="flex flex-col md:flex-row items-center mt-14 md:mt-32 gap-10 ">
            <div className="w-full md:w-1/2   text-center md:text-left">
              <div className=" relative  ">
                <motion.div
                  className="absolute -left-30  top-0.5  flex flex-col items-center rounded-md"
                  // variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="flex  flex-col gap-[14.5px]  ">
                    {socialLinks.map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        // variants={item}
                        whileHover={{
                          scale: 1.2,
                          transition: { stiffness: 300 },
                        }}
                        // whileTap={{ scale: 1.25 }}
                        className="text-white text-xl sm:text-2xl hover:text-[#ef9b3c] transition-colors duration-300 origin-center"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
                <h1 className=" text-5xl md:text-[50px] font-medium leading-11 md:leading-15">
                  মোশন ডিজাইন শিখে
                  <br /> আর্নিং শুরু করুন অনেক সহজ
                  {/* <span className="text-[#ef9b3c]">1% secrets</span> */}
                  <br />
                  এবং কার্যকর পদ্ধতি তে
                </h1>
                <h1 className="h-des text-xl md:text-xl pt-3 md:pt-5 leading-[23px] md:leading-[30px] text-gray-400 ">
                  হাই-ডিমান্ড, লো-কম্পিটিশন স্কিল শিখে নিজের ফ্রিল্যান্সিং{" "}
                  <br />
                  ক্যারিয়ারকে আলাদা লেভেলে গড়ে তুলুন।
                </h1>
              </div>
              <button
                onClick={() => navigate("/payment")}
                style={{
                  background:
                    "linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)",
                }}
                className="text-white font-medium text-base sm:text-lg cursor-pointer w-52 h-12 mt-4 md:mt-8 rounded-full flex justify-center items-center gap-3 mx-auto md:mx-0"
              >
                Enroll Now <MdArrowOutward className="text-xl sm:text-2xl" />
              </button>
            </div>

            <div className="w-full md:w-1/2 relative flex justify-center mt-8 md:mt-0">
              <div className="absolute -bottom-8 flex justify-center items-center right-1/4 sm:right-40 w-56 sm:w-64 h-14 sm:h-16 rounded-lg bg-[#372675] backdrop-blur-2xl animate-floatUpDown">
                <div className="-mt-3 text-center sm:text-left">
                  <h1 className="text-lg sm:text-2xl tracking-wide h-[25px]">
                    Nazmul Hoque
                  </h1>
                  <h1 className="text-xs sm:text-sm h-3">
                    Your motion design mentor
                  </h1>
                </div>
              </div>
              <img
                src={hero}
                alt="Hero"
                className="w-full sm:w-[90%] md:w-auto max-w-full"
              />
            </div>
          </div>

          <div className="hidden md:flex flex-wrap justify-center sm:justify-between items-center mt-16 sm:mt-24 gap-y-8 text-center sm:text-left">
            {statsData.map((stat, idx) => (
              <div key={idx} className="w-1/2 sm:w-auto">
                <p className="text-lg sm:text-xl text-gray-200">{stat.title}</p>
                <p className="text-sm sm:text-base font-extralight text-gray-400">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="block sm:hidden w-full overflow-hidden mt-16 sm:mt-24 relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -scrollWidth / 2, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: duration,
                  ease: "linear",
                },
              }}
            >
              {duplicatedStats.map((stat, idx) => (
                <div key={idx} className="shrink-0 text-left sm:text-left">
                  <p className="text-lg sm:text-xl text-gray-200">
                    {stat.title}
                  </p>
                  <p className="text-sm sm:text-base font-extralight text-gray-400">
                    {stat.subtitle}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-full md:w-[1000px] mx-auto h-[220px] sm:h-[400px] md:h-[600px] rounded-3xl mt-14 sm:mt-20 overflow-hidden relative border-4 sm:border-[5px] border-[#6339b7]">
            {!isPlaying ? (
              <div
                className="w-full h-full cursor-pointer relative"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={thumbail}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover bg-black/20"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-black flex items-center justify-center">
                    <div className="ml-1 w-0 h-0 border-l-8 sm:border-l-10 border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
