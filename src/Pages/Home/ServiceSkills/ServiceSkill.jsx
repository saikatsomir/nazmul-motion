import { useState, useRef, useEffect } from 'react';
import service from './images/service.png';
import { MdArrowOutward } from 'react-icons/md';
import { GoArrowUpRight } from 'react-icons/go';

const services = [
  {
    title: 'Logo Animation',
    desc: 'Bring your brand to life with dynamic logo animations that capture attention and leave a lasting impression.',
  },
  {
    title: 'SaaS Explainer',
    desc: 'Simplify complex software concepts with engaging SaaS explainer videos that educate, inform, and convert your audience.',
  },
  {
    title: '2D Explainer Video',
    desc: 'Tell your story clearly and creatively with 2D explainer videos that make ideas easy to understand and memorable.',
    highlight: true,
  },
  {
    title: 'Motion Graphics Template',
    desc: 'Save time and elevate your content with ready-to-use motion graphics templates for videos, presentations, and promotions.',
  },
  {
    title: 'Motion Design for UI/UX',
    desc: 'Enhance user experience with intuitive motion design that makes interfaces more interactive, engaging, and user-friendly.',
  },
];

export default function ServiceSkills() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [modalData, setModalData] = useState(null); // store clicked card data
  const cardRefs = useRef([]);

  useEffect(() => {
    if (hoverIndex !== null && cardRefs.current[hoverIndex]) {
      const card = cardRefs.current[hoverIndex];
      setHighlightStyle({
        top: card.offsetTop,
        height: card.offsetHeight,
        width: card.offsetWidth,
      });
    }
  }, [hoverIndex]);

  return (
    <section className="bg-[#0a0612] text-white py-40 px-6 md:px-20 relative z-40">
      <div className="absolute w-[400px] h-[600px] bg-[#11032a] blur-[100px] right-0 -top-20 z-50" />
      <div className="absolute w-[300px] h-[500px] bg-[#11032a] blur-[100px] -left-20 top-60 -z-10" />
      <div className="absolute w-[300px] h-[500px] bg-[#11032a] blur-[100px] -translate-1/2 left-1/2 top-[50%] -z-10" />

      <div className="max-w-[1340px] mx-auto flex gap-10">
        {/* Left Content */}
        <div className="w-[40%]">
          <p className="text-sm text-purple-400 font-semibold tracking-widest mb-2">
            MY SERVICES
          </p>
          <h2 className="text-4xl font-bold mb-4 uppercase">
            High-demand skills that AI will never replace.
          </h2>
          <p className="text-gray-400 font-extralight max-w-md mb-8">
            AI automates tasks, but creativity, empathy, and complex
            problem-solving are human strengths. Master them to stay
            indispensable.
          </p>
          <button
            style={{
              background:
                'linear-gradient(90deg,rgba(135, 1, 96, 1) 0%, rgba(99, 57, 183, 1) 65%)',
            }}
            className="text-white font-medium text-lg cursor-pointer w-52 h-12 mt-8 rounded-full flex justify-center items-center gap-3"
          >
            Enroll Now <MdArrowOutward className="text-2xl" />
          </button>
          <div className="relative z-50 mt-14">
            <img
              src={service}
              alt="growth chart"
              className="rounded-lg shadow-lg w-96 h-72"
            />
            <div className="absolute -top-3 border w-96 h-72 rounded-lg border-gray-800 left-3 -z-10"></div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="relative w-[60%] z-50">
          {/* Highlight sliding bar */}
          <div
            className="absolute left-0 bg-gradient-to-r from-purple-700 to-purple-950 rounded-2xl z-0 transition-all duration-500 ease"
            style={{
              top: highlightStyle.top || 0,
              height: highlightStyle.height || 0,
              width: highlightStyle.width || 0,
            }}
          ></div>

          <div className="space-y-4 relative z-10">
            {services.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setModalData(item)}
                className="p-6 rounded-2xl border border-gray-800 flex gap-5 items-center cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-950"
              >
                <div className="flex items-start w-[88%] gap-4">
                  <div>
                    <h3 className="font-medium text-2xl mb-3 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="w-16 h-16 border rounded-full flex justify-center border-gray-600 items-center">
                  <GoArrowUpRight
                    className={`w-10 h-10 text-gray-50 transition-transform duration-300 ${
                      hoverIndex === index ? 'rotate-45' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#1a0f3b] rounded-2xl p-8 max-w-lg  relative h-[80vh] w-[80vw]">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer"
              onClick={() => setModalData(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{modalData.title}</h2>
            <p className="text-gray-300">{modalData.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
