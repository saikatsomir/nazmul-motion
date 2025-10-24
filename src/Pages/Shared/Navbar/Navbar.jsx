import { useState, useEffect } from 'react';
import logo from '/logo.png';

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll to hide/show navbar
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed z-50 h-28 border-b-[0.5px] border-gray-500 bg-black/5 backdrop-blur-xl transition-transform duration-500 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1340px] mx-auto flex justify-between items-center h-28 px-4">
        {/* Logo */}
        <div className="h-[70px] w-[20%] overflow-hidden">
          <img src={logo} alt="Logo" className="w-96 object-cover h-[70px] " />
        </div>

        {/* Menu for large screens */}
        <div className="hidden md:flex w-[60%] justify-center gap-10 items-center text-lg font-extralight text-white">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/course-details">Course Details</a>
          <a href="/about-me">About Me</a>
        </div>

        {/* Button / Hamburger */}
        <div className="w-[20%] flex justify-end items-center">
          <button
            style={{
              background:
                'linear-gradient(90deg,rgba(135, 1, 96, 1) 0%, rgba(99, 57, 183, 1) 65%)',
            }}
            className="text-white font-medium text-lg cursor-pointer w-44 h-12 rounded-full gap-3"
          >
            Enroll Now
          </button>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-28 left-0 w-full bg-white/10 backdrop-blur-xl flex flex-col items-center gap-6 py-6 md:hidden text-white font-light">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/course-details">Course Details</a>
            <a href="/about-me">About Me</a>
            <button className="text-white border w-36 h-12 rounded-md">
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
