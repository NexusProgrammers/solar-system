/* eslint-disable react/no-unescaped-entities */
import React from "react";
import vibesEngeryFooter from "./assets/vibes-energy-footer.svg";
import circleYellowIcon from "./assets/circle-yellow-footer-icon.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#202020] ">
      <div className="flex items-center justify-center border-b-[1px] border-[#FFFFFF33] mb-12">
        <div className=" text-white w-full flex flex-col md:flex-row justify-between max-w-7xl items-start px-4">
          <div className="h-full">
            <div className="max-w-xl md:border-r-[1px] border-b-[1px] border-[#FFFFFF33] h-full py-16">
              <div className="-ml-4">
                <Image src={vibesEngeryFooter} alt="vibesEngeryFooter" />
              </div>
              <p>
                Vibes Energy Solar is Manitoba's certified solar experts. Find
                out your potential savings with Solar Power Solutions for all
                home and commercial properties with Vibes. We are Manitoba’s
                solar power solutions provider for all home & business sizes. We
                offer efficient and advanced solutions for energy requirements
                for yesterday, today, and tomorrow. Servicing all of Manitoba &
                beyond!
              </p>
            </div>
            <div className="py-4 space-y-4 hidden md:block md:border-r-[1px] border-[#FFFFFF33]">
              <p className="space-x-4">
                <span className="font-bold text-lg text-[#FFFFFF]">
                  Address:
                </span>
                <span>140 Bessboro St, Winnipeg, MB R3P 2K9, Canada</span>
              </p>
              <p className="space-x-4">
                <span className="font-bold text-lg text-[#FFFFFF]">Phone:</span>
                <span>204-298-7247</span>
              </p>
              <p className="space-x-4">
                <span className="font-bold text-lg text-[#FFFFFF]">Email:</span>
                <span>info@vibesenergysolar.com</span>
              </p>
            </div>
          </div>
          <div className="max-w-2xl flex flex-col md:py-24 justify-end">
            <div className="flex items-center border-b border-[gray-600] pb-2 mt-1 sm:pb-4 overflow-hidden">
              <label
                htmlFor="email"
                className="font-normal whitespace-nowrap text-sm sm:text-lg md:text-xl lg:text-3xl text-[#FFFFFF] pb-2"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                className="flex-grow bg-[#202020] text-white placeholder-gray-400 focus:outline-none"
              />
              <Image
                src={circleYellowIcon}
                alt="circleYellowIcon"
                className="cursor-pointer"
              />
            </div>
            <div className="py-4">
              <div className="flex flex-wrap gap-8">
                <div>
                  <h2 className="text-lg font-semibold mb-1 text-[#1AAC98] cursor-pointer">
                    Quick Links
                  </h2>
                  <ul className="text-sm space-y-4">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Projects</li>
                    <li>Contact Us</li>
                    <li>Get a Free Quote</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-1 text-[#1AAC98] cursor-pointer">
                    Services
                  </h2>
                  <ul className="text-sm space-y-4">
                    <li>Residential Solar</li>
                    <li>Commercial Solar</li>
                    <li>Industrial Solar</li>
                    <li>Agricultural Solar</li>
                    <li>EV Charger Installation</li>
                    <li>Off-Grid Solutions</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-1 text-[#1AAC98] cursor-pointer">
                    Resources
                  </h2>
                  <ul className="text-sm space-y-4">
                    <li>Blog</li>
                    <li>Solar Energy FAQs</li>
                    <li>Case Studies</li>
                    <li>Maintenance Tips</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 md:hidden space-y-2 md:border-r-[1px] border-[#FFFFFF33] text-white px-4">
        <p className="space-x-4">
          <span className="font-bold text-lg text-[#FFFFFF]">Address:</span>
          <span>140 Bessboro St, Winnipeg, MB R3P 2K9, Canada</span>
        </p>
        <p className="space-x-4">
          <span className="font-bold text-lg text-[#FFFFFF]">Phone:</span>
          <span>204-298-7247</span>
        </p>
        <p className="space-x-4">
          <span className="font-bold text-lg text-[#FFFFFF]">Email:</span>
          <span>info@vibesenergysolar.com</span>
        </p>
      </div>
      <div className="flex items-center justify-center mb-12 px-4">
        <div className="max-w-5xl text-white flex flex-col items-center justify-center gap-6">
          <p className="font-normal text-sm text-[#FFFFFF]">
            Vibes Energy is based on Treaty 1 land, and the homeland of the
            Métis Nation. We practice our trade on Treaty 1,2,3,4, and 5 land,
            traditional territory of the Anishinaabeg, Cree, Oji-Cree, Dakota,
            and Dene Peoples, and on the homeland of the Métis Nation.
          </p>
          <div className="space-y-4 text-center">
            <p className="font-normal text-sm text-[#FFFFFF]">
              Copyright © 2025 Vibes Energy Inc. All rights reserved.
            </p>
            <p className="font-normal text-sm text-[#EAC26A]">
              Designed & Built by Jagassar Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
