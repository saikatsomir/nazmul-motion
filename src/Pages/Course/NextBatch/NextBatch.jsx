import enroll from './images/enroll.svg';
import end from './images/end.svg';
import video from './images/video.svg';
import { MdArrowOutward } from 'react-icons/md';

export const NextBatch = () => {
  return (
    <div className="bg-[#0a0612] ">
      <div className="max-w-[1340px] mx-auto pt-28 pb-20">
        <h1 className="text-3xl text-white text-center font-bold">
          পরবর্তী ব্যাচের সময়সূচি
        </h1>
        <div className="bg-[#141233] w-full h-52 mt-16 rounded-t-3xl relative z-40">
          <div className="flex justify-between mx-10 pt-10 pb-6 z-40 border-b border-gray-600">
            <div className="flex gap-2 items-center">
              <div>
                <img src={enroll} className="w-12" alt="" />
              </div>
              <div>
                <h1 className="text-gray-400 text-lg">ভর্তি শুরু</h1>
                <h1 className="text-white text-2xl"> 10 December, 2025</h1>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img src={end} className="w-12" alt="" />
              </div>
              <div>
                <h1 className="text-gray-400 text-lg">ভর্তি শেষ</h1>
                <h1 className="text-white text-2xl"> 24 December, 2025</h1>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img src={video} className="w-10" alt="" />
              </div>
              <div>
                <h1 className="text-gray-400 text-lg"> অরিয়েন্টেশন শুরু</h1>
                <h1 className="text-white text-2xl"> 28 December, 2025</h1>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img src={video} className="w-10" alt="" />
              </div>
              <div>
                <h1 className="text-gray-400 text-lg">ক্লাস শুরু</h1>
                <h1 className="text-white text-2xl"> 30 December, 2025</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-gray-500 text-xl text-center pt-6 capitalize">
              If you are interested To{' '}
              <span className="text-[#FBB35F] capitalize">
                Enroll in 13th batch
              </span>
              , register on the website
            </h1>
            <div className="flex justify-center ">
              <button
                style={{
                  background:
                    'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
                }}
                className="text-white font-medium text-lg cursor-pointer w-44 h-12 mt-5 rounded-full flex justify-center items-center gap-3"
              >
                Enroll Now
              </button>
            </div>
          </div>

          <div className="absolute w-[120%] -left-32 h-24 bg-[#0a0612] -bottom-10 blur-[20px] -z-10" />
          <div className="absolute w-[120%] -left-32 h-24 bg-[#0a0612] -bottom-5 blur-[50px] -z-10" />
        </div>
      </div>
    </div>
  );
};
