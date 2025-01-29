/* eslint-disable react/no-unescaped-entities */
import React from "react";
import RenewableImage from "../assets/revnewable-image.svg";
import OpenChatIcon from "../assets/open-chat-icon.svg";
import CircleIcon from "../assets/circle-icon.svg";
import SunIcon from "../assets/sun-icon.svg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import greenImage from "../assets/green-image.svg";

const RenewableSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-[393px] h-auto space-y-6">
          <div className="flex items-center gap-2">
            <div>
              <Image src={SunIcon} alt="SunIcon" />
            </div>
            <div>
              <p className="uppercase font-bold text-lg">
                Creating a <span className="text-[#1AAC98]">greener</span>
              </p>
              <p className="uppercase font-bold text-lg">
                <span className="text-[#1AAC98]">safer future</span>for all of
                us.
              </p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden ">
            <Image
              src={RenewableImage}
              alt="RenewableImage"
              className="w-full h-auto"
              width={385}
              height={455}
            />
            <Image
              src={CircleIcon}
              width={74}
              height={74}
              alt="CircleIcon"
              className="absolute top-0 right-1 "
            />
          </div>
        </div>
        <div className="w-full md:w-[777px] space-y-6">
          <p className="text-gray-700 text-[24px] lg:text-[34px] max-w-[787px] font-normal border-b-2 pb-4">
            <span className="text-gray-400">
              We are passionate about the environment and really excited to be a
              part of Manitoba’s transition to a low carbon economy.
            </span>
            <span className="ml-1  italic">
              As renewable energy advocates we have a combination of products
              and services targeted towards the electric vehicle and solar
              community here in the prairies.
            </span>
          </p>
          <div className="relative mt-8 max-w-[647px]">
            <div className="bg-white rounded-lg overflow-hidden flex flex-col items-center lg:items-start justify-center lg:justify-start lg:flex-row">
              <div className="relative">
                <Image
                  src={greenImage}
                  alt={"greenImage"}
                  className="mt-2 ml-2 md:ml-8 w-[89%] h-[100%] "
                />
                <Image
                  src={OpenChatIcon}
                  alt={"OpenChatIcon"}
                  className="absolute -top-4 left-2 md:left-6"
                />
              </div>
              <div className="p-4 bg-white flex flex-col items-center lg:block">
                <p className="text-[#202020] max-w-[330px] font-normal text-lg text-center lg:text-start">
                  We continue to strive and adapt to promote positive
                  sustainable solutions to meet energy demands.
                </p>
                <button className="flex items-center justify-center gap-2 mt-6 w-[182px] h-[49px] bg-[#1AAC98] text-white rounded-full hover:bg-teal-600 transition-colors">
                  Learn More <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenewableSection;
