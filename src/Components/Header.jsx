import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const serviceItems = [
  { title: 'Laughter Yoga for Personal Wellness', navigate: 'personal-wellness' },
  { title: 'Laughter Yoga for Corporate Wellness', navigate: 'corporate-wellness' },
  { title: 'Powercharge', navigate: 'powercharge' },
  { title: 'Laughter Yoga Leaders Certification', navigate: 'leaders-certification' },
  { title: '21 day mindfulness journey', navigate: 'mindfulness-journey' },
];


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="text-center w-full flex justify-center py-4">
      <nav className="w-[90%] max-w-[1330px] bg-pink-50 border border-pink-200 rounded-full px-4 md:px-8 flex items-center justify-between shadow-sm relative">
        {/* Logo */}
        <div className="text-3xl font-logo text-black py-3">
          <img src="logo-1.png" alt="logo" className="h-11 w-11" />
        </div>

        {/* Navigation Links (visible on md and above) */}
        <ul className="hidden sm:flex items-center font-sans gap-8 md:gap-10 text-lg md:text-xl font-medium py-3">
          <NavLink
            to="/"
            className="relative text-black cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:font-bold after:origin-left hover:after:origin-right"
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            className="relative text-black cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:font-bold after:origin-left hover:after:origin-right"
          >
            About Us
          </NavLink>

          <div className="relative" ref={servicesRef}>
            <span
              onClick={toggleServices}
              className="relative text-black cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:font-bold after:origin-left hover:after:origin-right"
            >
              Services
            </span>

            {isServicesOpen && (
              <div className="overflow-hidden absolute -left-20 lg:left-0 top-full mt-2 bg-[#FFF6EE] rounded-2xl shadow-lg w-[350px] lg:w-[450px] sm:p-5 lg:p-7 z-50 border border-pink-100 flex gap-8">
                {/* Left Column: Title and pink underline */}
                <div className="flex flex-col justify-start">
                  <h3 className="cursor-pointer text-base lg:text-xl font-semibold text-black">
                    Services
                  </h3>
                  <div className="h-[2px] w-[60px] lg:w-[80px] bg-pink-500 mt-1 rounded" />
                </div>

                {/* Right Column: Services List */}
                <ul className="space-y-4 flex-1 mt-2">
                  {serviceItems?.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.navigate}
                        className="block text-left text-sm lg:text-base text-black border-b border-black/30 pb-1 cursor-pointer hover:text-pink-600 transition"
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ul>

        {/* Contact Us Button */}
        <div className="hidden sm:block -mx-3 md:-mx-8">
          <Link
            to="/contact-us"
            className="bg-[#ff007f] hover:bg-[#e60073] text-white text-base md:text-lg font-normal px-6 md:px-8 py-[0.75rem] md:py-[18px] rounded-full border-[3px] border-white shadow-sm transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden absolute right-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-lg p-6 z-10 md:hidden">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <NavLink to="/" className="text-black hover:font-bold cursor-pointer">
                Home
              </NavLink>
              <NavLink to="/about-us" className="text-black hover:font-bold cursor-pointer">
                About Us
              </NavLink>
              <NavLink to="/services" className="text-black hover:font-bold cursor-pointer">
                Services
              </NavLink>
            </ul>
            <div className="mt-4">
              <Link
                to="contact-us"
                className="block bg-[#ff007f] hover:bg-[#e60073] text-white text-lg font-normal text-center px-6 py-3 rounded-full shadow-md transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
