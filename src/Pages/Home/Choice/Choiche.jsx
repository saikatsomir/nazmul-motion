import { Podcast } from "lucide-react";
import { MdArrowOutward, MdVerified } from "react-icons/md";

export const Choice = () => {
  const cards = [
    {
      title: "এক স্কিলে বহু || আয়ের সুযোগ",
      desc: "এমন স্কিল শিখুন, যা আপনাকে বিভিন্ন দিক থেকে আয় করার সুযোগ দেয়—ফ্রিল্যান্সিং হোক বা এজেন্সি, টেমপ্লেট হোক বা প্যাসিভ ইনকাম। ",
      points: [
        "ফ্রিল্যান্স ও এজেন্সি প্রজেক্ট",
        "টেমপ্লেট ও প্যাক  বিক্রি",
        "লং–টার্ম প্যাসিভ ইনকাম তৈরি",
      ],
    },
    {
      title: "চাহিদা বেশি,|| প্রতিযোগিতা কম",
      desc: "যে ক্রিয়েটিভ স্কিল খুব কম মানুষ সত্যিকারের প্রফেশনালভাবে পারে— সেটা মাস্টার করলে আপনাকে খুঁজবেই ক্লায়েন্ট। ",
      points: [
        "হাই–ভ্যালু নিস স্কিল",
        "ধারাবাহিক ক্লায়েন্ট ডিমান্ড",
        "সরাসরি প্রতিযোগিতা তুলনামূলক কম",
      ],
    },
    {
      title: "ছোট ছোট কাজেই || প্রিমিয়াম আয়",
      desc: "কম সময়ে, ছোট আকারের মোশন পিস দিয়েই অনেকসময় বড় ভ্যালু দেওয়া যায়। যার ফলে দামও বেশি, ডেলিভারিও দ্রুত।",
      points: [
        "হাই–ভ্যালু মোশন পিস",
        "দ্রুত ডেলিভারি টাইমলাইন",
        "প্রিমিয়াম প্রাইসিং সম্ভাবনা",
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
            <h1 className="text-3xl md:text-[40px] text-white font-medium ">
              কেন মোশন ডিজাইন
              <br className="hidden md:block" /> এখন ক্যারিয়ারের জন্য বেস্ট
              চয়েস?
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
                  <h2 className="text-white text-xl md:text-[28px] leading-8 font-medium">
                    {card.title.split("||").map((line, idx) => (
                      <span key={idx}>
                        {line.trim()}
                        <br />
                      </span>
                    ))}
                  </h2>
                </div>
                <p className="text-gray-400 text-md mb-5 leading-5">
                  {card.desc}
                </p>
              </div>

              <div className="space-y-2">
                {card.points.map((point, i) => (
                  <p
                    key={i}
                    className="flex gap-2 items-center text-white text-sm"
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
