import { Podcast } from 'lucide-react';
import { MdArrowOutward, MdVerified } from 'react-icons/md';

export const Choice = () => {
  const cards = [
    {
      title: 'Multiple Income Streams',
      desc: 'Learn skills that open diverse earning opportunities — from freelancing and agency ',
      points: [
        'Freelance & agency opportunities',
        'Sell templates & courses',
        'Build long-term passive income',
      ],
    },
    {
      title: 'High Demand but Low Competition',
      desc: 'Master creative skills that few truly excel at. Motion design is in high demand ',
      points: [
        'High-value niche skills',
        'Steady client demand',
        'Minimal direct competition',
      ],
    },
    {
      title: 'Small Projects, High Pricing',
      desc: 'Work smarter, not longer. Create short, impactful projects that deliver big value.',
      points: [
        'High-value motion pieces',
        'Quick delivery timeline',
        'Premium pricing potential',
      ],
    },
  ];

  return (
    <div className="bg-[#0a0612] px-5 md:px-0">
      <div className="max-w-[1340px] pt-20 md:pt-32  mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-purple-500 font-semibold tracking-widest mb-2">
              YOUR CAREER
            </p>
            <h1
              className="text-3xl md:text-5xl text-white font-medium "
              style={{ fontFamily: 'Bricolage Grotesque' }}
            >
              Why motion design <br className="hidden md:block" /> is a best
              career choice?
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-5 md:gap-8 pt-8 md:pt-14">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-700 py-8 px-6 rounded-2xl w-full md:w-1/3 flex flex-col justify-between overflow-hidden relative z-10"
            >
              <div className="absolute w-[800px] h-[800px] border-10 border-[#4107a4] rounded-full top-0 right-16 -z-10 blur-[30px] " />
              <div className="absolute  bg-[#4107a4] w-20 h-20 -top-10 -left-10  -z-10 blur-[50px] " />
              {/* <div className="absolute  bg-[#4107a4] w-24 h-24 -top-10 -right-10  -z-10 blur-[80px] " /> */}
              <div className="absolute  bg-[#4107a4] w-24 h-24 -bottom-10 -left-10  -z-10 blur-[80px] " />
              <div className="absolute  bg-[#4107a4] w-10 h-20 -bottom-10 right-10 -rotate-12  -z-10 blur-[80px] " />
              <div>
                <div className="flex justify-start items-center gap-4 mb-6">
                  <div>
                    <Podcast className="text-purple-500 w-20 h-20" />
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl leading-8 font-semibold">
                    {card.title}
                  </h2>
                </div>
                <p className="text-gray-400 text-lg mb-5 leading-5">
                  {card.desc}
                </p>
              </div>

              <div className="space-y-2">
                {card.points.map((point, i) => (
                  <p
                    key={i}
                    className="flex gap-2 items-center text-white text-base"
                  >
                    <MdVerified className="text-blue-600 " /> {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
