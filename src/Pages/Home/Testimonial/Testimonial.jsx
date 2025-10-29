import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export const Testimonial = () => {
  const reviews = Array.from({ length: 30 }, (_, i) => ({
    name: `User ${i + 1}`,
    batch: `Batch ${Math.floor(Math.random() * 3) + 1}`,
    image: `https://i.pravatar.cc/150?img=${i + 1}`,
    review:
      'This program changed the way I see motion design. The lessons are practical and inspiring!',
    rating: 5,
  }));

  // Split into groups of 9 (3x3 layout per group)
  const chunkedReviews = [];
  for (let i = 0; i < reviews.length; i += 9) {
    chunkedReviews.push(reviews.slice(i, i + 9));
  }

  return (
    <div className="bg-[#0a0612] py-32 h-auto relative z-40 ">
      {/* Decorative Background Blur */}
      <div className="bg-[#0a0612] w-full h-32 blur-2xl absolute top-[300px] z-30" />

      {/* Top SVG Header Section */}
      <div className="flex justify-between items-center relative">
        {/* Left Flipped Shape */}
        <div className="w-[550px] h-[270px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ transform: 'scaleX(-1)' }}
          >
            <path
              d="M0 600 L300 230 Q340 180 400 180 L1200 180 L1200 600 Z"
              fill="url(#grad2)"
            />
            <path
              d="M0 600 L300 230 Q340 180 400 180 L1200 180"
              fill="none"
              stroke="#1e1b4c"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#12052d" />
                <stop offset="100%" stopColor="#0a0612" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <div className="mt-32 z-40">
          <h1
            className="text-5xl font-bold text-white text-center"
            style={{ fontFamily: 'Bricolage Grotesque' }}
          >
            What it’s like <br /> learning from Nazmul
          </h1>
          <h1 className="text-gray-500 text-lg text-center mt-3">
            Hear from those who experienced the NEXTUP effect.
          </h1>
        </div>

        {/* Right Shape */}
        <div className="w-[550px] h-[270px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 600 L300 230 Q340 180 400 180 L1200 180 L1200 600 Z"
              fill="url(#grad1)"
            />
            <path
              d="M0 600 L300 230 Q340 180 400 180 L1200 180"
              fill="none"
              stroke="#1e1b4c"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#12052d" />
                <stop offset="100%" stopColor="#0a0612" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Review Carousel Section */}
      <div className="relative">
        <div className="bg-[#0a0612] h-[120%] blur-[25px] w-32  absolute -top-20 left-32 z-30" />
        <div className="bg-[#0a0612] h-[120%] blur-[25px] w-32  absolute -top-20 right-32 z-30" />
        <div className="max-w-[1340px] mx-auto mt-32 overflow-hidden relative ">
          <motion.div
            className="flex gap-10"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
            }}
          >
            {[...chunkedReviews, ...chunkedReviews].map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 shrink-0 w-[1340px]"
              >
                {group.map((r, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-2xl bg-transparent p-5 py-8 relative overflow-hidden"
                  >
                    <div className="absolute  bg-[#4107a4] w-20 h-20 -top-10 -right-10  -z-10 blur-[50px] " />
                    {/* <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -right-10  -z-10 blur-[80px] " /> */}
                    <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -left-10  -z-10 blur-[80px] " />
                    <div className="absolute  bg-[#4107a4] w-10 h-20 -bottom-10 right-10 -rotate-12  -z-10 blur-[80px] " />
                    {/* Header: Name, Image, Batch */}
                    <div className="flex items-center gap-4 mb-8">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-14 h-14 rounded-full border border-gray-700"
                      />
                      <div>
                        <h2 className="text-white text-lg font-semibold">
                          {r.name}
                        </h2>
                        <p className="text-sm text-gray-500">{r.batch}</p>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-400 mb-3 leading-relaxed">
                      {r.review}
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
