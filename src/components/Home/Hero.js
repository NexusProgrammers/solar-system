/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import backgroundImage from "../assets/hero-section-background.svg";
import { IoIosArrowForward } from "react-icons/io";
import globalIcon from "../assets/global-icon.svg";
import { PiPhoneCallThin } from "react-icons/pi";
import verifyIcon from "../assets/verify-icon.svg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Solar Panels Background"
          fill
          className="object-cover brightness-90 z-0 rounded-b-3xl bg-black"
          priority
        />
      </div>
      <nav className="relative z-10 px-4 py-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex-shrink-0 absolute top-32">
            <p className="uppercase hidden xl:flex gap-10 text-white text-[140px] font-extrabold">
              <div>
                <span>S</span>
                <span>O</span>
                <span>L</span>
                <span>A</span>
                <span>R</span>
              </div>

              <div>
                <span className="opacity-90">S</span>
                <span className="opacity-80">O</span>
                <span className="opacity-70">L</span>
                <span className="opacity-60">U</span>
                <span className="opacity-50">T</span>
                <span className="opacity-40">I</span>
                <span className="opacity-30">O</span>
                <span className="opacity-10">N</span>
                <span className="opacity-5">S</span>
              </div>
            </p>
          </div>
        </div>
      </nav>
      <div className="relative z-10 max-w-7xl mx-auto pt-40 lg:pt-80 px-4 lg:px-0">
        <div className="flex justify-center lg:justify-between items-end flex-wrap px-4 lg:px-0">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="bg-white rounded-xl mb-6 flex items-center justify-center gap-2 w-[321px] h-[43px]">
              <Image src={globalIcon} alt="globalIcon" />
              <p className="text-[#1AAC98] text-base font-semibold">
                Manitoba's solar energy company
              </p>
            </div>
            <h1 className="text-4xl sm:text-[42px] lg:text-[60px] font-bold text-white text-center lg:text-left">
              <p className="whitespace-nowrap">
                FOR US. <span className="text-yellow-400">FOR THEM.</span>
              </p>
              <p className="whitespace-nowrap py-8">FOR THE FUTURE.</p>
            </h1>
            <p className="text-white text-base lg:text-lg mb-8 max-w-xl text-center lg:text-left">
              Manitoba's leader in Solar Panel supply and installation. We
              design, setup, deliver, and install solar array systems locally in
              Winnipeg. We offer efficient and advanced solar panel solutions
              for all home, farm, business, and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
              <button className="bg-[#1AAC98] font-semibold text-lg flex items-center justify-center border border-white text-white w-full lg:w-[207px] h-[49px] rounded-full hover:bg-teal-600 transition-colors">
                Get a Free Quote <IoIosArrowForward />
              </button>
              <button className="bg-[#EAC26A] text-black font-semibold gap-2 text-lg flex items-center justify-center border border-white w-full lg:w-[207px] h-[49px] rounded-full hover:bg-yellow-500 transition-colors">
                <PiPhoneCallThin size={22} /> Call Us Now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4 mt-8 lg:mt-0">
            <div className="flex gap-2 lg:gap-4 place-content-center">
              <div className="bg-[#FFFFFFCC] w-[177px] lg:w-[180px] h-[143px] backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center justify-center">
                <p className="font-black text-4xl">70%</p>
                <p>
                  <span className="font-medium text-sm">
                    Save Up to 70% on Your{" "}
                  </span>
                  <span className="font-bold text-sm">Energy Bills</span>
                </p>
              </div>
              <div className="bg-[#FFFFFFCC] w-[210px] lg:w-[214px] h-[143px] backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center justify-center">
                <p className="font-black text-4xl">1,000</p>
                <p className="font-medium text-sm text-center">
                  Over 1,000 Installations Completed
                </p>
              </div>
            </div>
            <div className="relative w-full lg:w-[407px] h-[72px] flex items-center justify-center">
              <div className="absolute top-6 w-[80%] h-full rounded-full bg-white/70"></div>
              <div className="absolute top-3 w-[94%] h-full rounded-full bg-white/80"></div>
              <div className="absolute w-full h-full rounded-full bg-white"></div>
              <div className="relative flex items-center gap-3 px-4 py-2 w-full h-full z-40">
                <div className="bg-white rounded-full p-2 flex-shrink-0">
                  <Image
                    src={verifyIcon}
                    alt="verifyIcon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">25-year warranty</span> for
                  reliable, long-term solar performance
                </p>
              </div>
            </div>
            {/* <div className="relative">
              <div className="relative flex items-center justify-center over">
                <Image
                  src={imageOne}
                  alt="imageOne"
                  className="absolute z-50 top-0"
                />
                <Image
                  src={imageTwo}
                  alt="imageTwo"
                  className="absolute z-40 top-3"
                />
                <Image
                  src={imageThree}
                  alt="imageThree"
                  className="absolute z-30 top-6"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
