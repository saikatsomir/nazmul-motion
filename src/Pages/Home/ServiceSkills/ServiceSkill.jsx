export const ServiceSkills = () => {
  const skills = [
    'Logo Animation',
    '2D explainer video',
    'SaaS Explainer',
    'Motion for Social Media Ads',
    'Motion Design for UI/UX',
    'Motion graphics template',
    'Video ads & Commercials',
  ];

  return (
    <div className="bg-[#0a0612]">
      <div className="max-w-[1340px]  py-20 md:py-40 mx-auto ">
        <div>
          <h1
            className="text-3xl md:text-5xl font-medium text-center text-white py-8 md:mb-16"
            style={{ fontFamily: 'Bricolage Grotesque' }}
          >
            Learn high-demand <br className="hidden md:block" /> skills{' '}
            <br className="block md:hidden" /> that AI will never replace.
          </h1>

          {/* First Row */}
          <div className="flex justify-center flex-wrap  gap-6 mb-6">
            {skills.slice(0, 2).map((skill, i) => (
              <div
                key={i}
                style={{
                  background:
                    'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
                }}
                className="text-white text-[15px] md:text-xl font-medium w-80 md:w-72 text-center px-4 py-4 rounded-full hover:bg-[#d9d9d9] transition"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-center flex-wrap gap-6 mb-6">
            {skills.slice(2, 5).map((skill, i) => (
              <div
                key={i}
                style={{
                  background:
                    'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
                }}
                className=" text-white text-[15px] md:text-xl font-medium w-80 text-center px-4 py-4 rounded-full hover:bg-[#d9d9d9] transition"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="flex justify-center flex-wrap gap-6">
            {skills.slice(5, 7).map((skill, i) => (
              <div
                key={i}
                style={{
                  background:
                    'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
                }}
                className="text-white text-[15px] md:text-xl font-medium w-80 text-center px-4 py-4 rounded-full hover:bg-[#d9d9d9] transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
