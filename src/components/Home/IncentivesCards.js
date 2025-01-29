import React from "react";
import Image from "next/image";
import circleYelloIcon from "../assets/circile-yellow-icon.svg";
import circleGreenIcon from "../assets/circle-green-icon.svg";
import solarPlanImage from "../assets/solar-plan-image.svg";
import { IoCallOutline } from "react-icons/io5";

const IncentivesCards = () => {
  const incentivesData = [
    {
      type: "RESIDENTIAL",
      bgColor: "bg-[#1AAC98]",
      icon: circleYelloIcon,
      sections: [
        {
          title: "FEDERAL INCENTIVES",
          points: [
            "Grants of up to $5,000 for energy-efficient home retrofits, including solar panel installations.",
            "Up to $600 to cover the cost of an EnerGuide evaluation.",
          ],
          eligibility: {
            label: "Eligibility:",
            text: " Homeowners who complete a pre- and post-retrofit evaluation.",
          },
        },
        {
          title: "PROVINCIAL INCENTIVES (MANITOBA)",
          points: [
            "Provides financing for solar panel installations and other renewable energy systems.",
            "Loan amounts of up to $30,000 with competitive interest rates.",
          ],
          eligibility: {
            label: "Eligibility:",
            text: " Must be a Manitoba Hydro customer with an approved solar installation plan.",
          },
        },
      ],
    },
    {
      type: "COMMERCIAL",
      bgColor: "bg-[#EAC26A]",
      icon: circleGreenIcon,
      sections: [
        {
          title: "FEDERAL INCENTIVES",
          points: [
            "Grants of up to $5,000 for energy-efficient home retrofits, including solar panel installations.",
            "Up to $600 to cover the cost of an EnerGuide evaluation.",
          ],
          eligibility: {
            label: "Eligibility:",
            text: " Homeowners who complete a pre- and post-retrofit evaluation.",
          },
        },
        {
          title: "PROVINCIAL INCENTIVES (MANITOBA)",
          points: [
            "Provides financing for solar panel installations and other renewable energy systems.",
            "Loan amounts of up to $30,000 with competitive interest rates.",
          ],
          eligibility: {
            label: "Eligibility:",
            text: " Must be a Manitoba Hydro customer with an approved solar installation plan.",
          },
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-6">
      <div className="grid md:grid-cols-2 gap-6 px-4">
        {incentivesData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} rounded-3xl p-8 relative text-white`}
          >
            <div className="flex justify-between items-start md:mb-6">
              <h2 className="text-2xl font-medium">{card.type}</h2>
              <Image src={card.icon} alt="icon" className="cursor-pointer" />
            </div>

            {card.sections.map((section, sIndex) => (
              <div key={sIndex} className="mb-8 last:mb-0">
                <h3 className="text-lg font-medium mb-4">{section.title}</h3>

                <div className="space-y-4 mb-4">
                  {section.points.map((point, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[15px] leading-relaxed text-white/90"
                    >
                      {point}
                    </p>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-4">
                  <p className="text-[15px] leading-relaxed">
                    <span
                      className={`${
                        card.type === "RESIDENTIAL"
                          ? "text-[#EAC26A]"
                          : "text-[#1AAC98]"
                      } font-medium`}
                    >
                      {section.eligibility.label}
                    </span>
                    <span className="text-white/90">
                      {section.eligibility.text}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 px-4">
          <Image
            src={solarPlanImage}
            alt="Solar panels"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="relative py-12 px-6 md:px-12 text-cente flex items-center justify-center flex-col">
          <h3 className="text-xl md:text-2xl text-white font-medium mb-8 max-w-3xl">
            Confused about which incentive works for you? Our team can help you
            navigate the options and maximize your savings
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#1AAC98] hover:bg-[#159b89] text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 min-w-[200px]">
              Request A Free Quote
            </button>
            <button className="bg-[#EAC26A] hover:bg-[#d9b159] text-[#202020] px-6 py-3 rounded-full font-medium transition-colors duration-200 min-w-[200px] flex items-center justify-center gap-2">
              <IoCallOutline size={24} />
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncentivesCards;
