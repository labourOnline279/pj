import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa";

export const About = () => {
  return (
    <div className="flex flex-col w-full  ">
      <div className="flex md:flex-row flex-col mt-[200px] md:mx-[70px] mx-5">
        <div className=" md:w-[100%] w-full flex flex-col md:gap-12 gap-4">
          <h1 className=" font-futuraLight md:text-6xl text-5xl">About</h1>
          <p className="font-futuraLight  md:text-xl font-extralight  text-justify">
            Born in 1985 in Srinagar, Kashmir, Omar Bazaz grew up surrounded by
            the warmth of his people and the majestic Karakoram and Himalayan
            ranges encircling the Happy Valley. A former professional aviator,
            Omar took a leap of faith to pursue his passion for filmmaking and
            photography. He believes storytelling holds the power to inspire,
            allowing him to soar beyond boundaries and share his vision with the
            world. Omar masterfully uses light and shadow to evoke emotion,
            embracing stark contrasts to craft atmospheric and ethereal
            compositions. His photography stirs visceral responses, conveying
            awe for nature’s grandeur and humanity’s vulnerability. His frames
            often explore existential themes, capturing the delicate balance
            between resilience and fragility. Like the master craftsmen of
            Kashmir, Omar approaches his visuals with precision and meticulous
            care. Each photograph undergoes a process to ensure it delivers its
            intended meaning. His work, marked by sweeping vistas and cinematic
            narratives, resonates with timeless themes of human connection and
            the beauty of the natural world. Omar Bazaz’s work has been featured
            in renowned international publications, including Architectural
            Digest, House and Garden, Goodearth, Living etc., Outlook India, and
            TRT World. He has also contributed to multiple film projects.
          </p>
        </div>
        {/* <div className=" md:w-[50%] flex flex-row justify-center gap-5 md:pt-24 pt-10">
          <FaYoutube
            style={{ width: "22px", height: "22px", color: "black" }}
            className="hover:scale-105 cursor-pointer"
          />
          <FaInstagram
            style={{ width: "22px", height: "22px", color: "black" }}
            className="hover:scale-105 cursor-pointer"
          />
          <FaFacebookF
            style={{ width: "22px", height: "22px", color: "black" }}
            className="hover:scale-105 cursor-pointer"
          />
          <FaXTwitter
            style={{ width: "22px", height: "22px", color: "black" }}
            className="hover:scale-105 cursor-pointer"
          />
          <FaSkullCrossbones
            style={{ width: "22px", height: "22px", color: "black" }}
            className="hover:scale-105 cursor-pointer"
          />
        </div> */}
      </div>
      <div className="flex flex-row gap-2 md:mx-[70px] mx-5 mt-10 mb-16">
        <div
          className="w-[33%] md:h-[600px] h-[350px] bg-center bg-contain bg-no-repeat  md:block hidden"
          style={{ backgroundImage: "url('/assets/images/about/about-1.jpg')" }}
        ></div>
        <div
          className="md:w-[33%] w-full md:h-[600px] h-[500px] md:bg-center bg-contain  bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/about/about-2.jpg')" }}
        ></div>
        <div
          className="w-[33%] md:h-[600px] h-[350px] bg-center bg-contain bg-no-repeat md:block hidden"
          style={{ backgroundImage: "url('/assets/images/about/about-3.jpg')" }}
        ></div>
      </div>
    </div>
  );
};
