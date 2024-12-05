import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
  title: string;
  handleClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ title, handleClick }) => {
  return (
    <div
      className="flex flex-row gap-2 justify-center items-center hover:scale-105 transition-transform duration-100 hover:text-[#FFE533]"
      onClick={handleClick}
    >
      <button className="border-none text-[#FFCC02] font-futuraLight uppercase md:text-xl text-xs ">
        {title}
      </button>
      <FaArrowRight style={{ color: "#FFCC02" }} />
    </div>
  );
};
