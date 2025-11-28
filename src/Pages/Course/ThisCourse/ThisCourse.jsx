import { useState } from "react";
import thumbail from "./images/thumbnail.jpg";
import bulb from "./images/bulb.svg";
import tube from "./images/tube.svg";
import code from "./images/code.svg";
import { CourseFaq } from "../CourseFaq/CourseFaq";

export const ThisCourse = () => {
  const skills = [
    "Video ads & Commercials",
    "Logo Animation",
    "Motion Design for UI/UX",
    "2D Explainer Video",
    "SaaS Explainer",
    "Motion for Social Media Ads",
    "Motion Graphics Template",
  ];

  const path = [
    {
      img: tube,
      name: "২৬+ লাইভ ক্লাস",
      path: "videos",
      border: "border-pink-500",
      bg: "bg-pink-500",
      description:
        "স্পষ্ট ব্যাখ্যা, হ্যান্ডস–অন এক্সারসাইজ আর প্র্যাকটিক্যাল ওয়ার্কফ্লো দিয়ে প্রতিটি ক্লাস সাজানো—যা তুমি ক্লাস শেষ হওয়ার পরই নিজের কাজে প্রয়োগ করতে পারবে।",
    },
    {
      img: bulb,
      name: "১৫+ রিয়াল প্রজেক্ট",
      path: "projects",
      border: "border-blue-500",
      bg: "bg-[#29036f]",
      description:
        "প্রতি সপ্তাহে আগের লেসনের উপর ভিত্তি করে নতুন প্রজেক্ট—সাথে থাকবে লাইভ ফিডব্যাক, যাতে ধাপে ধাপে তোমার কাজের কোয়ালিটি আরও শক্ত হয়।",
    },
    {
      img: code,
      name: "১৫+ অ্যাসাইনমেন্ট",
      path: "assignments",
      border: "border-purple-500",
      bg: "bg-purple-500",
      description:
        "কোর্স শেষে তোমার হাতে থাকবে রিয়াল প্রজেক্ট আর এমন কনফিডেন্স, যা নিয়ে তুমি প্রফেশনাল হিসেবে কাজ শুরু করতে পারবে।",
    },
  ];

  const colors = [
    { bg: "bg-pink-500/20", text: "text-pink-400" },
    { bg: "bg-blue-500/20", text: "text-blue-400" },
    { bg: "bg-green-500/20", text: "text-green-400" },
    { bg: "bg-yellow-500/20", text: "text-yellow-400" },
    { bg: "bg-purple-500/20", text: "text-purple-400" },
    { bg: "bg-orange-500/20", text: "text-orange-400" },
    { bg: "bg-cyan-500/20", text: "text-cyan-400" },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "nCZbZyyuHRg";
  const thumbnail = thumbail;

  return (
    <div
      className="pb-32 z-40"
      style={{
        background:
          "linear-gradient(0deg,rgba(17, 7, 38, 1) 0%, rgba(10, 6, 18, 1) 100%)",
      }}
    >
      <div className="max-w-[1340px] mx-auto px-4 pt-10">
        {/* ===== YouTube Section ===== */}
        {/* <div className="w-full max-w-[1000px] mx-auto h-[250px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden relative border-[5px] border-[#6C5BF9]">
          {!isPlaying ? (
            <div
              className="w-full h-full cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="w-full h-full bg-black/20 object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <div className="ml-1 w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
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
        </div> */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative">
          <div className="absolute w-[120%] bg-[#110726] hidden md:block h-32 -left-36 -bottom-16 z-10 blur-[20px]" />
          <div className="absolute w-[120%] bg-[#110726] h-32 hidden md:block -left-36 bottom-5 z-10 blur-[45px]" />

          {path.map((item, i) => (
            <div
              key={i}
              className={`relative border ${item.border} rounded-2xl p-6 sm:p-8 text-white backdrop-blur-md bg-white/5 transition-all duration-300 overflow-hidden h-auto  md:h-[400px]`}
            >
              <div
                className={`absolute w-full h-10 blur-2xl -top-10 left-0 ${item.bg}`}
              ></div>
              <div className="flex">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 mb-2"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {item.name}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                {item.description}
              </p>
              <div
                className={`absolute inset-0 rounded-2xl border ${item.border} opacity-20 blur-md`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
