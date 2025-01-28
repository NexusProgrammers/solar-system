/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import solarWorker from "../assets/solar-worker.svg";
import circleIconGreen from "../assets/circle-icon-green.svg";
import arrowIcon from "../assets/arrow-icon.svg";
import customizeSolutions from "../assets/customize-solution-icon.svg";
import endToEndIcon from "../assets/end-to-end-icon.svg";
import solarImage from "../assets/solar-image.svg";
import dropDownIcon from "../assets/drop-down-icon.svg";
import dropUpIcon from "../assets/drop-up-icon.svg";
import { quoteAfterData } from "@/data/data";

const SolarSolutionsSection = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderQuoteSection = (data) => {
    return data.map((item) => {
      const isOpen = openSections[item.id];
      return (
        <div
          key={item.id}
          className="flex flex-col justify-between mt-12 border-b-2 pb-6"
        >
          <div className="hidden md:flex flex-col md:flex-row justify-between gap-8">
            <p className="font-medium text-2xl text-[#20202066]">
              {item.number}
            </p>
            <p className="text-3xl text-[#202020] font-semibold max-w-xs">
              {item.title}
            </p>
            <p className="text-[#202020B2] font-normal max-w-[468px] mt-4">
              {item.description}
            </p>
            <motion.div
              onClick={() => toggleSection(item.id)}
              className="cursor-pointer flex justify-start items-start"
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <Image src={dropUpIcon} alt="dropUpIcon" />
              ) : (
                <Image src={dropDownIcon} alt="dropDownIcon" />
              )}
            </motion.div>
          </div>

          <div className="md:hidden flex flex-col md:flex-row justify-between gap-8">
            <div className="flex justify-around items-center">
              <p className="font-medium text-2xl text-[#20202066]">
                {item.number}
              </p>
              <p className="ml-4 md:ml-0 text-xl md:text-3xl text-[#202020] font-semibold max-w-xs">
                {item.title}
              </p>
              <motion.div
                onClick={() => toggleSection(item.id)}
                className="cursor-pointer flex justify-start items-start"
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <Image src={dropUpIcon} alt="dropUpIcon" />
                ) : (
                  <Image src={dropDownIcon} alt="dropDownIcon" />
                )}
              </motion.div>
            </div>
            <p className="text-[#202020B2] font-normal max-w-[468px] mt-4">
              {item.description}
            </p>
          </div>

          <div
            className={`flex  ${
              isOpen ? "justify-between items-center" : "justify-end items-end"
            }  w-full`}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={solarImage}
                        alt="solarImage"
                        className="w-full object-cover"
                      />

                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {[
                          "Offices",
                          "retail spaces",
                          "warehouses",
                          "schools",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#FFFFFF] text-[#000000] px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        {[
                          "Scalable systems tailored to your business size.",
                          "Reduce electricity expenses and increase profitability.",
                          "ax credits and incentives for commercial installations.",
                        ].map((benefit) => (
                          <li
                            key={benefit}
                            className="flex gap-4 items-center px-3 justify-center bg-[#F9F9F9] rounded-lg w-full h-[75px]"
                          >
                            <div className="w-[10px] h-[10px] bg-[#1AAC98]"></div>
                            <span className="text-[#000000CC] text-lg font-normal">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-base text-[#202020CC] font-normal mt-4">
                        Custom Grid tie Commercial solar proposals available in
                        24 hours
                      </div>
                      <button className="w-full rounded-full bg-[#1AAC98] text-[#FFFFFF] h-[49px] flex justify-center items-center hover:bg-emerald-600 transition-colors mt-2">
                        Request A Quote Today
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="gap-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
        <div className="flex flex-col justify-between w-[400px]">
          <p className="font-semibold text-lg md:text-2xl lg:text-4xl">
            SUPPLYING AND INSTALLING A WIDE RANGE OF SOLAR SOLUTIONS
          </p>
          <div className="mb-12">
            <h3 className="font-bold mb-3 text-xl">
              What Work We Do in Manitoba
            </h3>
            <p className="text-[#202020CC] font-normal text-base">
              We're your one-stop energy solution to meet diverse power
              requirements. Whether you want to power your home, business, or
              farm, we have you covered with reliable and efficient systems
              designed to maximize savings and minimize environmental impact.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden w-auto md:w-[400px]">
          <Image
            src={solarWorker}
            alt="Solar installation workers"
            className="w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-[#FFFFFFCC] w-[173px] h-[173px] rounded-3xl flex flex-col items-center justify-between p-2">
            <h3 className="font-semibld max-w-[135px] text-lg mt-3">
              Why Choose Solar For Your Energy Bills?
            </h3>
            <div className="relative w-full flex justify-end p-1 items-end">
              <Image
                src={circleIconGreen}
                alt="circleIconGreen"
                className="cursor-pointer"
              />
              <Image
                src={arrowIcon}
                alt="arrowIcon"
                className="absolute top-[22px] right-[24px]"
              />
            </div>
          </div>
        </div>
        <div className="space-y- w-[400px]">
          <div className="flex flex-col gap-6">
            <div className="space-y-6 border-b-2 pb-6">
              <Image src={customizeSolutions} alt="customizeSolutions" />
              <h4 className="font-semibold">Customized Solutions</h4>
              <p className="text-[#202020CC] text-lg font-normal max-w-[336px]">
                Every project is tailored to meet your specific energy needs,
                ensuring maximum efficiency and cost-effectiveness.
              </p>
            </div>
            <div className="space-y-6">
              <Image src={endToEndIcon} alt="endToEndIcon" />
              <h4 className="font-semibold">End-to-End Support</h4>
              <p className="text-[#202020CC] text-lg font-normal max-w-[336px]">
                From consultation to installation and maintenance, we provide
                comprehensive support every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>{renderQuoteSection(quoteAfterData)}</div>
    </section>
  );
};

export default SolarSolutionsSection;
