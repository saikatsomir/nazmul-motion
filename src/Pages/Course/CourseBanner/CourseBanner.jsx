export const CourseBanner = () => {
  return (
    <div className="bg-[#0a0612] relative z-40 pt-24 sm:pt-28 md:pt-32 overflow-hidden">
      <div className="max-w-[1340px] mx-auto py-16 sm:py-20 md:py-24 px-5 sm:px-10">
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center"
          style={{ fontFamily: 'Bricolage Grotesque' }}
        >
          This course is structured to guide you{' '}
          <br className="hidden sm:block" />
          step by step from basics to advanced skills.
        </h1>

        <h1 className="text-gray-400 text-lg pt-4 text-center w-[90%] sm:w-[80%] mx-auto leading-5">
          You will learn the top demanding motion design skills that a company
          is looking for.
        </h1>

        <div className="flex justify-center">
          <button
            style={{
              background:
                'linear-gradient(90deg,rgba(82, 44, 158, 1) 0%, rgba(33, 13, 87, 1) 75%)',
            }}
            className="text-white font-medium text-base sm:text-lg cursor-pointer w-40 sm:w-52 h-11 sm:h-12 mt-6 rounded-full flex justify-center items-center gap-3"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Background light effects */}
      <div className="absolute w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] bg-[#1e1137] blur-[80px] sm:blur-[100px] opacity-50 -left-10 sm:-left-20 -top-10 sm:-top-20 -z-10" />
      <div className="absolute w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] bg-[#1e1137] blur-[80px] sm:blur-[100px] opacity-50 right-0 -bottom-20 sm:-bottom-40 -z-10" />
    </div>
  );
};
