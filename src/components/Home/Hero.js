/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import backgroundImage from "../assets/hero-section-background.svg";
import { IoIosArrowForward } from "react-icons/io";
import globalIcon from "../assets/global-icon.svg";
import { PiPhoneCallThin } from "react-icons/pi";
import verifyIcon from "../assets/verify-icon.svg";
import solar1 from "../../components/assets/solar-images/1.png";
import solar2 from "../../components/assets/solar-images/2.png";
import solar3 from "../../components/assets/solar-images/3.png";
import solar4 from "../../components/assets/solar-images/4.png";
import solar5 from "../../components/assets/solar-images/5.png";
import solar6 from "../../components/assets/solar-images/6.png";
import solar7 from "../../components/assets/solar-images/7.png";
import solar8 from "../../components/assets/solar-images/8.png";
import solar9 from "../../components/assets/solar-images/9.png";
import solar10 from "../../components/assets/solar-images/10.png";
import solar11 from "../../components/assets/solar-images/11.png";
import solar12 from "../../components/assets/solar-images/12.png";
import solar13 from "../../components/assets/solar-images/13.png";
import solar14 from "../../components/assets/solar-images/14.png";

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
          <div className="flex justify-between max-w-7xl w-full absolute top-56">
            <div className="flex gap-4 items-center">
              <Image
                src={solar1}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto"
              />
              <Image
                src={solar2}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto"
              />
              <Image
                src={solar3}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto"
              />
              <Image
                src={solar4}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto"
              />
              <Image
                src={solar5}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto"
              />
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={solar6}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-70"
              />
              <Image
                src={solar7}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-65"
              />
              <Image
                src={solar8}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-60"
              />
              <Image
                src={solar9}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-55"
              />
              <Image
                src={solar10}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-50"
              />
              <Image
                src={solar11}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-45"
              />
              <Image
                src={solar12}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-40"
              />
              <Image
                src={solar13}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-35"
              />
              <Image
                src={solar14}
                alt="Solar Panels Background"
                className="max-h-[92.87px] w-auto opacity-20"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="relative h-[800px] md:h-auto z-10 max-w-7xl mx-auto pt-24 md:pt-32 lg:pt-40 xl:pt-80 px-4 lg:px-0">
        <div className="flex justify-center lg:justify-between items-end flex-wrap px-4 lg:px-0">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="bg-white rounded-xl mb-3 md:mb-6 flex items-center justify-center gap-2 w-[321px] h-[43px]">
              <Image src={globalIcon} alt="globalIcon" />
              <p className="text-[#1AAC98] text-base font-semibold">
                Manitoba's solar energy company
              </p>
            </div>
            <h1 className="text-2xl md:text-4xl sm:text-[42px] lg:text-[60px] font-bold text-white text-center lg:text-left">
              <p className="whitespace-nowrap">
                FOR US. <span className="text-yellow-400">FOR THEM.</span>
              </p>
              <p className="whitespace-nowrap py-2 md:py-8">FOR THE FUTURE.</p>
            </h1>
            <p className="text-white text-base lg:text-lg mb-3 md:mb-8 max-w-xl text-center lg:text-left">
              Manitoba's leader in Solar Panel supply and installation. We
              design, setup, deliver, and install solar array systems locally in
              Winnipeg. We offer efficient and advanced solar panel solutions
              for all home, farm, business, and commercial properties.
            </p>
            <div className="flex flex-col items-center sm:flex-row gap-4 justify-center lg:justify-start w-full">
              <button className="bg-[#1AAC98] font-semibold text-lg flex items-center justify-center border border-white text-white w-full max-w-xs lg:w-[207px] h-[49px] rounded-full hover:bg-teal-600 transition-colors">
                Get a Free Quote <IoIosArrowForward />
              </button>
              <button className="bg-[#EAC26A] text-black font-semibold gap-2 text-lg flex items-center justify-center border border-white max-w-xs  w-full lg:w-[207px] h-[49px] rounded-full hover:bg-yellow-500 transition-colors">
                <PiPhoneCallThin size={22} /> Call Us Now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4 mt-3 md:mt-8 lg:mt-0">
            <div className="flex gap-2 lg:gap-4 place-content-center">
              <div className="bg-[#FFFFFFCC] md:w-[177px] lg:w-[180px] h-[143px] backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center justify-center">
                <p className="font-black text-xl lg:text-4xl">70%</p>
                <p>
                  <span className="font-medium text-sm">
                    Save Up to 70% on Your{" "}
                  </span>
                  <span className="font-bold text-sm">Energy Bills</span>
                </p>
              </div>
              <div className="bg-[#FFFFFFCC] md:w-[210px] lg:w-[214px] h-[143px] backdrop-blur-sm p-6 rounded-3xl flex flex-col items-center justify-center">
                <p className="font-black text-xl lg:text-4xl">1,000</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
