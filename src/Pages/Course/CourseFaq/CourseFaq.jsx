import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const CourseFaq = forwardRef((props, ref) => {
  const faqs = [
    {
      title: 'আফটার ইফেক্টসের বেসিক',
      subtitle:
        'শুরুতে আফটার ইফেক্টস সফটওয়্যার কীভাবে কাজ করে, তার বেসিক ফাংশন, ইন্টারফেস আর ওয়ার্কফ্লো একদম পরিষ্কারভাবে শিখবেন।',
      points: [
        'After Effects Interface - Preferences Settings  & Custom Workspaces',
        'Install scripts and organize workspace',
        'Comp size, resolution and settings',
        'Organize projects',
        'Effects control',
        '8 bit or 16 bit color?',
        'Frames & Seconds on the Timeline',
        'The Work Area: What is it for?',
        'Safe naming',
        'Importing files from illustrator',
        'Shape Layers, paths and masks',
        'Fill, stroke, trim paths, merge paths',
        'Solid layer',
        'Adjustment layer',
        '3D layer and it’s options',
        'Track mattes, Alpha mattes, silhouette alpha.',
        'Colors, gradient',
        'Text layers and properties, converting texts into shapes',
        'Anchors, Parenting, Nulls, Precomps',
        'Layer style',
        'Time remap',
        'Position/scale/rotation/opacity',
        'When the Footage goes Missing - Relinking Footage',
        'After Effects Keyboard Shortcuts',
        'Preview option',
        'Toggle mask or shape path visibility',
        'Region of interest',
        'Fast preview',
        'Resolution up and down',
        'Grid and guide option',
        'Purge memory',
        'Save the animation before work',
        "How to animate layer's properties",
        'How to sequence layers',
        'Value Graph vs. Speed Graph',
        'Smooth animation and easing technique',
        'Arcs, overshoot, settle, anticipation, follow-through',
        'Creating a 5 sec texts animation',
        'Render your work and upload to Social Media',
      ],
    },
    {
      title: 'সোশ্যাল মিডিয়া বিজ্ঞাপনের মোশন',
      subtitle: 'ফেসবুক, ইনস্টাগ্রামসহ সোশ্যাল মিডিয়ার জন্য আকর্ষণীয়, স্ক্রল থামিয়ে দেওয়ার মতো মোশন বিজ্ঞাপন ডিজাইন ও অ্যানিমেট করবেন।',
      points: [
        'Design in illustrator with references',
        'Import from illustrator',
        'Animate in After effects',
        'Render and upload on social media',
      ],
    },
    {
      title: 'লটটি  ও ওয়েব মোশন',
      subtitle:
        'ওয়েবসাইট ও অ্যাপে ব্যবহারযোগ্য লোটি অ্যানিমেশনসহ কোড–রেডি মোশন কীভাবে তৈরি করতে হয়, তা প্র্যাকটিক্যালভাবে শিখবেন।',
      points: [
        'Download vector icons',
        'Refine it in illustrator',
        'Animate in After effects with a seamless loop',
        'Export  JSON file from bodymoving plugin',
      ],
    },
    {
      title: 'অ্যাপ ও ওয়েব শোকেস অ্যানিমেশন',
      subtitle:
        'ক্লায়েন্টের দেওয়া স্ক্রিনশটকে প্রিমিয়াম লুকের অ্যাপ/ওয়েব শোকেস ভিডিওতে রূপ দেওয়ার সম্পূর্ণ প্রসেস শিখবেন।',
      points: [
        '3D Camera technique',
        'Transitions',
        'Parallax motion',
        'Sync with music beat',
      ],
    },
    {
      title: 'ভিডিও এডিটিংয়ের জন্য মোশন',
      subtitle: 'ভিডিও এডিটের ভেতরে মোশন যোগ করে কীভাবে আরও সিনেম্যাটিক ও ডায়নামিক লুক আনা যায়, সেই টেকনিকগুলো শিখবেন।',
      points: [
        'Design in illustrator',
        'Premiere pro and After Effects workflow',
        'Learn advanced 3D motion design',
        'Camera tracking',
        'Transitions',
        'Sync with Voice',
      ],
    },
    {
      title: 'এক্সপ্লেইনার ভিডিও',
      subtitle: 'জটিল আইডিয়াকে ছোট ছোট ভিজ্যুয়াল সিনে ভেঙে কীভাবে প্রফেশনাল এক্সপ্লেইনার ভিডিও বানাতে হয়, তা স্টেপ–বাই–স্টেপ শিখবেন।',
      points: [
        'Script, Voice over and Structure',
        '30s 3-act explainer video',
        'Finding references',
        'Idea generation',
        'Design in Illustrator',
        'Text motion',
        'Shape driven motion  transitions',
      ],
    },
    {
      title: 'সাস প্রোডাক্ট এক্সপ্লেইনার',
      subtitle: 'ড্যাশবোর্ড, ইউজার ফ্লো, গ্রাফ, স্ট্যাটস—এই সবকিছুকে পরিষ্কার ও ঝরঝরে মোশনে উপস্থাপন করা শিখবেন, যা SaaS প্রোডাক্টের জন্য খুব দরকারি।',
      points: [
        'Recreate screenshots from a dashboard in illustrator',
        'Gradients, glow, glass effects and futuristic style in After effects',
        '3D style movements',
        'Cursor animation',
      ],
    },
    {
      title: 'লোগো অ্যানিমেশন',
      subtitle: 'ব্র্যান্ড আইডেন্টিটিকে “অ্যালাইভ” ফিল করানোর মতো প্রিমিয়াম লোগো অ্যানিমেশন কনসেপ্ট ও টেকনিক শিখবেন।',
      points: [
        'Take a logo and suitable for animation in illustrator',
        'Generate an idea for the logo animation',
        'Morphing technique',
        'Text letter written animation',
        'More text animations for different logos',
        'How to make a continuous motion',
        'How to save a source file without missing the files',
        'How to build a portfolio for motion design',
        'SFX/music choices',
        'Pacing trims',
        'Cut 20–40s reel from your best shots.',
      ],
    },
    {
      title: 'এক্সক্লুসিভ টিপস',
      subtitle: 'ফ্রিল্যান্সিং, প্রাইসিং, ক্লায়েন্ট হ্যান্ডলিং এবং প্যাসিভ ইনকামের জন্য আলাদা এক্সক্লুসিভ গাইডলাইন ও টিপস পাবেন।',
      points: [
        'Envato',
        'Fiverr',
        'Instagram',
        'Pricing structure',
        'Outreaching for clients',
      ],
    },
    {
      title: 'কোর্স শেষে যা পাবেন',
      subtitle:
        'কোর্স শেষে আপনার হাতে থাকবে শক্তিশালী পোর্টফোলিও এবং রিয়াল ক্লায়েন্ট প্রজেক্ট শুরু করার মতো কনফিডেন্স ও দক্ষতা।',
      points: [
        '30 sec Explainer video',
        '20 sec SaaS explainer',
        '15 sec Social media ads',
        '30 sec App showcase animation',
        '20 sec Motion for video editing',
        '3 Logo animations',
      ],
    },
    {
      title: 'যে টুলগুলো ব্যবহার করবেন',
      subtitle: 'পুরো কোর্স জুড়ে যে সফটওয়্যার, প্লাগইন ও টুল ব্যবহার করা হবে, সেগুলোর জন্য আলাদা গাইডেন্স ও প্র্যাকটিক্যাল ওয়ার্কফ্লো শিখবেন।',
      points: ['After Effects', 'Illustrator', 'Figma', 'Bodymovin/Lottie'],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      ref={ref}
      className="  -mt-10 pb-20 md:pb-32 z-50 px-5 md:px-0"
      style={{
        background:
          'linear-gradient(0deg, rgba(10,6,18,1) 40%, rgba(17,6,39,1) 100%)',
      }}
    >
      <div className="max-w-[1340px] mx-auto text-white md:border border-[#29036f] py-16 rounded-3xl z-10 md:bg-[#0a0612]/30 ">
        <h1
          className="text-4xl sm:text-5xl font-medium mb-10 z-50 text-center"
          style={{ fontFamily: 'Bricolage Grotesque' }}
        >
          কোর্সের সময়কাল: <span className="text-purple-400">৩–৪ মাস</span>
        </h1>

        <div className="space-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" backdrop-blur-md rounded-2xl border border-[#1c0150] overflow-hidden "
            >
              <button
                className="w-full flex justify-between items-center px-6 py-6 text-left transition-colors duration-300 cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div>
                  <h2 className="text-2xl ">{faq.title}</h2>
                  <p className="text-base text-gray-400">{faq.subtitle}</p>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-300" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                      {faq.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-purple-400 mt-1.5">•</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
