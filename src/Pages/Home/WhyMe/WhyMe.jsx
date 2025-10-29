import { Component } from 'lucide-react';
import { BsPinAngleFill } from 'react-icons/bs';
import { MdArrowOutward } from 'react-icons/md';
import { SlOrganization } from 'react-icons/sl';

export const WhyMe = () => {
  return (
    <div className=" bg-[#0a0612] z-40 pb-40 relative">
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-10 -top-[400px] right-0 blur-[100px] " />
      <div className="  max-w-[1340px] mx-auto relative z-40 ">
        <div className="bg-[#930F2F] blur-[2px] w-96 h-96 rounded-full absolute top-60 left-0 -z-10"></div>
        <div className="bg-[#0a0612] blur-[10px] w-[500px] h-28  absolute -bottom-20 -left-24 -z-10"></div>
        <div className="bg-[#0a0612] blur-2xl w-[500px] h-28  absolute -bottom-10 -left-28 -z-10"></div>
        <div className="flex justify-between">
          <div className="w-[40%]  ml-20  flex flex-col gap-10  ">
            <div className=" border-[0.5px] bg-[#141414]/15 backdrop-blur-2xl border-gray-900 h-96 rounded-2xl flex justify-center items-center flex-col relative overflow-hidden">
              <div className="absolute w-32 h-32 -top-10 -right-10 bg-[#4107a4] blur-[100px]" />
              <div className="absolute w-20 h-20 -top-10 -left-10 bg-[#4107a4] blur-[100px]" />
              <h1 className="text-7xl font-black mb-2 text-white text-center">
                10+
              </h1>
              <h1 className="text-5xl text-white text-center font-bold">
                Years of <br /> Experience
              </h1>
            </div>
            <div className="border-[0.5px] bg-[#141414]/15 backdrop-blur-2xl border-gray-900  h-40 rounded-2xl flex justify-center items-center gap-4 relative overflow-hidden ">
              <div className="absolute w-24 h-24 -bottom-10 -right-10 bg-[#4107a4] blur-[100px]" />

              <div className="border rounded-full w-24 h-24 border-white flex justify-center items-center">
                <Component className="text-white w-16 h-16" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2 text-white ">
                  Ui/Ux Design
                </h1>
                <h1 className="text-2xl text-white  font-extralight">
                  4k+ Projects
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[50%] ">
            <p className="text-sm text-purple-500 font-semibold tracking-widest mb-3">
              WHY ME
            </p>
            <h1
              className="text-white font-bold text-5xl m-3 -ml-1"
              style={{ fontFamily: 'Bricolage Grotesque' }}
            >
              Why learn from <br /> Nazmul?
            </h1>
            <h1 className="text-gray-400">
              I’ve created 4,000+ brand animations for global clients and built
              one of Bangladesh’s top motion design studios — Motionsbay. Now
              I’m sharing everything I’ve learned — from creative process to
              client work — so you can grow faster and earn globally.” Add
              visuals like screenshots of Fiverr Pro badge, YouTube, Instagram
              followers, etc.
            </h1>
            <div className="flex gap-10 mt-16">
              <div className="w-[50%] h-52 border border-gray-800 rounded-2xl py-7 px-5 relative overflow-hidden">
                <div className="w-[500px] h-[500px] border-20 border-[#4107a4] rounded-full -z-10 absolute left-10 blur-[50px] -top-2" />

                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 border rounded-full bg-purple-800 flex justify-center items-center">
                    <BsPinAngleFill className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-white">
                    Business Solutions
                  </h1>
                </div>
                <h1 className="text-gray-400 text-lg mt-4 w-[85%]">
                  Each one showcases my approach and dedication to detail,
                  creativity
                </h1>
              </div>
              <div className="w-[50%] h-52 border border-gray-800 rounded-2xl py-7 px-5 relative overflow-hidden">
                <div className="w-[500px] h-[500px] border-20 border-[#4107a4] rounded-full -z-10 absolute right-10 blur-[50px] -top-2" />
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 border rounded-full bg-purple-800 flex justify-center items-center">
                    <SlOrganization className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-white">
                    Profit Partners
                  </h1>
                </div>
                <h1 className="text-gray-400 text-lg mt-4 w-[85%]">
                  Business consulting consul us to a provide expert advice
                  businesses
                </h1>
              </div>
            </div>
            <div>
              <button
                style={{
                  background:
                    'linear-gradient(90deg,rgba(82, 44, 158, 1) 0%, rgba(33, 13, 87, 1) 75%)',
                }}
                className="text-white font-medium text-lg cursor-pointer w-52 h-12 mt-8 rounded-full flex justify-center items-center gap-3"
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
