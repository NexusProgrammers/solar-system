"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BsChatDotsFill } from "react-icons/bs";
import vibesEngergy from "./assets/vibes-energy.svg";
import quoteIcon from "./assets/quote-icon.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[100px] mt-3 px-6">
          <div className="flex justify-between items-center h-[72px]">
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-teal-600 focus:outline-none"
              >
                <RiMenu3Line className="h-8 w-8" />
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
                <Link href="/" className="text-gray-800 hover:text-teal-600">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-teal-600"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-800 hover:text-teal-600"
                >
                  What We Offer
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-800 hover:text-teal-600"
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-800 hover:text-teal-600"
                >
                  Blog
                </Link>
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
      <div
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
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
            <Link
              href="/"
              className="block text-xl font-medium text-gray-800 hover:text-teal-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-xl font-medium text-gray-800 hover:text-teal-600"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block text-xl font-medium text-gray-800 hover:text-teal-600"
            >
              What We Offer
            </Link>
            <Link
              href="/projects"
              className="block text-xl font-medium text-gray-800 hover:text-teal-600"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block text-xl font-medium text-gray-800 hover:text-teal-600"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
