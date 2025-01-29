import React from "react";

const SeeOurWorkSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="w-full flex-wrap flex justify-between p-3 md:p-0 mt-10">
          <div className="flex flex-col gap-4 px-2">
            <p className="text-[#202020] font-semibold text-2xl md:text-4xl">
              See Our Work in Action
            </p>
            <button className="bg-[#EAC26A] rounded-full flex items-center justify-center w-[212px] h-[48px] text-white font-semibold text-lg">
              View All Projects
            </button>
          </div>
          <div className="p-3 md:p-0">
            <p className="max-w-[591px]">
              Explore some of our completed solar and EV charger installations
              across Manitoba for homes, businesses, and farms. We take pride in
              delivering reliable energy solutions tailored to every need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeOurWorkSection;
