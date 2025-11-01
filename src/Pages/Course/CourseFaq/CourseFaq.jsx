import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const CourseFaq = () => {
  const faqs = [
    {
      title: 'After Effects Basics',
      subtitle:
        'Learn the basics first so that you understand how After effects works',
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
      title: 'Social Media Ads Motion',
      subtitle: 'Design and animate social media ads that engage the audience.',
      points: [
        'Design in illustrator with references',
        'Import from illustrator',
        'Animate in After effects',
        'Render and upload on social media',
      ],
    },
    {
      title: 'Lottie & Web Motion',
      subtitle:
        'Bring your work to websites and apps with code-ready animations.',
      points: [
        'Download vector icons',
        'Refine it in illustrator',
        'Animate in After effects with a seamless loop',
        'Export  JSON file from bodymoving plugin',
      ],
    },
    {
      title: 'App or Web Showcase animation',
      subtitle:
        'Take screenshots from clients and turn it into an amazing motion showcase',
      points: [
        '3D Camera technique',
        'Transitions',
        'Parallax motion',
        'Sync with music beat',
      ],
    },
    {
      title: 'Motion for Video Editing',
      subtitle: 'Learn the amazing 3D animation technique like Iman gadzhi',
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
      title: 'Explainer Video',
      subtitle: 'Turn stories into a compelling motion that sells ideas.',
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
      title: 'SaaS Explainers',
      subtitle: 'Animate user flows, dashboards, and product journeys.',
      points: [
        'Recreate screenshots from a dashboard in illustrator',
        'Gradients, glow, glass effects and futuristic style in After effects',
        '3D style movements',
        'Cursor animation',
      ],
    },
    {
      title: 'Logo Animation',
      subtitle: 'Learn to animate brand identities that feel alive',
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
      title: 'Tips for freelancing or passive income through motion',
      subtitle: '',
      points: [
        'Envato',
        'Fiverr',
        'Instagram',
        'Pricing structure',
        'Outreaching for clients',
      ],
    },
    {
      title: 'After finishing this course, you will be able to create',
      subtitle:
        'You will have a strong ready portfolio to show your clients and starts earning',
      points: [
        'Tooling you’ll use',
        'After Effects',
        'Illustrator',
        'Figma',
        'Bodymovin/Lottie',
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className=" -mt-10 z-50"
      style={{
        background:
          'linear-gradient(0deg, rgba(10,6,18,1) 40%, rgba(17,6,39,1) 100%)',
      }}
    >
      <div className="max-w-[1340px] mx-auto text-white border border-gray-800 py-16 rounded-3xl z-10 bg-[#0a0612]/30 ">
        <h1
          className="text-4xl sm:text-5xl font-semibold mb-10 z-50 text-center"
          style={{ fontFamily: 'Bricolage Grotesque' }}
        >
          Course Duration: <span className="text-purple-400">3–4 months</span>
        </h1>

        <div className="space-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" backdrop-blur-md rounded-2xl border border-gray-900 overflow-hidden "
            >
              <button
                className="w-full flex justify-between items-center px-6 py-6 text-left transition-colors duration-300 cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div>
                  <h2 className="text-2xl font-semibold">{faq.title}</h2>
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
};
