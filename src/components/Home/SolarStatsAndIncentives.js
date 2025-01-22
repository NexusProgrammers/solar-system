/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SunIcon from "../../components/assets/sun-icon.svg";
import Image from "next/image";
import solarIcon from "../../components/assets/solar-icon.svg";
import { IoCallOutline } from "react-icons/io5";

const SolarStatsAndIncentives = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="mb-24 border-b-2 pb-20 border-b-[#EAC26A]">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="flex items-center justify-center gap-2 mb-4 relative">
            <p className="text-2xl md:text-4xl">
              Over{" "}
              <span className="text-[#1AAC98] font-bold">
                1,000 installations completed in Manitoba,
              </span>
            </p>
            <span className="absolute top-4">
              <Image src={solarIcon} alt="solar" />
            </span>
          </h2>
          <p className="text-2xl md:text-4xl text-[#202020] mb-8 font-normal">
            generating 5 MW of clean energy and saving our customers millions in
            energy costs.
          </p>
          <div className="flex flex-col gap-4 justify-center">
            <button className="bg-[#1AAC98] w-full md:w-[264px] h-[48px] flex items-center justify-center hover:bg-emerald-600 text-white rounded-full font-semibold transition-colors duration-200 text-base md:text-lg">
              Request A Free Quote
            </button>
            <button className="bg-[#EAC26A] hover:bg-[#d4a43c] text-[#202020] font-semibold w-full md:w-[207px] h-[49px] rounded-full transition-colors duration-200 flex items-center justify-center gap-1 text-base md:text-lg">
              <span>
                <IoCallOutline size={24} />
              </span>
              Call Us Now
            </button>
          </div>
        </div>
      </div>
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <Image src={SunIcon} alt="SunIcon" />
          <h2 className="text-4xl uppercase font-semibold">
            CURRENT SOLAR AND ENERGY
          </h2>
        </div>
        <h3 className="text-4xl font-semibold text-[#1AAC98] uppercase mb-4">
          INCENTIVES IN MANITOBA
        </h3>
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Even though solar panels save money over time, the upfront costs of
            purchasing and installing a system can be challenging. That's why
            financial grants are available to make solar power more accessible
            for Manitobans.
          </p>
          <p className="leading-relaxed">
            Federal and provincial government incentives provide valuable
            opportunities for homeowners and businesses to transition to solar
            energy.
          </p>
          <p className="leading-relaxed">
            While these grant programs can change and may be time-sensitive,
            we've highlighted some current options to help fund your solar
            installation. To make it easier, we've organized them into federal
            and provincial programs and specified which incentives apply to
            residential and commercial projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarStatsAndIncentives;
