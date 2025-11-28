import { useState, useEffect } from 'react';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const dropdownAnim = {
  hidden: { opacity: 0, y: 10, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto' },
};
const linkHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    color: '#ef9b3c',
    transition: { type: 'spring', stiffness: 300 },
  },
};
export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    const token = localStorage.getItem('user');
    // console.log('Navbar - token:', token);
    setIsLoggedIn(!!token);
  }, []);

  const controlNavbar = () => {
    if (window.scrollY <= 150) {
      setShow(true);
    } else if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed z-50 h-28 border-b-[0.5px] border-gray-500 bg-black/5 backdrop-blur-xl transition-transform duration-500 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1340px]  mx-auto flex justify-between items-center h-28 px-4 md:px-0">
        {/* Logo */}
        <div
          className="h-[70px] flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="Logo" className="object-cover h-[70px]" />
          <h1 className="text-[#ef9b3c] text-2xl leading-6 font-bold">
            <span className="text-white">Nazmul</span> <br /> Motion
          </h1>
        </div>

        {/* Menu for large screens */}
        <div className="hidden md:flex w-[60%] justify-center gap-10 items-center text-lg font-extralight text-white">
          <motion.div
            // variants={linkHover}
            initial="initial"
            whileHover="hover"
            className="relative transition-transform duration-200 hover:scale-110 hover:text-[#ef9b3c]"
          >
            <Link
              to="/"
              className="text-white hover:text-[#ef9b3c] duration-200 "
            >
              Home
            </Link>
            <motion.span
              className="absolute left-0 bottom-[-3px] h-0.5 w-full bg-[#ef9b3c] origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Course Details */}
          <motion.div
            // variants={linkHover}
            // initial="initial"
            // whileHover="hover"
            className="relative transition-transform duration-200 hover:scale-110 "
          >
            <Link
              to="/course-details"
              className="text-white hover:text-[#ef9b3c] duration-200"
            >
              Course Details
            </Link>
            <motion.span
              className="absolute left-0 bottom-[-3px] h-0.5 w-full bg-[#ef9b3c]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Portfolio Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <motion.button
              className="text-white relative cursor-pointer hover:text-[#ef9b3c] duration-200 hover:scale-110"
              // variants={linkHover}
              initial="initial"
              whileHover="hover"
            >
              Portfolio
              <motion.span
                className="absolute left-0 bottom-[-3px] h-0.5 w-full bg-[#ef9b3c]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            <AnimatePresence>
              {open && (
                <motion.div
                  variants={dropdownAnim}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute left-0 w-48 bg-black/60 backdrop-blur p-3 rounded-md shadow-lg border border-white/10"
                >
                  <ul className="space-y-2">
                    {socialLinks.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.15 }}
                        whileHover={{ x: 6, scale: 1.05, color: '#ef9b3c' }}
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" text-white text-xl flex items-center gap-2 hover:text-[#ef9b3c] duration-200"
                        >
                          {item.icon} {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Me */}
          <motion.div
            // variants={linkHover}
            initial="initial"
            whileHover="hover"
            className="relative transition-transform duration-200 hover:scale-110 hover:text-[#ef9b3c]"
          >
            <Link
              to="/about-me"
              className="text-white duration-200 hover:text-[#ef9b3c]"
            >
              About Me
            </Link>
            <motion.span
              className="absolute left-0 bottom-[-3px] h-0.5 w-full bg-[#ef9b3c]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </div>

        {/* Right Side: Button + Mobile Hamburger */}
        <div className="flex justify-end items-center gap-2">
          {/* Hide button on small devices */}
          <button
            onClick={() => navigate(isLoggedIn ? '/dashboard' : '/login')}
            style={{
              background:
                'linear-gradient(-90deg,rgba(251, 179, 95, 1) 15%, rgba(107, 91, 248, 1) 82%)',
            }}
            className="hidden md:block text-white font-medium text-lg cursor-pointer w-44 h-12 rounded-full gap-3"
          >
            {isLoggedIn ? 'Dashboard' : 'Log In'}
          </button>

          {/* Hamburger Icon (Small Devices) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-28 left-0 w-full bg-black/80 backdrop-blur-lg flex flex-col items-center gap-6 py-6 md:hidden text-white font-light transition-all">
            <Link to="/">Home</Link>
            <Link to="/course-details">Course Details</Link>
            <Link to="/about-me">About Me</Link>

            <button
              onClick={() => navigate(isLoggedIn ? '/dashboard' : '/login')}
              className="text-white border w-36 h-12 rounded-md"
            >
              {isLoggedIn ? 'Dashboard' : 'Enroll Now'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
