import React from 'react';
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Blurred background for mobile */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md sm:hidden"></div>
      
      <div className="relative z-10 text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      
      <div className="relative z-10 flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-neutral-800 bg-opacity-75 p-6 rounded-lg">
              <div className="flex mb-4">
                <div className="flex h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h5 className="mb-3 text-xl font-semibold">{feature.text}</h5>
              <p className="text-md text-neutral-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;