import { motion } from "framer-motion";

export const ServiceSkills = () => {
  const skills = [
    "Logo Animation",
    "2D explainer video",
    "SaaS Explainer",
    "Motion for Social Media Ads",
    "Motion Design for UI/UX",
    "Motion graphics template",
    "Video ads & Commercials",
  ];

  const mobileSlides = [];
  for (let i = 0; i < skills.length; i += 2) {
    mobileSlides.push(skills.slice(i, i + 2));
  }
  const duplicatedSlides = [...mobileSlides, ...mobileSlides];

  const scrollWidth = duplicatedSlides.length * 200;
  const duration = 15;

  return (
    <div className="bg-[#0a0612] ">
      <div className="max-w-[1340px] pt-20 md:pt-28 mx-auto ">
        <h1
          className="text-3xl md:text-[40px] font-medium  text-center text-white mb-10 md:mb-10"
        >
          এমন হাই-ডিমান্ড স্কিল শিখুন, <br className="hidden md:block" /> 
          <br className="block md:hidden" /> যেগুলোকে AI কখনও রিপ্লেস করতে পারবে
          না।
        </h1>

        {/* Desktop layout */}
        <div className="hidden md:block">
          {/* First Row */}
          <div className="flex justify-center flex-wrap gap-6 mb-6">
            {skills.slice(0, 2).map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
          {/* Second Row */}
          <div className="flex justify-center flex-wrap gap-6 mb-6">
            {skills.slice(2, 5).map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
          {/* Third Row */}
          <div className="flex justify-center flex-wrap gap-6">
            {skills.slice(5, 7).map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        </div>

        {/* Mobile infinite carousel */}
        <div className="block md:hidden overflow-hidden mt-6">
          <motion.div
            className="flex gap-5 items-center"
            animate={{ x: [0, -scrollWidth] }} // right-to-left
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: duration,
                ease: "linear",
              },
            }}
          >
            {duplicatedSlides.map((slide, idx) => (
              <div key={idx} className="flex flex-col gap-4 shrink-0 ">
                {slide.map((skill, i) => (
                  <SkillCard key={i} skill={skill} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Reusable SkillCard component
const SkillCard = ({ skill }) => (
  <div
    style={{
      background:
        "linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)",
    }}
    className="text-white text-xs md:text-xl font-medium w-52 md:w-80   text-center px-4 py-4 rounded-full hover:bg-[#d9d9d9] transition"
  >
    {skill}
  </div>
);
