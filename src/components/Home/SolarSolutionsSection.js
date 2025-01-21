/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import solarWorker from "../assets/solar-worker.svg";
import circleIconGreen from "../assets/circle-icon-green.svg";
import arrowIcon from "../assets/arrow-icon.svg";
import customizeSolutions from "../assets/customize-solution-icon.svg";
import endToEndIcon from "../assets/end-to-end-icon.svg";

const SolarSolutionsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="gap-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
        <div className="flex flex-col justify-between w-[400px]">
          <p className="font-semibold text-2xl lg:text-4xl">
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

        <div className="relative rounded-2xl overflow-hidden w-[400px]">
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
            <div className="space-y-6 border-b-2 pb-8">
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
    </section>
  );
};

export default SolarSolutionsSection;
