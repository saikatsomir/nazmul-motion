import { Component } from "lucide-react";
import { BsPinAngleFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { SlOrganization } from "react-icons/sl";
import { Link } from "react-router-dom";

export const WhyMe = () => {
  return (
    <div className="bg-[#0a0612] z-40 py-20 md:py-32 relative">
      {/* Decorative Blurs */}
      <div className="absolute w-96 h-96 bg-[#4107a4] opacity-10 -top-[400px] right-0 blur-[100px]" />
      <div className="max-w-[1340px] mx-auto relative z-40 px-4 md:px-0">
        <div className="bg-[#930F2F] hidden md:block blur-[2px] w-72 md:w-60 h-72 md:h-60 rounded-full absolute top-44 left- -z-10"></div>
        <div className="bg-[#0a0612] blur-[10px] w-80 md:w-[500px] h-24 md:h-28 absolute -bottom-20 -left-24 -z-10"></div>
        <div className="bg-[#0a0612] blur-2xl w-80 md:w-[500px] h-24 md:h-28 absolute -bottom-10 -left-28 -z-10"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-16">
          {/* Left Cards */}
          <div className="w-full md:w-[40%] ml-0 md:ml-20 flex flex-col gap-10">
            {/* Experience Card */}
            <div className="border-[0.5px] bg-[#141414]/15 backdrop-blur-2xl border-gray-900 h-64 md:h-[350px] rounded-2xl flex justify-center items-center flex-col relative overflow-hidden">
              <div className="absolute w-24 md:w-32 h-24 md:h-32 -top-10 -right-10 bg-[#4107a4] blur-[100px]" />
              <div className="absolute w-16 md:w-20 h-16 md:h-20 -top-10 -left-10 bg-[#4107a4] blur-[100px]" />
              <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white text-center ">
                ০৯+
              </h1>
              <h1 className="text-3xl md:text-5xl text-white text-center font-medium">
                বছরের <br />অভিজ্ঞতা

              </h1>
            </div>

            {/* Ui/UX Card */}
            {/* <div className="border-[0.5px] bg-[#141414]/15 backdrop-blur-2xl border-gray-900 h-40 md:h-40 rounded-2xl flex flex-row justify-center items-center gap-4 relative overflow-hidden">
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
              </div> */}
          </div>

          {/* Right Text & Cards */}
          <div className="w-full md:w-[55%] flex flex-col">
            <p className="text-sm md:text-base text-purple-500 font-semibold tracking-widest mb-3">
              WHY ME
            </p>
            <h1 className="text-3xl md:text-[40px] font-medium  text-white  md:m-0 leading-11">
              কেন আমার কাছ থেকে মোশন ডিজাইন শিখবেন?
            </h1>
            <h1 className="text-gray-400 text-base md:text-lg leading-5 mt-3 text-justify md:mt-5">
              আমি গত ৯ বছরে গ্লোবাল ক্লায়েন্টদের জন্য ৪,০০০+ মোশন অ্যানিমেশন
              তৈরি করেছি এবং তৈরি করেছি বাংলাদেশের অন্যতম শীর্ষ মোশন ডিজাইন
              এজেন্সি Motionsbay। এবার সেই সমস্ত অভিজ্ঞতা— ক্রিয়েটিভ প্রসেস থেকে
              শুরু করে ক্লায়েন্ট ওয়ার্কফ্লো পর্যন্ত— সব কিছু বাংলায় শেয়ার করছি,
              যাতে আপনি আরও দ্রুত গ্রো করতে পারেন এবং গ্লোবাল মার্কেটে
              আত্মবিশ্বাসের সাথে আয় শুরু করতে পারেন।
            </h1>

            {/* Feature Cards */}

            {/* Enroll Button */}
            <div className="flex justify-center md:justify-start mt-6 md:mt-8">
              <Link
                to="/payment"
                style={{
                  background:
                    "linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)",
                }}
                className="text-white font-medium text-lg cursor-pointer w-52 h-12 rounded-full flex justify-center items-center gap-3"
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
