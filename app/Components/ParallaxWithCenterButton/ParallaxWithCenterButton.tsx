"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "../Button/Button";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxWithCenterButtonProps {
  image: string;
  title: string;
  buttonText: string;
  handleButtonClick: () => void;
}

const ParallaxWithCenterButton: React.FC<ParallaxWithCenterButtonProps> = ({
  image,
  title,
  buttonText,
  handleButtonClick,
}) => {
  const bgRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const section = bgRef.current;
    if (!section) return;
    // @ts-ignore
    section.bg = section.querySelector(".bg");
    // @ts-ignore
    section.bg.style.backgroundImage = `url('${image}')`;

    const getRatio = (el: HTMLElement) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.fromTo(
      // @ts-ignore
      section.bg,
      {
        backgroundPosition: () =>
          image
            ? `50% ${-window.innerHeight * getRatio(section)}px`
            : "50% 0px",
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => (image ? "top bottom" : "top top"),
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }, [bgRef, image]);

  return (
    <section
      ref={bgRef}
      className="relative h-screen flex items-center justify-center w-full"
    >
      <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat"></div>
      <div className=" w-full h-full flex flex-col items-center justify-center px-10 gap-[50px] ">
        <h1 className="text-white text-shadow-lg z-10 md:text-[70px] text-2xl font-futuraLight uppercase tracking-widest font-extralight">
          {title}
        </h1>
        <button
          className="px-6 py-3 text-xl text-black bg-[#FFD654] font-futuraLight tracking-wider hover:scale-105"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ParallaxWithCenterButton;
