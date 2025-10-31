export const CourseBanner = () => {
  return (
    <div className=" bg-[#0a0612] relative z-40 pt-32 overflow-hidden">
      <div className="max-w-[1340px] mx-auto  py-24">
        <h1
          className="text-white text-5xl font-bold text-center"
          style={{ fontFamily: 'Bricolage Grotesque' }}
        >
          This course is structured to guide you <br /> step by step from basics
          to advanced skills.
        </h1>
        <h1 className="text-gray-400 text-lg pt-4 text-center w-[80%] mx-auto">
          You will learn the top demanding motion design skills that a company
          is looking for.
        </h1>
        <div className="flex justify-center ">
          <button
            style={{
              background:
                'linear-gradient(90deg,rgba(82, 44, 158, 1) 0%, rgba(33, 13, 87, 1) 75%)',
            }}
            className="text-white font-medium text-lg cursor-pointer w-52 h-12 mt-5 rounded-full flex justify-center items-center gap-3"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute w-[600px] h-[600px]  bg-[#1e1137] blur-[100px] opacity-50 -left-20 -top-20 -z-10" />
      <div className="absolute w-[600px] h-[600px]  bg-[#1e1137] opacity-50 blur-[100px] right-0 -bottom-40 -z-10" />{' '}
    </div>
  );
};
