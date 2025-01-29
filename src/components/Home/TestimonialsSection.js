import React from "react";
import { testimonialsData } from "@/data/data";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-7xl bg-[#1AAC98] rounded-3xl w-full place-content-center place-items-center">
          <div className="lg:hidden place-content-center place-items-center px-2">
            <div className="flex justify-start flex-col md:flex-row gap-6 mt-6 mb-6 w-full px-2">
              <h2 className="text-white text-xl font-bold">
                WHAT CUSTOMERS SAYS?
              </h2>
              <button className="w-[256px] h-[48px] rounded-full bg-[#EAC26A] text-[#FFFFFF] font-semibold text-lg">
                Read All Reviews
              </button>
            </div>
            <div className="space-y-6 mb-6 px-2">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#1B9C8A] p-6 rounded-xl w-auto md:w-[390px]"
                >
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Image src={testimonial.icon} alt="Icon" key={i} />
                    ))}
                  </div>
                  <p className="text-white text-sm mb-4">{testimonial.text}</p>
                  <p className="text-white text-sm font-semibold">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex justify-between items-start p-6 mt-6">
              <h2 className="text-white text-4xl mb-8 font-bold max-w-sm">
                WHAT CUSTOMERS ARE SAYING
              </h2>
              <button className="w-[256px] h-[48px] rounded-full bg-[#EAC26A] text-[#FFFFFF] font-semibold text-lg">
                Read All Reviews
              </button>
            </div>
            <div className="flex flex-wrap gap-6 items-start justify-center p-6">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#1B9C8A] p-6 rounded-xl w-[390px]"
                >
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Image src={testimonial.icon} alt="Icon" key={i} />
                    ))}
                  </div>
                  <p className="text-white text-sm mb-4">{testimonial.text}</p>
                  <p className="text-white text-sm font-semibold">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
