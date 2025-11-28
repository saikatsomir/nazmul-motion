import { useEffect, useRef, useState } from 'react';
import {
  FaBehance,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import aboutImg from '/nazmul.png';

export const About = () => {
  const faqRef = useRef(null);

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect(() => {
  //   document.title = ' Course Details | Nazmul Motion ';
  // }, []);

  const [open, setOpen] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      href: ' https://www.instagram.com/nazmul.motion',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/nazmul-hoque-motion-designer/',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      href: ' https://www.facebook.com/nazmul.motion/',
    },
    {
      name: 'Behance',
      icon: <FaBehance />,
      href: 'https://www.behance.net/nazmulhoque41',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      href: ' https://www.youtube.com/@nazmul.motion',
    },
    {
      name: 'Twitter',
      icon: <FaSquareXTwitter />,
      href: ' https://x.com/nazmulmotion',
    },
  ];

  const faqs = [
    {
      q: 'মোশন ডিজাইন কী?',
      a: 'মোশন ডিজাইন হলো গ্রাফিক্স, শেপ আর টাইপোগ্রাফিকে অ্যানিমেশনের মাধ্যমে “জীবন্ত” করে তোলার আর্ট। এর মাধ্যমে ভিজুয়াল স্টোরি তৈরি করা হয়, যা একদিকে নজর কাড়ে, অন্যদিকে আইডিয়াকে পরিষ্কারভাবে বুঝিয়ে বলতে সাহায্য করে।',
    },
    {
      q: 'শুরু করতে আমার কী কী লাগবে?',
      a: 'আপনার ফটোশপ এবং ইলাস্ট্রেটর সম্পর্কে বেসিক ধারণা থাকা ভালো। এছাড়া আপনার কম্পিউটারে সর্বশেষ ভার্সনের After Effects ইন্সটল করা থাকতে হবে। যদি After Effects ইন্সটল করা না থাকে বা সমস্যা হয়, তাহলে আমাদের সাথে যোগাযোগ করতে পারবেন। আপনার পিসি বা ল্যাপটপে কমপক্ষে ১৬ জিবি RAM এবং Core i5 বা সমমানের প্রসেসর থাকা প্রয়োজন।',
    },

    {
      q: 'মোশন ডিজাইন আর অ্যানিমেশন কি একই জিনিস?',
      a: 'দু’টোর মধ্যে সম্পর্ক আছে, কিন্তু এক নয়। মোশন ডিজাইন মূলত ব্র্যান্ডিং, বিজ্ঞাপন আর ইউআই-এর জন্য গ্রাফিক্স আর টাইপোগ্রাফিকে অ্যানিমেট করার দিকে বেশি ফোকাস করে। আর অ্যানিমেশন সাধারণত ক্যারেক্টার আর স্টোরি টেলিং–এর মাধ্যমে গল্প বলার জন্য ব্যবহার হয়। ',
    },
    {
      q: 'মোশন ডিজাইনের জন্য আপনি কোন সফটওয়্যারগুলো শেখান?',
      a: 'মূলত আমি Adobe After Effects আর Premiere Pro শেখাই। সঙ্গে প্রজেক্টের ধরন অনুযায়ী Illustrator, Photoshop আর কখনও Blender–এর মতো টুলও ব্যবহার করতে শিখবেন।',
    },
    {
      q: 'একদম নতুনরা কি সহজে মোশন ডিজাইন শিখতে পারবে?',
      a: 'অবশ্যই পারবে। আমি পুরো কোর্সটাই শুরু করি একদম বেসিক থেকে—কোর ডিজাইন প্রিন্সিপল আর সহজ অ্যানিমেশন দিয়ে। তারপর ধীরে ধীরে রিয়াল প্রজেক্টের মাধ্যমে আপনাকে কমপ্লেক্স মোশন টেকনিক পর্যন্ত নিয়ে যাব, যেন শুরু থেকেই সবকিছু ক্লিয়ার ও প্র্যাকটিক্যাল থাকে।',
    },
    {
      q: 'মোশন ডিজাইনে ভালো লেভেলে যেতে কত সময় লাগে?',
      a: 'নিয়মিত প্র্যাকটিস করলে প্রায় ৩–৬ মাসের মধ্যে আপনি প্রফেশনাল লেভেলের মোশন ডিজাইন তৈরি করতে পারবেন।',
    },
    {
      q: 'আপনি কি লাইভ সেশন নাকি রেকর্ডেড ভিডিও দিয়ে শেখান?',
      a: 'আপাতত লাইভ ক্লাস। সাজানো স্ট্রাকচার্ড লাইভ লেসনের সঙ্গে থাকবে লাইভ মেন্টরশিপ সেশন, যেখানে হ্যান্ডস–অন গাইডেন্স আর ডিরেক্ট ফিডব্যাক পাবেন।',
    },
    {
      q: 'আমি কি প্রজেক্ট–বেইসড ট্রেইনিং পাবো?',
      a: 'হ্যাঁ, পুরো কোর্সটাই প্রজেক্ট–বেইসড। প্রতিটি মডিউলেই থাকবে প্র্যাকটিক্যাল প্রজেক্ট—যেমন লোগো অ্যানিমেশন, অ্যাড ট্রানজিশন, এক্সপ্লেইনার ভিডিও আর UI মোশন প্রোটোটাইপ, যাতে শিখতে শিখতেই রিয়াল কাজ তৈরি করতে পারেন।',
    },
  ];

  const fullText = `আমি একজন মোশন ডিজাইনার এবং Motionsbay–এর ফাউন্ডার। গত ৯+ বছরে হাজার হাজার আইডিয়াকে হাই–কনভার্টিং ভিজুয়ালে পরিণত করে কাজ করেছি বিশ্বজুড়ে ক্লায়েন্টদের জন্য।
ফাইভারে টপ রেটেড ও প্রো ভেরিফায়েড সেলার হিসেবে এখন পর্যন্ত প্রায় ৪,০০০+ প্রজেক্টে কাজ করে আয় করেছি প্রায় $৩৬৫,৫৫৬+ ডলার; আর আমার নিজের স্টুডিও ও কোর্সের মাধ্যমে করেছি আরও ৩৫০+ প্রজেক্ট এবং প্রায় $৬৫,০০০+ ডলার ইনকাম।
এই কোর্সে আমি আমার প্রতিদিনের কাজের ভেতরের ঠিক সেই মোশন ডিজাইন প্রসেস, সিস্টেম আর “লুকানো টেকনিক”গুলোই খুলে দিচ্ছি—যাতে আপনি   সরাসরি এগুলো নিজের কাজে লাগিয়ে আপনার  নিজের সফলতার গল্প বানাতে পারেন
`;

  const words = fullText.split(' ');
  const shortText = words.slice(0, 30).join(' ') + '...';

  const toggleFAQ = (index) => setOpen(open === index ? null : index);

  return (
    <div
      className="w-full text-white bg-[#0e061c] md:px-0 relative"
      style={{
        background:
          'linear-gradient(0deg,rgba(10, 6, 18, 1)0%, rgba(17, 7, 38, 1) 50%, rgba(10, 6, 18, 1) 100%)',
      }}
    >
      <div className="absolute w-[500px] h-[500px] hidden md:block bg-[#4107a4] opacity-15 top-0 right-0 blur-[100px] z-10" />
      <div className="absolute w-[500px] h-[500px] hidden md:block bg-[#4107a4] opacity-15 top-0 left-0 blur-[100px] z-10" />

      <div className="mx-auto relative pt-40 md:pt-62 px-3 overflow-hidden">
        <div className="absolute w-[500px]h-[500px] bg-[#4107a4] opacity-25 -top-10 -right-10 blur-[100px] z-50" />

        <section className="flex max-w-[1240px] mx-auto relative flex-col md:flex-row justify-between items-center">
          <div className="w-full order-2 md:order-1 md:w-[70%] z-30">
            <h2 className="text-3xl text-center md:text-left md:text-[50px] mb-3 md:mb-5 font-medium md:leading-14">
              ৪,০০০+ প্রজেক্টের অভিজ্ঞতা থেকে <br /> গড়া মোশন ডিজাইন সিস্টেম—{' '}
              <br />
              <span className="text-[#ef9b3c]">
                এবার আপনার ক্যারিয়ারের জন্য।
              </span>
            </h2>

            <div className="w-full md:w-[85%] mb-5">
              <span className=" w-full text-center md:text-left text-gray-400 text-lg  md:text-xl mb-5">
                {showMore ? fullText : shortText}
              </span>
              <span
                onClick={() => setShowMore(!showMore)}
                className="text-blue-500 underline mt-2 cursor-pointer text-sm ml-2"
              >
                {showMore ? 'Show Less' : 'Show More'}
              </span>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <button
                onClick={scrollToFaq}
                style={{
                  background:
                    'linear-gradient(-90deg,rgba(82, 44, 158, 1)  0%, rgba(33, 13, 87, 1) 75%)',
                }}
                className="w-60 h-12 rounded-full text-xl font-medium cursor-pointer tracking-[10px]"
              >
                QNA
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-start mt-6 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-white text-xl hover:bg-[#ef9b3c] transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-80 mx-auto order-1 mb-10 md:mb-0 md:order-2 md:w-[600px] md:mt-0">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl w-80 md:w-[600px] drop-shadow-[2px_1px_1px_#4107a4]"
            />
          </div>
        </section>

        <section className="px-6 w-full md:px-10 py-5 md:bg-[#4107a4]/30 border rounded-lg border-[#4107a4] mt-10 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '০৯+', label: 'বছরের অভিজ্ঞতা' },
              { num: '৪০০০+', label: 'সম্পন্ন প্রজেক্ট' },
              { num: '৯৮%', label: 'ক্লায়েন্ট সন্তুষ্টি' },
              { num: '৫০০০+', label: 'গ্লোবাল ক্লায়েন্ট' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 backdrop-blur-md bg-[#4107a4]/10 md:bg-[#4107a4]/2 rounded-lg"
              >
                <h3 className="text-3xl font-bold text-[#ef9b3c]">
                  {item.num}
                </h3>
                <p className="text-gray-300 ">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-[#110429] px-3 md:px-0" ref={faqRef}>
        <section className="max-w-[1240px] w-full mx-auto py-40">
          <h2 className="text-3xl md:text-5xl font-medium text-center mb-10">
            কোর্স নিয়ে আপনার গুরুত্বপূর্ণ প্রশ্নগুলোর উত্তর
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                onClick={() => toggleFAQ(i)}
                className="cursor-pointer border border-[#4107a4]/40 rounded-md p-5 bg-[#4107a4]/10 transition-all hover:border-[#4107a4]"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl">{faq.q}</h3>
                  <span className="text-[#ef9b3c] text-3xl">
                    {open === i ? '−' : '+'}
                  </span>
                </div>

                <div
                  className={`overflow-hidden text-gray-400 text-base mt-2 transition-all duration-300 ${
                    open === i
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="text-center py-40 relative overflow-hidden">
        <h2 className="text-6xl md:text-7xl font-bold mb-5 tracking-wide text-[#FFB142]">
          <span className="text-[#665AFF]">Nazmul</span> Motion
        </h2>

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-white text-xl hover:bg-purple-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
