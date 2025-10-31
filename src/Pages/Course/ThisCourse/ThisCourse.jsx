import { useState } from 'react';
import thumbail from './images/thumbnail.jpg';
import bulb from './images/bulb.svg';
import tube from './images/tube.svg';
import code from './images/code.svg';
import { CourseFaq } from '../CourseFaq/CourseFaq';

export const ThisCourse = () => {
  const skills = [
    'Video ads & Commercials',
    'Logo Animation',
    'Motion Design for UI/UX',
    '2D Explainer Video',
    'SaaS Explainer',
    'Motion for Social Media Ads',
    'Motion Graphics Template',
  ];

  const path = [
    {
      img: tube,
      name: '24+ Live Classes',
      path: 'videos',
      border: 'border-pink-500',
      bg: 'bg-pink-500',
      description:
        'You’ll get clear lessons, hands-on exercises, and practical workflows you can apply immediately.',
    },
    {
      img: bulb,
      name: '15+ Real Projects',
      path: 'projects',
      border: 'border-blue-500',
      bg: 'bg-blue-500',
      description:
        'Each week builds on the last, with live feedback to keep you improving.',
    },
    {
      img: code,
      name: '15+ Assignments',
      path: 'assignments',
      border: 'border-purple-500',
      bg: 'bg-purple-500',
      description:
        'By the end, you’ll have real projects and the confidence to work professionally.',
    },
  ];

  const colors = [
    { bg: 'bg-pink-500/20', text: 'text-pink-400' },
    { bg: 'bg-blue-500/20', text: 'text-blue-400' },
    { bg: 'bg-green-500/20', text: 'text-green-400' },
    { bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
    { bg: 'bg-purple-500/20', text: 'text-purple-400' },
    { bg: 'bg-orange-500/20', text: 'text-orange-400' },
    { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'nCZbZyyuHRg';
  const thumbnail = thumbail;

  return (
    <div
      className=" pb-32 z-40"
      style={{
        background:
          'linear-gradient(0deg,rgba(17, 7, 38, 1) 0%, rgba(10, 6, 18, 1) 100%)',
      }}
    >
      <div className="max-w-[1340px] mx-auto px-4 pt-10">
        {/* <h1 className="text-3xl text-white text-center font-bold pt-20">
          এই কোর্সে তুমি কী শিখবে?
        </h1>

        <div className="flex justify-center gap-6 flex-wrap mt-10">
          {skills.map((skill, i) => {
            const color = colors[i % colors.length];
            return (
              <div
                key={i}
                className={`${color.bg} ${color.text} px-6 py-3 rounded-xl font-medium text-lg transition-transform duration-300 hover:scale-105 cursor-default`}
              >
                {skill}
              </div>
            );
          })}
        </div> */}

        {/* ===== YouTube Section ===== */}
        <div className="w-[1000px] mx-auto h-[600px] rounded-3xl  overflow-hidden relative border-[5px] border-[#6339b7]">
          {!isPlaying ? (
            <div
              className="w-full h-full cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="w-full h-full bg-black/20 object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <div className="ml-1 w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="absolute w-[120%] bg-[#110726] h-32 -left-36 -bottom-16 z-10 blur-[20px] " />
          <div className="absolute w-[120%] bg-[#110726] h-32 -left-36 bottom-5 z-10 blur-[45px]" />

          {path.map((item, i) => (
            <div
              key={i}
              className={`relative border ${item.border} rounded-2xl p-8 text-white backdrop-blur-md bg-white/5 transition-all duration-300 overflow-hidden h-[400px]`}
            >
              <div
                className={`absolute w-full h-10 blur-2xl   -top-10  left-0 ${item.bg}`}
              ></div>
              <div className="flex ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 mb-2"
                />
              </div>
              <h2 className="text-xl font-semibold  mb-4">{item.name}</h2>
              <p className="text-gray-300 text-base leading-relaxed text-justify">
                {item.description}
              </p>

              {/* Soft glowing border effect */}
              <div
                className={`absolute inset-0 rounded-2xl border ${item.border} opacity-20 blur-md`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
