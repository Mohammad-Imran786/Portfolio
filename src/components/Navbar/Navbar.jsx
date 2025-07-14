import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollWithOffset = (elem) => {
    const yCoordinate = elem.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const navItems = [
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    { to: "#projects", label: "Projects" },
    { to: "#experience", label: "Experience" }
  ];

  return (
    <nav className={`fixed top-0 w-full h-16 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md'
        : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">

        <div className="flex justify-center items-center">
          <HashLink smooth to="#top" scroll={scrollWithOffset}>
            <img
              src="My-logo.jpg"
              alt="Mohammad Imran"
              className="rounded-full w-12 h-12 object-cover object-center border-4 border-white shadow-custom cursor-pointer hover:border-green-300 hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </HashLink>
        </div>

        <ul className="hidden md:flex gap-16 text-zinc-400">
          {navItems.map((item) => (
            <li key={item.to}>
              <HashLink
                smooth
                to={item.to}
                scroll={scrollWithOffset}
                className="hover:text-zinc-600 cursor-pointer transition-colors duration-300 ease-in-out"
              >
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <HashLink
            smooth
            to="#contact"
            scroll={scrollWithOffset}
            className="bg-blue-400 hover:bg-blue-500 px-4 py-2 md:px-5 md:py-2 rounded-full text-white hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer text-sm md:text-base"
          >
            Contact Me
          </HashLink>

          <button
            className="md:hidden flex flex-col gap-1 p-1 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-black rounded"></div>
            <div className="w-4 h-0.5 bg-black rounded ml-auto"></div>
            <div className="w-5 h-0.5 bg-black rounded"></div>
          </button>
        </div>

        <div
          className={`absolute top-0 right-0 bg-black/80 backdrop-blur-sm h-[calc(100vh)] w-3/4 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl p-2"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          <ul className="flex flex-col items-center justify-center h-full text-white font-[ubuntu] text-xl gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <HashLink
                  smooth
                  to={item.to}
                  scroll={scrollWithOffset}
                  className="hover:text-green-500 cursor-pointer transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar