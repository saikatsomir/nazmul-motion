import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

export const CourseFaq2 = () => {
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
  ];

  const [expanded, setExpanded] = useState(null);
  const containerRef = useRef(null);

  return (
    <div
      className=" py-24 px-6 sm:px-12 relative z-45"
      style={{
        background:
          'linear-gradient(180deg, rgba(10,6,18,1) 0%, rgba(17,6,39,1) 50%, rgba(10,6,18,1) 100%)',
      }}
    >
      <div
        className="max-w-[1340px] mx-auto text-white relative z-10"
        ref={containerRef}
      >
        <h1 className="text-4xl text-center sm:text-5xl font-semibold mb-12">
          Course Duration <br />
          <span className="text-purple-400">3–4 months</span>
        </h1>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 overflow-visible">
          {faqs.map((faq, index) => {
            const isOpen = expanded === index;
            const visiblePoints = isOpen ? faq.points : faq.points.slice(0, 6);

            return (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-[#130c23] min-h-[400px] border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? 'absolute top-0 left-0 w-full z-50'
                      : 'relative z-0'
                  }`}
                  style={{
                    boxShadow: isOpen
                      ? '0px 10px 40px rgba(128,0,255,0.4)'
                      : 'none',
                  }}
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <motion.div
                    animate={{
                      scale: isOpen ? 1.02 : 1,
                      height: 'auto',
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <h2 className="text-2xl font-semibold mb-2 text-purple-300">
                        {faq.title}
                      </h2>
                      <p className="text-gray-400 text-lg mb-4">
                        {faq.subtitle}
                      </p>

                      <motion.ul
                        className="space-y-1 text-gray-300 text-sm leading-relaxed"
                        initial={false}
                      >
                        {visiblePoints.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex text-base items-start gap-2"
                          >
                            <span className="flex gap-2 items-center">
                              <Dot /> {point}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {faq.points.length > 6 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors flex justify-start "
                      >
                        {isOpen ? 'See Less ▲' : 'See More ▼'}
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
