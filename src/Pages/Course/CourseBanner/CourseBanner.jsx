import { motion } from 'framer-motion';

export const CourseBanner = ({ scrollToFaq }) => {
  // Framer Motion variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
    },
  };

  return (
    <div className="bg-[#0a0612] relative z-40 pt-24 sm:pt-28 md:pt-32 overflow-hidden">
      <div className="max-w-[1340px] mx-auto py-16 sm:py-20 md:py-24  flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        {/* Left Text Section */}
        <motion.div
          // variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-2/3 text-center md:text-left"
        >
          <h1 className="text-white text-5xl md:text-[50px] font-medium leading-11 md:leading-15">
            এই কোর্স আপনাকে একদম শুরু <br /> থেকে
            <span className="text-[#ef9b3c]"> ধাপে ধাপে </span> অ্যাডভান্সড মোশন{' '}
            <br />
            গ্রাফিক্স পর্যন্ত নিয়ে যাবে।
          </h1>

          <p className="text-gray-400 text-lg  md:text-xl md:pt-4 mx-auto md:mx-0 w-[95%] sm:w-[80%] leading-6">
            আমি পুরো পথেই আপনাকে গাইড করবো— <br /> বেসিক অ্যানিমেশন থেকে শুরু
            করে প্রফেশনাল লেভেলের মাস্টারি পর্যন্ত।
            <br />
            এখানে আপনি শিখবেন সেই সব মোশন ডিজাইন স্কিল, <br />
            যেগুলোর জন্য ক্লায়েন্টরা আজ সবচেয়ে বেশি পেমেন্ট দিতে আগ্রহী।
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={scrollToFaq}
              style={{
                background:
                  'linear-gradient(90deg,rgba(82, 44, 158, 1) 0%, rgba(33, 13, 87, 1) 75%)',
              }}
              className="text-white font-medium text-base sm:text-lg cursor-pointer w-40 sm:w-52 h-11 sm:h-12 mt-6 rounded-full flex justify-center items-center gap-3"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Button Section */}
        <motion.div
          // variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-center md:justify-end"
        >
          <div className="flex flex-col gap-21">
            <div className="flex items-center  ">
              <div
                className="w-32 h-28 border  border-[#4107a4]/50 rounded-md  flex justify-center items-center"
                style={{
                  background:
                    'linear-gradient(-135deg, rgba(33, 13, 87, 1) 40%,  rgba(82, 44, 158, 1) 100%)',
                }}
              >
                <h1 className="text-white text-xl text-center">
                  লাইভ ক্লাস <br /> দেখুন
                </h1>
              </div>
              <div>
                <div className="flex items-center relative mx-2 w-20">
                  <div className="w-20 border border-gray-400 "></div>
                  <div className="w-5 h-5 border-b-2 border-r-2 border-gray-400 absolute right-0.5 -rotate-45"></div>
                </div>
              </div>
              <div className="w-32 h-28 flex justify-center items-center rounded-md  relative">
                <div
                  className="w-32 h-28 border  border-[#4107a4]/50 rounded-md  flex justify-center items-center"
                  style={{
                    background:
                      'linear-gradient(-135deg, rgba(33, 13, 87, 1) 40%,  rgba(82, 44, 158, 1) 100%)',
                  }}
                >
                  <h1 className="text-white text-xl text-center">
                    প্রাকটিস <br /> করুন
                  </h1>
                </div>
                <div className="absolute -bottom-11 left-1/2 -translate-x-1/2">
                  <div className="flex items-center rotate-90 relative mx-2 w-16">
                    <div className="w-16 border border-gray-400 "></div>
                    <div className="w-5 h-5 border-b-2 border-r-2 border-gray-400 absolute right-0.5 -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center  ">
              <div
                className="w-32 h-28 border  border-[#4107a4]/50 rounded-md  flex justify-center items-center"
                style={{
                  background:
                    'linear-gradient(-135deg, rgba(33, 13, 87, 1) 40%,  rgba(82, 44, 158, 1) 100%)',
                }}
              >
                <h1 className="text-white text-xl text-center">
                  পোর্টফোলিও <br /> বানান
                </h1>
              </div>
              <div>
                <div className="flex items-center -rotate-180 relative mx-2 w-20">
                  <div className="w-20 border border-gray-400 "></div>
                  <div className="w-5 h-5 border-b-2 border-r-2 border-gray-400 absolute right-0.5 -rotate-45"></div>
                </div>
              </div>
              <div
                className="w-32 h-28 border  border-[#4107a4]/50 rounded-md  flex justify-center items-center"
                style={{
                  background:
                    'linear-gradient(-135deg, rgba(33, 13, 87, 1) 40%,  rgba(82, 44, 158, 1) 100%)',
                }}
              >
                <h1 className="text-white text-xl text-center">
                  আর্নিং শুরু <br /> করুন
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background light effects */}
      <div className="absolute w-[350px] sm:w-[500px]  h-[350px] sm:h-[500px]  bg-[#060422] blur-[80px] sm:blur-[90px]  -right-10 sm:-right-20 -top-10 sm:-top-20 -z-10" />
      <div className="absolute w-[350px] sm:w-[500px]  h-[350px] sm:h-[500px]  bg-[#060422] blur-[80px] sm:blur-[100px]  -left-10 sm:-left-20 -bottom-10 sm:-bottom-20 -z-10" />
    </div>
  );
};
