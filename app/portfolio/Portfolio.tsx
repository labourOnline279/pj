"use client";

import PhotographyPortfolio from "./PhotographyPortfolio";

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col mt-[100px] sm:mt-[150px] md:mt-[200px] px-4 sm:px-6 md:px-8 lg:px-12 gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h1 className="font-futuraLight text-4xl sm:text-5xl md:text-6xl">
            Portfolio
          </h1>
          <p className="font-futuraLight text-base lg:text-lg font-extralight">
            Explore a vivid collection of Omar's work and learn the story behind
            each frame. From landscapes to the vibrant energy of cultural
            expressions, this portfolio showcases the photographers journey
            through perspectives and artistic style.
          </p>
        </div>
        <PhotographyPortfolio />
      </div>
    </div>
  );
}
