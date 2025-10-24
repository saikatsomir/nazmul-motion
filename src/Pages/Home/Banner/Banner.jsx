import { MdArrowOutward } from 'react-icons/md';
import hero from './images/hero.png';
import user1 from './images/user1.png';
import user2 from './images/user2.png';
import user3 from './images/user3.png';
import './Banner.css';
import { FaStar } from 'react-icons/fa';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';
import { useState } from 'react';
import thumbail from './images/thumbnail.jpg';

export const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'nCZbZyyuHRg';
  const thumbnail = thumbail;

  return (
    <div className="bg-[#0a0612] min-h-screen text-white pt-28 relative overflow-hidden z-40">
      <div className="absolute w-[600px] h-[600px]  bg-[#1e1137] blur-[100px] -right-20 -top-20 -z-10" />
      <div className="absolute w-[600px] h-[600px]  bg-[#060422]  blur-[60px] -left-80 top-[30%] -z-10" />
      <div className="w-[1340px] mx-auto">
        <div className="flex flex-col md:flex-row items-center mt-32">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-gray-500 font-medium text-xl mb-3">
              Hi There, I am <span className="text-white">Nazmul</span>
            </h1>
            <h1 className="text-6xl font-bold leading-[70px] uppercase -ml-0.5">
              Learn the <br /> top <span className="text-[#6339b7]">1%</span>{' '}
              secrets <br /> in Motion Design.
            </h1>
            <h1 className="text-lg pt-3 w-[70%] text-gray-400 font-light">
              Learn and earn with high-demand, low-competition motion design
              skills.
            </h1>
            <button
              style={{
                background:
                  'linear-gradient(90deg,rgba(135, 1, 96, 1) 0%, rgba(99, 57, 183, 1) 65%)',
              }}
              className="text-white font-medium text-lg cursor-pointer w-52 h-12 mt-8 rounded-full flex justify-center items-center gap-3"
            >
              Enroll Now <MdArrowOutward className="text-2xl" />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="absolute top-0 left-0 w-66 h-44 rounded-lg bg-white/10 backdrop-blur-2xl animate-floatLR p-4 flex flex-col justify-between shadow-lg">
              <div className="flex items-center justify-center ">
                <div className="flex -space-x-3">
                  <img
                    src={user1}
                    alt="User 1"
                    className="w-14 h-14 rounded-full border-2 border-black"
                  />
                  <img
                    src={user2}
                    alt="User 2"
                    className="w-14 h-14 rounded-full border-2 border-black"
                  />
                  <img
                    src={user3}
                    alt="User 3"
                    className="w-14 h-14 rounded-full border-2 border-black"
                  />
                </div>
                <div className="-ml-4 w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold border-2 border-black">
                  2K
                </div>
              </div>

              <div className="flex text-2xl items-center gap-1 justify-center">
                <IoStarSharp className="text-purple-500" />
                <IoStarSharp className="text-purple-500" />
                <IoStarSharp className="text-purple-500" />
                <IoStarSharp className="text-purple-500" />
                <IoStarSharp className="text-purple-500" />
              </div>

              <div>
                <p className="text-white  text-sm text-center -mt-5">
                  1.8K+ 5 Star Reviews
                </p>
              </div>
            </div>{' '}
            <div className="absolute -bottom-12 flex justify-center items-center right-40 w-72 py-4  rounded-lg bg-white/10 backdrop-blur-2xl animate-floatUpDown">
              <div className="flex items-center gap-3">
                <div className="text-2xl text-white  bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                  ?
                </div>
                <h1 className="text-lg">Need Consultation?</h1>
              </div>
            </div>
            <img src={hero} alt="Hero" className="" />
          </div>
        </div>
        <div className="flex justify-between items-center  mt-28  w-full">
          <div className="">
            <p className=" text-xl text-gray-200">Taught by Nazmul</p>
            <p className="text-base font-extralight text-gray-400">
              Founder of Motionsbay
            </p>
          </div>
          <div className="">
            <p className=" text-xl text-gray-200">Top Rated</p>
            <p className="text-base font-extralight text-gray-400">
              Seller on Fiverr
            </p>
          </div>
          <div className="">
            <p className=" text-xl text-gray-200">Vetted Pro</p>
            <p className="text-base font-extralight text-gray-400">
              Seller on Fiverr
            </p>
          </div>
          <div className="">
            <p className=" text-xl text-gray-200">4000+ Projects</p>
            <p className="text-base font-extralight text-gray-400">
              Completed on Fiverr
            </p>
          </div>
          <div className="">
            <p className=" text-xl text-gray-200">$365,556</p>
            <p className="text-base font-extralight text-gray-400">
              Earned on Fiverr
            </p>
          </div>
          <div className="">
            <p className="font-medium">350+ Projects</p>
            <p className="text-base font-extralight text-gray-400">
              Completed on Instagram
            </p>
          </div>
          <div className="">
            <p className=" text-xl text-gray-200">$65,000</p>
            <p className="text-base font-extralight text-gray-400">
              Earned on Instagram
            </p>
          </div>
        </div>
        <div className="w-[1000px] mx-auto h-[600px] rounded-3xl mt-28 overflow-hidden relative border-[5px]  border-[#6339b7]">
          {!isPlaying ? (
            <div
              className="w-full h-full cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail */}
              <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="w-full h-full bg-black/20 "
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
    </div>
  );
};
