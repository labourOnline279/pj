"use client";
import ParallaxSection from "../Components/ParallaxSection";
import ParallaxWithCenterButton from "../Components/ParallaxWithCenterButton/ParallaxWithCenterButton";
import { Button } from "../Components/Button/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Homepage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Jello");
  };

  useEffect(() => {
    // Exit fullscreen on component mount
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message}`
        );
      });
    }
  }, []);

  return (
    <div>
      <div
        className="w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: "url(assets/images/home/home-1.jpg)" }}
      ></div>
      <ParallaxSection
        index={2}
        title={"Portfolio"}
        buttonText={"View"}
        handleButtonClick={() => router.push("/portfolio")}
      />
      <ParallaxSection
        index={3}
        title={"Prints"}
        buttonText={"View"}
        handleButtonClick={() => router.push("/shop")}
      />

      <ParallaxSection
        index={4}
        title={"About"}
        buttonText={"View"}
        handleButtonClick={() => router.push("/about")}
      />
      <ParallaxSection
        index={5}
        title={"Contact"}
        buttonText={"View"}
        handleButtonClick={() => router.push("/contact")}
      />
      <ParallaxWithCenterButton
        image={"/assets/images/letscreate.jpg"}
        title={""}
        buttonText={"LETS CREATE"}
        handleButtonClick={() => router.push("/contact")}
      />
      <section className=" h-[90vh] relative ">
        <div className=" absolute w-full h-full flex flex-col items-start justify-center px-10 gap-10 ">
          <h1 className="text-white text-shadow-lg z-10 md:text-[70px] text-2xl font-futuraLight uppercase tracking-widest font-extralight">
            {"Youtube"}
          </h1>
          <Button title={"See More Videos"} handleClick={handleClick} />
        </div>
        <video
          muted
          autoPlay
          loop
          playsInline
          controls={false}
          style={{ width: "100%", height: "inherit", objectFit: "cover" }}
        >
          <source src={"/assets/video/homeVideo.mp4"} type="video/mp4" />
          Your browser does not support the HTML5 video tag.
        </video>
      </section>
    </div>
  );
};
