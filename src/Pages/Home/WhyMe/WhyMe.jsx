import { Component } from 'lucide-react';
import { BsPinAngleFill } from 'react-icons/bs';
import { MdArrowOutward } from 'react-icons/md';
import { SlOrganization } from 'react-icons/sl';

export const WhyMe = () => {
  return (
    <div className="bg-[#0a0612] z-40 py-20 md:py-32 relative">
      {/* Decorative Blurs */}
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-10 -top-[400px] right-0 blur-[100px]" />
      <div className="max-w-[1340px] mx-auto relative z-40 px-4 md:px-0">
        <div className="bg-[#930F2F] hidden md:block blur-[2px] w-72 md:w-96 h-72 md:h-96 rounded-full absolute top-60 left-0 -z-10"></div>
        <div className="bg-[#0a0612] blur-[10px] w-80 md:w-[500px] h-24 md:h-28 absolute -bottom-20 -left-24 -z-10"></div>
        <div className="bg-[#0a0612] blur-2xl w-80 md:w-[500px] h-24 md:h-28 absolute -bottom-10 -left-28 -z-10"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-16">
          {/* Left Cards */}
          <div className="w-full md:w-[40%] ml-0 md:ml-20 flex flex-col gap-10">
            {/* Experience Card */}
            <div className="border-[0.5px] bg-[#141414]/15 backdrop-blur-2xl border-gray-900 h-64 md:h-[350px] rounded-2xl flex justify-center items-center flex-col relative overflow-hidden">
              <div className="absolute w-24 md:w-32 h-24 md:h-32 -top-10 -right-10 bg-[#4107a4] blur-[100px]" />
              <div className="absolute w-16 md:w-20 h-16 md:h-20 -top-10 -left-10 bg-[#4107a4] blur-[100px]" />
              <h1 className="text-5xl md:text-7xl font-black mb-2 text-white text-center">
                10+
              </h1>
              <h1 className="text-3xl md:text-5xl text-white text-center font-bold">
                Years of <br /> Experience
              </h1>
            </div>

            {/* Ui/UX Card */}
            <div className="border-[0.5px] bg-[#141414]/15 backdrop-blur-2xl border-gray-900 h-40 md:h-40 rounded-2xl flex flex-row justify-center items-center gap-4 relative overflow-hidden">
              <div className="absolute w-20 md:w-24 h-20 md:h-24 -bottom-10 -right-10 bg-[#4107a4] blur-[100px]" />
              <div className="border rounded-full w-20 md:w-24 h-20 md:h-24 border-white flex justify-center items-center mb-2 md:mb-0">
                <Component className="text-white w-12 md:w-16 h-12 md:h-16" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  Ui/Ux Design
                </h1>
                <h1 className="text-xl md:text-2xl text-white font-extralight">
                  4k+ Projects
                </h1>
              </div>
            </div>
          </div>

          {/* Right Text & Cards */}
          <div className="w-full md:w-[55%] flex flex-col">
            <p className="text-sm md:text-base text-purple-500 font-semibold tracking-widest mb-3">
              WHY ME
            </p>
            <h1
              className="text-3xl text-white md:text-5xl font-bold  md:m-0 leading-11"
              style={{ fontFamily: 'Bricolage Grotesque' }}
            >
              Why learn from <br className="hidden md:block" /> Nazmul?
            </h1>
            <h1 className="text-gray-400 text-lg leading-5 mt-3 md:mt-5">
              I’ve created 4,000+ brand animations for global clients and built
              one of Bangladesh’s top motion design studios — Motionsbay. Now
              I’m sharing everything I’ve learned — from creative process to
              client work — so you can grow faster and earn globally. Add
              visuals like screenshots of Fiverr Pro badge, YouTube, Instagram
              followers, etc.
            </h1>

            {/* Feature Cards */}
            <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
              {/* Business Solutions */}
              <div className="w-full md:w-[48%] h-52 border border-gray-800 rounded-2xl py-6 px-5 relative overflow-hidden">
                <div className="w-[400px] md:w-[500px] h-[400px] md:h-[500px] border-20 border-[#4107a4] rounded-full -z-10 absolute left-5 md:left-10 blur-[50px] -top-2" />
                <div className="flex items-center gap-3">
                  <div className="w-12 md:w-14 h-12 md:h-14 border rounded-full bg-purple-800 flex justify-center items-center">
                    <BsPinAngleFill className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <h1 className="text-lg md:text-xl font-bold text-white">
                    Business Solutions
                  </h1>
                </div>
                <h1 className="text-gray-400 text-sm md:text-lg leading-5  mt-2 md:mt-4 ">
                  Each one showcases my approach and dedication to detail,
                  creativity
                </h1>
              </div>

              {/* Profit Partners */}
              <div className="w-full md:w-[48%] h-52 border border-gray-800 rounded-2xl py-6 px-5 relative overflow-hidden">
                <div className="w-[400px] md:w-[500px] h-[400px] md:h-[500px] border-20 border-[#4107a4] rounded-full -z-10 absolute right-5 md:right-10 blur-[50px] -top-2" />
                <div className="flex items-center gap-3">
                  <div className="w-12 md:w-14 h-12 md:h-14 border rounded-full bg-purple-800 flex justify-center items-center">
                    <SlOrganization className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <h1 className="text-lg md:text-xl font-bold text-white">
                    Profit Partners
                  </h1>
                </div>
                <h1 className="text-gray-400 text-sm md:text-lg leading-5  mt-2 md:mt-4">
                  Business consulting consul us to a provide expert advice
                  businesses
                </h1>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="flex justify-center md:justify-start mt-6 md:mt-8">
              <button
                style={{
                  background:
                    'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
                }}
                className="text-white font-medium text-lg cursor-pointer w-52 h-12 rounded-full flex justify-center items-center gap-3"
              >
                Enroll Now <MdArrowOutward className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
