import { useState } from "react";
import { PurchaseForm } from "../Components/PurchaseForm/PurchaseForm";
import { IoMdClose } from "react-icons/io";

export const ShopCard = ({
  image,
  price,
  name,
}: {
  image: string;
  price: number;
  name: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="md:w-[25vw] w-[91vw] h-[400px]  ">
      <div
        className="w-full h-[75%] overflow-hidden bg-cover bg-center hover:scale-105 transition-all duration-300"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="w-full h-[25%]">
        <div className="flex flex-col justify-end gap-1 mt-3">
          <h1 className="text-xl font-futuraLight tracking-wider font-extralight">
            {name}
          </h1>
          <div className="flex flex-row justify-between items-center ">
            {/* <div>
              <p className="text-sm font-futuraLight tracking-wider font-extralight">
                Starts
              </p>
              <p className="text-xl font-futuraLight tracking-wider font-extralight">
                ${price}
              </p>
            </div> */}
            <button
              onClick={openModal}
              className="border-[1px] border-black px-5 font-futuraLight tracking-wide hover:bg-black hover:text-white h-[30px] "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg md:w-[60%] w-[90%] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              aria-label="Close modal"
            >
              <IoMdClose size={24} />
            </button>
            <PurchaseForm name={name} />
          </div>
        </div>
      )}
    </div>
  );
};
