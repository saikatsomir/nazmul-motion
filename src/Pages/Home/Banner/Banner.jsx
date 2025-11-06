import { MdArrowOutward } from 'react-icons/md';
import hero from './images/hero.png';
import './Banner.css';
import { useState } from 'react';
import thumbail from './images/thumbnail.jpg';

export const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'nCZbZyyuHRg';
  const thumbnail = thumbail;

  return (
    <div className="bg-[#0a0612] min-h-screen text-white pt-28 relative overflow-hidden z-40">
      {/* Background lights */}
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#1e1137] blur-[100px] -right-20 -top-20 -z-10" />
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#060422] blur-[60px] -left-40 sm:-left-80 top-[30%] -z-10" />

      {/* Content wrapper */}
      <div className="w-full max-w-[1340px] px-5 md:px-0 mx-auto ">
        <div className="flex flex-col md:flex-row items-center mt-14 md:mt-32 gap-10">
          {/* Left text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1
              className="h-title text-5xl md:text-6xl font-bold leading-11 md:leading-13"
              style={{ fontFamily: 'Bricolage Grotesque' }}
            >
              Learn the <br /> top
              <span className="text-[#6339b7]">1% secrets</span> in motion
              design.
            </h1>

            <h1 className="h-des text-xl md:text-3xl pt-3 md:pt-5 leading-[23px] md:leading-[30px] text-gray-400 font-light">
              Learn and earn with high-demand, low-competition motion design
              skills.
            </h1>

            <button
              style={{
                background:
                  'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
              }}
              className="text-white font-medium text-base sm:text-lg cursor-pointer w-52 h-12 mt-4 md:mt-8 rounded-full flex justify-center items-center gap-3 mx-auto md:mx-0"
            >
              Enroll Now <MdArrowOutward className="text-xl sm:text-2xl" />
            </button>
          </div>

          {/* Right image */}
          <div className="w-full md:w-1/2 relative flex justify-center mt-8 md:mt-0">
            <div className="absolute -bottom-8 flex justify-center items-center right-1/4 sm:right-40 w-56 sm:w-64 h-14 sm:h-16 rounded-lg bg-[#372675] backdrop-blur-2xl animate-floatUpDown">
              <div className="-mt-3 text-center sm:text-left">
                <h1 className="text-lg sm:text-2xl h-[25px]">Nazmul Hoque</h1>
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

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center mt-16 sm:mt-28 gap-y-8 text-center sm:text-left">
          <div className="w-1/2 sm:w-auto">
            <p className="text-lg sm:text-xl text-gray-200">Founder</p>
            <p className="text-sm sm:text-base font-extralight text-gray-400">
              Founder of Motionsbay
            </p>
          </div>
          <div className="w-1/2 sm:w-auto">
            <p className="text-lg sm:text-xl text-gray-200">Top Rated</p>
            <p className="text-sm sm:text-base font-extralight text-gray-400">
              Seller on Fiverr
            </p>
          </div>
          <div className="w-1/2 sm:w-auto">
            <p className="text-lg sm:text-xl text-gray-200">Vetted Pro</p>
            <p className="text-sm sm:text-base font-extralight text-gray-400">
              Seller on Fiverr
            </p>
          </div>
          <div className="w-1/2 sm:w-auto">
            <p className="text-lg sm:text-xl text-gray-200">4000+ Projects</p>
            <p className="text-sm sm:text-base font-extralight text-gray-400">
              Completed on Fiverr
            </p>
          </div>
          <div className="w-1/2 sm:w-auto">
            <p className="text-lg sm:text-xl text-gray-200">$365,556</p>
            <p className="text-sm sm:text-base font-extralight text-gray-400">
              Earned on Fiverr
            </p>
          </div>
          <div className="w-1/2 sm:w-auto">
            <p className="text-lg sm:text-xl text-gray-200">350+ Projects</p>
            <p className="text-sm sm:text-base font-extralight text-gray-400">
              Completed on Motionsbay
            </p>
          </div>
          <div className="w-1/2 sm:w-auto">
            <p className="text-lg sm:text-xl text-gray-200">$65,000</p>
            <p className="text-sm sm:text-base font-extralight text-gray-400">
              Earned on Motionsbay
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full sm:w-[90%] md:w-[1000px] mx-auto h-[220px] sm:h-[400px] md:h-[600px] rounded-3xl mt-10 md:mt-16 sm:mt-28 overflow-hidden relative border-4 sm:border-[5px] border-[#6339b7]">
          {!isPlaying ? (
            <div
              className="w-full h-full cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnail}
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
      </div>
    </div>
  );
};
