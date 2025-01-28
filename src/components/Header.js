"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";
import vibesEngergy from "./assets/vibes-energy.svg";
import quoteIcon from "./assets/quote-icon.svg";
import navbarIcon from "./assets/nav-icon.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full z-40 fixed top-0 transition-all duration-300 ease-in-out ${
          isSticky
            ? "bg-white/80 backdrop-blur-sm shadow-md"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div
            className={`${
              isSticky ? "" : "bg-white/80 rounded-[100px] mt-3 px-6 shadow"
            }`}
          >
            <div className="flex justify-between items-center h-[60px] md:h-[72px]">
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-teal-600 focus:outline-none"
                >
                  <Image src={navbarIcon} alt="navbarIcon" />
                </button>
              </div>
              <div className="flex-shrink-0 relative w-[140px] lg:w-[249px] h-auto">
                <Image
                  src={vibesEngergy}
                  alt="Vibes Energy Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                <div className="flex space-x-8">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/services", label: "What We Offer" },
                    { href: "/projects", label: "Projects" },
                    { href: "/blog", label: "Blog" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-800 hover:text-teal-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="lg:hidden">
                  <button className="bg-[#1AAC98] p-3 rounded-full hover:bg-teal-600 transition-colors">
                    <Image src={quoteIcon} alt="quoteIcon" />
                  </button>
                </div>
                <div className="hidden lg:block">
                  <button className="bg-[#1AAC98] w-[176px] h-[51px] text-white rounded-full hover:bg-teal-600 transition-colors">
                    Request A Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-teal-600 focus:outline-none"
            >
              <RiCloseLine className="h-8 w-8" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "What We Offer" },
              { href: "/projects", label: "Projects" },
              { href: "/blog", label: "Blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="block text-xl font-medium text-gray-800 hover:text-teal-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
