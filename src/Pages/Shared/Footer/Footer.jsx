import React from 'react';

export const Footer = () => {
  // Data structure for easy mapping
  const sitemap = [
    { name: 'Work', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Resume', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const legalDetails = [
    { name: 'Policy Privacy', href: '#' },
    { name: 'Term & Conditions', href: '#' },
    { name: 'Refund and Cancellation', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ];

  const socialLinks = [
    { name: 'Behance', icon: 'Be', href: '#' }, // Using simple text for icon placeholder
    { name: 'Dribbble', icon: 'Dr', href: '#' }, // You'd replace these with actual icons (e.g., from Lucide, Heroicons, etc.)
    { name: 'Instagram', icon: 'In', href: '#' },
    { name: 'Twitter', icon: 'Tw', href: '#' },
  ];

  return (
    <footer className="bg-[#0a0612] text-white pt-20 pb-4 relative overflow-hidden">
      <div className="absolute w-48 h-28 -left-20 bottom-0 bg-[#4107a4] blur-[100px]" />
      <div className="absolute w-48 h-28 right-20 -top-32 bg-[#4107a4] blur-[100px]" />
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          {/* SITEMAP Section */}
          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-5 font-semibold">
              SITEMAP
            </h4>
            <ul className="space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:text-purple-400 transition duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT Section */}
          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-5 font-semibold">
              CONTACT
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello-designer@gerald.com"
                className="block text-white hover:text-purple-400 transition duration-300 text-sm"
              >
                hello-designer@gerald.com
              </a>
              <a
                href="tel:+011236548096"
                className="block text-white hover:text-purple-400 transition duration-300 text-sm"
              >
                +01 123 654 8096
              </a>
              <a
                href="tel:+011236548096"
                className="block text-white hover:text-purple-400 transition duration-300 text-sm"
              >
                +01 123 654 8096
              </a>
            </div>
          </div>

          {/* SOCIALS Section */}
          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-5 font-semibold">
              SOCIALS
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="flex items-center text-white hover:text-purple-400 transition duration-300 text-sm"
                  >
                    {/* Placeholder for Icon - Replace with an actual library icon */}
                    <span className="mr-2 text-lg font-bold">
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL DETAILS Section */}
          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-5 font-semibold">
              LEGAL DETAILS
            </h4>
            <ul className="space-y-3">
              {legalDetails.map((detail) => (
                <li key={detail.name}>
                  <a
                    href={detail.href}
                    className="text-white hover:text-purple-400 transition duration-300 text-sm"
                  >
                    {detail.name}
                  </a>
                </li>
              ))}
            </ul>
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
