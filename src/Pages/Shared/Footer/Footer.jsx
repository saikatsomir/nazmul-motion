import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaBehance,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
export const Footer = () => {
  // Data structure for easy mapping
  const sitemap = [
    { name: 'Home', href: '/' },
    { name: 'Course Details', href: '/course-details' },
    { name: 'About Me', href: '/about-me' },
  ];

  const legalDetails = [
    { name: 'Policy Privacy', href: '/privacy' },
    { name: 'Term & Conditions', href: '/terms' },
  ];

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

  return (
    <footer className="bg-[#0a0612] text-white pt-20 pb-4 relative overflow-hidden">
      <div className="absolute w-48 h-28 -left-20 bottom-0 bg-[#4107a4] blur-[100px]" />
      <div className="absolute w-48 h-28 right-20 -top-32 bg-[#4107a4] blur-[100px]" />
      <div className="max-w-[1340px]  mx-auto ">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 px-4 md:px-0 gap-10 md:gap-0 md:grid-cols-4  pb-10 border-b border-gray-800">
          {/* SITEMAP Section */}
          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-lg mb-2 md:mb-5 font-semibold">
              SITEMAP
            </h4>
            <ul className="md:space-y-3 space-y-1">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:text-[#ef9b3c] transition duration-300 text-lg"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT Section */}
          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-lg mb-2 md:mb-5 font-semibold">
              CONTACT
            </h4>
            <div className="md:space-y-3 space-y-1">
              <a
                href="mailto:hello-designer@gerald.com"
                className="block text-white hover:text-[#ef9b3c] transition duration-300 text-lg"
              >
                nazmulmotionbd@gmail.com
              </a>
              <a
                href="tel:+011236548096"
                className=" text-white hover:text-[#ef9b3c] transition duration-300 text-lg flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          {/* LEGAL DETAILS Section */}
          <div className="">
            <h4 className="text-gray-400 uppercase tracking-widest text-lg mb-2 md:mb-5 font-semibold">
              LEGAL DETAILS
            </h4>
            <ul className="md:space-y-3 space-y-1">
              {legalDetails.map((detail) => (
                <li key={detail.name}>
                  <a
                    href={detail.href}
                    className="text-white hover:text-[#ef9b3c] transition duration-300 text-lg"
                  >
                    {detail.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* SOCIALS Section */}
          <div className=" ml-0 md:-ml-5">
            <h4 className="text-gray-400  uppercase tracking-widest text-lg mb-2 md:mb-5 font-semibold">
              SOCIALS
            </h4>

            <div className="flex items-center flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 flex  items-center justify-center rounded-full border border-gray-600 
                   text-white text-xl hover:bg-purple-500 hover:border-purple-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Scroll-to-Top */}
        <div className="flex justify-center items-center pt-6">
          <p className="text-gray-400 text-xs sm:text-lg">
            &copy; 2024 All rights reserved by NazmulMotion
          </p>

          {/* Scroll-to-Top Button */}
          {/*  */}
        </div>
      </div>
    </footer>
  );
};
