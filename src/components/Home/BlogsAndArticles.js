"use client";

import Image from "next/image";
import React, { useState } from "react";
import articleImageOne from "../assets/article/article-image-one.svg";
import articleImageTwo from "../assets/article/article-image-two.svg";
import articleImageThree from "../assets/article/article-image-three.svg";
import circleYelloIcon from "../assets/article/circle-yellow-icon.svg";

const BlogsAndArticles = () => {
  const [activeButton, setActiveButton] = useState("Grid tie");
  const [articles, setArticles] = useState([
    {
      image: articleImageOne,
      date: "August 30, 2024",
      title: "Unlocking the Potential of Grid-Tied Solar Systems",
      content:
        "Discover the transformative benefits of integrating grid-tied solar energy into your home or business.",
    },
    {
      image: articleImageTwo,
      date: "August 30, 2024",
      title: "Harnessing the Sun: Solar Energy Innovations",
      content:
        "Explore the latest advancements in solar technology and how they are revolutionizing renewable energy.",
    },
    {
      image: articleImageThree,
      date: "August 30, 2024",
      title: "Off-Grid Living: Achieving Energy Independence",
      content:
        "Discover the freedom and sustainability of off-grid living and how it's transforming the way we power our lives.",
    },
  ]);

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);

    switch (buttonText) {
      case "Grid tie":
        setArticles([
          {
            image: articleImageOne,
            date: "August 30, 2024",
            title: "Unlocking the Potential of Grid-Tied Solar Systems",
            content:
              "Discover the transformative benefits of integrating grid-tied solar energy into your home or business.",
          },
          {
            image: articleImageTwo,
            date: "August 30, 2024",
            title: "Maximizing Energy Savings with Grid-Tied Solar",
            content:
              "Explore how grid-tied solar systems can significantly reduce your electricity bills and boost your financial savings.",
          },
          {
            image: articleImageThree,
            date: "August 30, 2024",
            title: "The Future of Grid-Tied Solar: Trends and Advancements",
            content:
              "Stay ahead of the curve and learn about the latest innovations in grid-tied solar technology that are shaping the renewable energy landscape.",
          },
        ]);
        break;
      case "Solar Energy":
        setArticles([
          {
            image: articleImageOne,
            date: "August 30, 2024",
            title: "Harnessing the Sun: Solar Energy Innovations",
            content:
              "Explore the latest advancements in solar technology and how they are revolutionizing renewable energy.",
          },
          {
            image: articleImageTwo,
            date: "August 30, 2024",
            title: "The Environmental Benefits of Solar Power",
            content:
              "Discover how solar energy is leading the charge in sustainable and eco-friendly power generation.",
          },
          {
            image: articleImageThree,
            date: "August 30, 2024",
            title: "Solar Energy for the Home: A Homeowner Guide",
            content:
              "Learn the steps to integrate solar power into your home and start saving on your energy bills.",
          },
        ]);
        break;
      case "Off Grid":
        setArticles([
          {
            image: articleImageOne,
            date: "August 30, 2024",
            title: "Lorem ipsum dolor sit.",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus, pariatur est tempore quisquam labore id dolor doloribus porro ea quis recusandae, et ipsam cumque. Quaerat ullam consequatur culpa recusandae corrupti, enim dolorum? Repellat cum placeat, nam dolores temporibus velit.",
          },
          {
            image: articleImageTwo,
            date: "August 30, 2024",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam deleniti suscipit enim, ducimus architecto ratione quos error asperiores debitis quis quas optio cum consequatur aliquam ipsa libero reiciendis vel saepe illum voluptatem possimus nesciunt?",
          },
          {
            image: articleImageThree,
            date: "August 30, 2024",
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, dignissimos!",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ad ab repellendus iste harum assumenda eum dignissimos quae sequi quibusdam.",
          },
        ]);
        break;
      case "Sustainability":
        setArticles([
          {
            image: articleImageOne,
            date: "August 30, 2024",
            title: "Lorem ipsum dolor sit.",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus, pariatur est tempore quisquam labore id dolor doloribus porro ea quis recusandae, et ipsam cumque. Quaerat ullam consequatur culpa recusandae corrupti, enim dolorum? Repellat cum placeat, nam dolores temporibus velit.",
          },
          {
            image: articleImageTwo,
            date: "August 30, 2024",
            title:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim consectetur eaque.",
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam deleniti suscipit enim, ducimus architecto ratione quos error asperiores debitis quis quas optio cum consequatur aliquam ipsa libero reiciendis vel saepe illum voluptatem possimus nesciunt?",
          },
          {
            image: articleImageThree,
            date: "August 30, 2024",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ad ab repellendus iste harum assumenda eum dignissimos quae sequi quibusdam.",
          },
        ]);
      default:
        break;
    }
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
            {[
              "Grid tie",
              "Solar Energy",
              "Off Grid",
              "Sustainability",
              "Cost Savings",
              "Technological Advancements",
              "Case Studies",
            ].map((button) => (
              <button
                key={button}
                className={`py-2 px-4 rounded-full cursor-pointer ${
                  activeButton === button
                    ? "bg-[#1AAC98]"
                    : "bg-white text-[#20202080]"
                }`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {articles.map((article, index) => (
            <div key={index}>
              <Image
                className="h-48 w-full object-cover rounded-t-lg"
                src={article.image}
                alt="Solar Energy"
              />
              <div className="bg-gray-100 py-5 rounded-b-lg">
                <p className="text-base font-semibold text-[#1AAC98]">
                  {article.date}
                </p>
                <h3 className="text-2xl font-bold text-[#202020] mt-2">
                  {article.title}
                </h3>
                <p className="text-[#202020CC] font-normal text-base mt-2">
                  {article.content}
                </p>
                <a
                  href="#"
                  className="text-[#1AAC98] underline font-semibold text-base mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsAndArticles;
