import enroll from './images/enroll.svg';
import end from './images/end.svg';
import video from './images/video.svg';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
export const NextBatch = () => {
  return (
    <div className="bg-[#0a0612] px-4 md:px-0">
      <div className="max-w-[1340px] mx-auto pt-20 md:pt-10 pb-20">
        <h1 className="text-3xl md:text-5xl text-white font-medium text-center ">
          আগামী ব্যাচের সময়সূচি
        </h1>
        <div className="bg-[#141233] w-full md:h-52 mt-10 md:mt-16 rounded-lg border  border-[#6339b7] pb-10 md:pb-0 md:rounded-t-3xl relative z-40">
          <div className="flex flex-col md:flex-row justify-center  items-center  md:justify-between mx-10 pt-10 pb-6 z-40 md:border-b border-gray-600">
            <div className="flex gap-2 items-center justify-center  pb-5 md:py-0 border-b border-gray-600  md:border-b-0">
              {/* <div>
                <img src={enroll} className="w-12" alt="" />
              </div> */}
              <div>
                <h1 className="text-white text-lg">ক্লাস সংখ্যাঃ ২৬+ টি</h1>
                <h1 className="text-white text-lg">ক্লাস টাইমঃ দেড় ঘণ্টা </h1>
              </div>
            </div>
            <div>
              <h1 className="text-white text-4xl hidden md:block">✦</h1>
            </div>
            <div className="flex gap-2 items-center justify-center  py-5 md:py-0 border-b border-gray-600  md:border-b-0">
              {/* <div>
                <img src={end} className="w-12" alt="" />
              </div> */}
              <div>
                <h1 className="text-white text-lg">
                  {' '}
                  ভর্তি শুরু হবেঃ ১০ ই ডিসেম্বর, ২০২৫
                </h1>
                <h1 className="text-white text-lg">
                  ভর্তি শেষ হবেঃ ৮ ই জানুয়ারী ২০২৬
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-white text-4xl hidden md:block">✦</h1>
            </div>
            <div className="flex gap-2 items-center justify-center py-5 md:py-0 border-b border-gray-600  md:border-b-0">
              {/* <div>
                <img src={video} className="w-10" alt="" />
              </div> */}
              <div>
                <h1 className="text-white text-lg"> আসন সংখ্যাঃ সীমিত</h1>
                <h1 className="text-white text-lg">
                  ক্লাস শুরুঃ ৯ ই জানুয়ারী ২০২৬
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-white text-4xl hidden md:block">✦</h1>
            </div>
            <div className="flex gap-2 items-center justify-center  py-5 md:py-0 border-b border-gray-600  md:border-b-0">
              {/* <div>
                <img src={video} className="w-10" alt="" />
              </div> */}
              <div>
                <h1 className="text-white text-lg "> মেনটরঃ নাজমুল হক</h1>
                <h1 className="text-white text-lg">ক্লাসের ধরনঃ লাইভ ক্লাস</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-gray-500 text-lg text-center pt-3 md:pt-6 leading-6 capitalize">
              সীমিত সময়ের জন্য এই কোর্স এর প্রাইস মাত্র{' '}
              <span className="line-through text-red-500"> ১২,০০০ ৳ </span>
              &nbsp;
              <span className="text-[#FBB35F] capitalize font-black">
                ৬,৯৯০ ৳
              </span>
              &nbsp; টাকায়
            </h1>
            <div className="flex   mt-14 justify-center ">
              <div className="flex gap-x-6">
                <Link
                  to={'/payment'}
                  className="text-white font-medium text-xl cursor-pointer w-44 h-12 mt-5 rounded-full flex justify-center items-center gap-3 bg-[#4A2692]"
                >
                  Enroll Now
                </Link>
                <Link
                  to={'/payment'}
                  className="text-white font-bold text-xl cursor-pointer w-44 h-12 mt-5 rounded-full flex justify-center items-center bg-[#ef9b3c] gap-1"
                >
                  6,990 <span>Tk</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute w-[120%] -left-32 h-24 bg-[#0a0612] hidden md:block -bottom-10 blur-[20px] -z-10" />
          <div className="absolute w-[120%] -left-32 h-24 bg-[#0a0612] hidden md:block -bottom-5 blur-[50px] -z-10" />
        </div>
      </div>
    </div>
  );
};
