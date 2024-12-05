"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "./Button/Button";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  index: number;
  title: string;
  buttonText: string;
  handleButtonClick: () => void;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  index,
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
    section.bg.style.backgroundImage = `url(assets/images/home/home-${index}.jpg)`;

    const getRatio = (el: HTMLElement) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.fromTo(
      // @ts-ignore
      section.bg,
      {
        backgroundPosition: () =>
          index
            ? `50% ${-window.innerHeight * getRatio(section)}px`
            : "50% 0px",
      },
      {
        backgroundPosition: () =>
          `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => (index ? "top bottom" : "top top"),
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }, [index]);

  return (
    <section
      ref={bgRef}
      className="relative h-screen  flex items-center justify-center w-full "
    >
      <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat"></div>
      <div className=" w-full h-full flex flex-col items-start justify-center px-10 gap-10 ">
        <h1 className="text-white text-shadow-lg z-10 md:text-[70px] text-2xl font-futuraLight uppercase tracking-widest font-extralight">
          {title}
        </h1>
        {buttonText.length > 1 ? (
          <Button title={buttonText} handleClick={handleButtonClick} />
        ) : null}
      </div>
    </section>
  );
};

export default ParallaxSection;
