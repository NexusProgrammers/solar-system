/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

import CircleIcon from "../assets/circle-icon.svg";
import { products } from "@/data/data";

const SolarProductsSection = () => {
  return (
    <section className="bg-[#ddecec] py-16 px-4 md:px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            POWERING HOMES, BUSINESSES, FARMS,
            <br />
            AND MORE WITH{" "}
            <span className="text-[#EAC26A]">SOLAR IN MANITOBA</span>
          </h2>
          <p className="text-gray-600 max-w-5xl mx-auto">
            At Vibes Energy Solar, we provide cutting-edge renewable energy
            solutions tailored to your needs. From powering your home or
            business with solar systems to installing Manitoba's chargers, our
            products are designed to promote energy efficiency, reduce costs,
            and contribute to a sustainable future. Explore our offerings to
            find the perfect energy solution for you.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-around w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-[50px] overflow-hidden relative group hover:shadow-lg transition-shadow w-[373px] h-[484px]"
            >
              {index === 1 ? (
                <>
                  <div className="relative">
                    <div className="p-6">
                      <h3 className="font-bold text-lg">{product.title}</h3>
                      <p className="text-[#1AAC98] text-lg font-semibold">
                        {product.price}
                      </p>
                    </div>
                    <div className="absolute top-2 right-1">
                      <Image
                        src={CircleIcon}
                        alt="CircleIcon"
                        className="p-2 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-[50px]"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative h-[70%] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-[50px]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{product.title}</h3>
                    <p className="text-[#1AAC98] text-lg font-semibold">
                      {product.price}
                    </p>
                  </div>
                  <div className="w-full flex justify-end absolute bottom-4">
                    <Image
                      src={CircleIcon}
                      alt="CircleIcon"
                      className="p-2 cursor-pointer"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProductsSection;
