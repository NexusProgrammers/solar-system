'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import articleImageOne from '../assets/article/article-image-one.svg'
import articleImageTwo from '../assets/article/article-image-two.svg'
import articleImageThree from '../assets/article/article-image-three.svg'
import circleYelloIcon from '../assets/article/circle-yellow-icon.svg'

const BlogsAndArticles = () => {
  const [activeButton, setActiveButton] = useState('Grid tie');

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  return (
    <div className="bg-[#f7f5f5] py-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between w-full items-start gap-6">
          <h2 className="text-3xl font-bold text-gray-900">BLOGS & ARTICLES</h2>
          <div className="flex items-center gap-1">
            <button
              href="#"
              className="bg-[#1AAC98] text-white font font-semibold text-lg w-[173px] h-[48px] rounded-full flex items-center justify-center"
            >
              View More
            </button>
            <Image
              src={circleYelloIcon}
              alt="circleYelloIcon"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="py-8 pb-8 overflow-x-auto whitespace-nowrap">
          <div className="flex gap-3">
            <button
              className={`text-[#FFFFFF] py-2 px-4 rounded-full cursor-pointer ${
                activeButton === 'Grid tie'
                  ? 'bg-[#1AAC98]'
                  : 'bg-white text-[#20202080]'
              }`}
              onClick={() => handleButtonClick('Grid tie')}
            >
              Grid tie
            </button>
            <button
              className={`text-[#FFFFFF] py-2 px-4 rounded-full cursor-pointer ${
                activeButton === 'Solar Energy'
                  ? 'bg-[#1AAC98]'
                  : 'bg-white text-[#20202080]'
              }`}
              onClick={() => handleButtonClick('Solar Energy')}
            >
              Solar Energy
            </button>
            <button
              className={`text-[#FFFFFF] py-2 px-4 rounded-full cursor-pointer ${
                activeButton === 'Off Grid'
                  ? 'bg-[#1AAC98]'
                  : 'bg-white text-[#20202080]'
              }`}
              onClick={() => handleButtonClick('Off Grid')}
            >
              Off Grid
            </button>
            <button
              className={`text-[#FFFFFF] py-2 px-4 rounded-full cursor-pointer ${
                activeButton === 'Sustainability'
                  ? 'bg-[#1AAC98]'
                  : 'bg-white text-[#20202080]'
              }`}
              onClick={() => handleButtonClick('Sustainability')}
            >
              Sustainability
            </button>
            <button
              className={`text-[#FFFFFF] py-2 px-4 rounded-full cursor-pointer ${
                activeButton === 'Cost Savings'
                  ? 'bg-[#1AAC98]'
                  : 'bg-white text-[#20202080]'
              }`}
              onClick={() => handleButtonClick('Cost Savings')}
            >
              Cost Savings
            </button>
            <button
              className={`text-[#FFFFFF] py-2 px-4 rounded-full cursor-pointer ${
                activeButton === 'Technological Advancements'
                  ? 'bg-[#1AAC98]'
                  : 'bg-white text-[#20202080]'
              }`}
              onClick={() => handleButtonClick('Technological Advancements')}
            >
              Technological Advancements
            </button>
            <button
              className={`text-[#FFFFFF] py-2 px-4 rounded-full cursor-pointer ${
                activeButton === 'Case Studies'
                  ? 'bg-[#1AAC98]'
                  : 'bg-white text-[#20202080]'
              }`}
              onClick={() => handleButtonClick('Case Studies')}
            >
              Case Studies
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <Image
              className="h-48 w-full object-cover rounded-t-lg"
              src={articleImageOne}
              alt="Solar Energy"
            />
            <div className="bg-gray-100 py-5 rounded-b-lg">
              <p className="text-base font-semibold text-[#1AAC98]">
                August 30, 2024
              </p>
              <h3 className="text-2xl font-bold text-[#202020] mt-2">
                5 Surprising Benefits Of Solar Energy Systems
              </h3>
              <p className="text-[#202020CC] font-normal text-base mt-2">
                Lorem ipsum dolor sit amet consectetur. Nibh auctor eunc
                hendrerit neque du habitat dignis habitant. Ullamcorper nid non
                a dolor.
              </p>
              <a
                href="#"
                className="text-[#1AAC98] underline font-semibold text-base mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
          <div>
            <Image
              className="h-48 w-full object-cover rounded-t-lg"
              src={articleImageTwo}
              alt="Solar Energy"
            />
            <div className="bg-gray-100 py-5 rounded-b-lg">
              <p className="text-base font-semibold text-[#1AAC98]">
                August 30, 2024
              </p>
              <h3 className="text-2xl font-bold text-[#202020] mt-2">
                5 Surprising Benefits Of Solar Energy Systems
              </h3>
              <p className="text-[#202020CC] font-normal text-base mt-2">
                Lorem ipsum dolor sit amet consectetur. Nibh auctor eunc
                hendrerit neque du habitat dignis habitant. Ullamcorper nid non
                a dolor.
              </p>
              <a
                href="#"
                className="text-[#1AAC98] underline font-semibold text-base mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
          <div>
            <Image
              className="h-48 w-full object-cover rounded-t-lg"
              src={articleImageThree}
              alt="Solar Energy"
            />
            <div className="bg-gray-100 py-5 rounded-b-lg">
              <p className="text-base font-semibold text-[#1AAC98]">
                August 30, 2024
              </p>
              <h3 className="text-2xl font-bold text-[#202020] mt-2">
                5 Surprising Benefits Of Solar Energy Systems
              </h3>
              <p className="text-[#202020CC] font-normal text-base mt-2">
                Lorem ipsum dolor sit amet consectetur. Nibh auctor eunc
                hendrerit neque du habitat dignis habitant. Ullamcorper nid non
                a dolor.
              </p>
              <a
                href="#"
                className="text-[#1AAC98] underline font-semibold text-base mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsAndArticles;