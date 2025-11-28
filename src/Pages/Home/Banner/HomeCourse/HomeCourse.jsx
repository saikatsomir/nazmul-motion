import { useState } from "react";
import thumbail from "./images/thumbnail.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export const HomeCourse = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "nCZbZyyuHRg";
  const thumbnail = thumbail;
  return (
    <div className="bg-[#0a0612] pt-20 px-5 md:px-0 md:pt-32 ">
      <div className="max-w-[1340px] mx-auto  ">
        <div className=" flex flex-col-reverse md:flex-row items-center gap-10 justify-between">
          <div className="w-full md:w-[45%]  md:h-[400px] relative">
            <div className="absolute w-96 h-10 bg-[#4107a4] -bottom-10 left-1/2 -translate-1/2 blur-[100px]"></div>
            <div className="w-full h-full rounded-3xl  overflow-hidden relative border border-gray-800 ">
              {!isPlaying ? (
                <div
                  className="w-full h-full cursor-pointer relative"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Thumbnail */}
                  <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover bg-black/20 "
                  />
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                      <div className="ml-1 w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
                    </div>
                  </div>
                </div>
              ) : (
                // YouTube iframe
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
          </div>

          <div className="w-full md:w-[50%]">
            <div>
              <p className="text-sm text-purple-500 font-semibold tracking-widest mb-3 md:mb-5">
                BEHIND THE COURSE
              </p>
              <h1 className="text-3xl md:text-[40px] font-medium  text-white ">
                এই কোর্সের পেছনে শুধু অভিজ্ঞতা নয়—আপনাকে সফল করার একাগ্রতা আছে।
              </h1>
              <h1 className="text-lg text-gray-400 leading-[22px] mt-5 w-full md:w-[85%]">
                এই কোর্সে ভিজুয়াল ডিজাইন, অ্যানিমেশন প্রিন্সিপল এবং
                স্টোরিটেলিং—এই তিনটি জিনিসকে একসাথে মিলিয়ে শেখানো হবে। যাতে আপনি
                এমন মোশন তৈরি করতে পারেন যা শুধু সুন্দরই নয়, বরং প্রোডাক্ট,
                অ্যাপ ও ব্র্যান্ডের আইডিয়াকে স্পষ্টভাবে ব্যাখ্যা করে, দর্শকের
                মনেও থেকে যায়, এবং মেসেজকে আরও শক্তিশালী করে তোলে।
              </h1>
              <Link
                to={"/payment"}
                style={{
                  background:
                    "linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)",
                }}
                className="text-white font-medium text-lg cursor-pointer w-52 h-12 mt-8 rounded-full flex justify-center items-center gap-3"
              >
                Enroll Now <MdArrowOutward className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
