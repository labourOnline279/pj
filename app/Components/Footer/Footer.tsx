import { usePathname, useRouter } from "next/navigation";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center  items-center gap-7 bg-[#F6F6F6]">
      <h1 className=" font-futuraLight text-4xl tracking-wider">Newsletter</h1>
      <h1 className=" font-futuraLight">
        Get notified when new projects drop.
      </h1>
      <div className="flex flex-row gap-5 px-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="px-3 placeholder:font-futuraLight placeholder:tracking-wider py-3 outline-none"
        />
        <button className="border-2 border-black px-4 font-futuraLight tracking-wide uppercase hover:bg-black hover:text-white ">
          Subscribe
        </button>
      </div>
      <h1 className=" font-futuraLight text-6xl tracking-wider mt-7">Follow</h1>
      <div className="flex flex-row justify-center items-center gap-3">
        <FaYoutube
          onClick={() =>
            window.open("https://www.youtube.com/@omarbazaz", "_blank")
          }
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          className="hover:scale-110 "
        />
        <FaInstagram
          onClick={() =>
            window.open("https://www.instagram.com/omarbazaz/", "_blank")
          }
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          className="hover:scale-110"
        />
        {/* <FaFacebookF
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          className="hover:scale-110"
        /> */}
        <FaXTwitter
          onClick={() => window.open("https://x.com/omarbazaz", "_blank")}
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          className="hover:scale-110"
        />
      </div>
      <div className="text-center text-sm font-futuraLight mt-10 px-4 ">
        <p className="mb-2">
          All photographs featured on this website are the exclusive property of
          Omar Bazaz. Unauthorized use, reproduction, or distribution of these
          images is strictly prohibited.
        </p>
        <p>
          If you wish to use or acquire any photograph, please visit our{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => router.push("/shop")}
          >
            Shop Page
          </span>{" "}
          or contact us directly for licensing and purchase details.
        </p>
      </div>
      <div
        className={`text-sm font-futuraLight mt-4 ${
          pathname !== "/contact" ? "hidden" : ""
        }`}
      >
        <a
          href="https://ufksolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          Powered By UFK Solutions
        </a>
      </div>
    </div>
  );
};
