import { MdArrowOutward } from 'react-icons/md';

export const CourseBanner = () => {
  return (
    <div className=" bg-[#0a0612] relative z-40 pt-32 overflow-hidden">
      <div className="max-w-[1340px] mx-auto  py-24">
        <h1 className="text-white text-4xl font-bold text-center">
          শূন্য থেকে শুরু করে হয়ে ওঠো প্রফেশনাল মোসান <br /> ডিজাইনার নিশ্চিত
          করো তোমার ভবিষ্যৎ জব/ইন্টার্নশিপ
        </h1>
        <h1 className="text-gray-400 text-lg pt-4 text-center w-[80%] mx-auto">
          Javascript, React, Node.js, MongoDB এবং Express শিখে শুন্য থেকে দক্ষ
          ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি করা শেখো। ফ্রন্টএন্ডে এডভান্স হওয়ার
          সাথে শিখে নাও ব্যাকএন্ডও, যেন ইউজারকে দিতে পারো স্মুথ এক্সপেরিয়েন্স।
        </h1>
        <div className="flex justify-center ">
          <button
            style={{
              background:
                'linear-gradient(90deg,rgba(82, 44, 158, 1) 0%, rgba(33, 13, 87, 1) 75%)',
            }}
            className="text-white font-medium text-lg cursor-pointer w-52 h-12 mt-5 rounded-full flex justify-center items-center gap-3"
          >
            Learn More <MdArrowOutward className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="absolute w-[600px] h-[600px]  bg-[#1e1137] blur-[100px] opacity-50 -left-20 -top-20 -z-10" />
      <div className="absolute w-[600px] h-[600px]  bg-[#1e1137] opacity-50 blur-[100px] right-0 -bottom-40 -z-10" />{' '}
    </div>
  );
};
