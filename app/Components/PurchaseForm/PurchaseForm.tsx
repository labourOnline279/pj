import Image from "next/image";
import { FormInputBox } from "../FormInputBox/FormInputBox";
import { FormRadioButton } from "../FormRadioButton";
import { useState } from "react";
import Logo from "@/public/assets/svg/omerLogo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  reasonOfPurchase: Yup.string().required("Reason of purchase is required"),
  size: Yup.string().required("Please select a size"),
  message: Yup.string().required("Message is required"),
});

export const PurchaseForm = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      reasonOfPurchase: "",
      size: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            productName: name,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        toast.success("Query sent successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Failed to send query. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleOptionSelect = (option: string) => {
    formik.setFieldValue("size", option);
    setIsOpen(false);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-2 md:gap-7"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col gap-2 text-center md:text-left mb-4 md:mb-0">
          <h1 className="font-futuraLight text-2xl md:text-4xl">
            Purchase Query
          </h1>
          <p className="font-futuraLight text-sm md:text-xl">
            Product Query: {name}
          </p>
        </div>
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          priority
          className="mb-4 md:mb-0 hidden md:block"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 justify-start items-center">
            <h1 className="font-futuraLight text-gray-600 text-[12px] md:text-[14px]">
              Please fill in details our team will revert back in 2-3 business
              days
            </h1>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="w-full mb-2 md:mb-0">
              <FormInputBox
                name="fullName"
                type="text"
                label="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.fullName}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="w-full md:w-[50%] mb-2 md:mb-0">
            <FormInputBox
              name="phoneNumber"
              type="tel"
              label="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            )}
          </div>
          <div className="w-full md:w-[50%]">
            <FormInputBox
              name="email"
              type="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2 items-start md:items-center">
          <div className="w-full md:w-[50%] mb-2 md:mb-0">
            <FormInputBox
              name="reasonOfPurchase"
              type="text"
              label="Reason of Purchase"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reasonOfPurchase}
            />
            {formik.touched.reasonOfPurchase &&
              formik.errors.reasonOfPurchase && (
                <div className="text-red-500 text-sm">
                  {formik.errors.reasonOfPurchase}
                </div>
              )}
          </div>
          <div className="w-full md:w-[50%] relative">
            <label htmlFor="dropdown" className="font-futuraLight text-[13px]">
              Select an option
            </label>
            <div className="relative">
              <input
                type="text"
                id="size"
                name="size"
                className="w-full px-3 md:py-3 py-1 outline-none border-[0.5px] text-gray-400 font-futuraLight border-black bg-[#FAFAFA] cursor-pointer"
                readOnly
                onClick={() => setIsOpen(!isOpen)}
                value={formik.values.size}
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            {formik.touched.size && formik.errors.size && (
              <div className="text-red-500 text-sm">{formik.errors.size}</div>
            )}
            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 shadow-lg">
                <ul className="py-1">
                  <li
                    className="px-3 py-2 font-futuraLight text-gray-400 md:text-base text-[14px] hover:text-black cursor-pointer border-b-[1px] border-gray-400"
                    onClick={() =>
                      handleOptionSelect(
                        'Small (S) (Image Size 16.5" x 11") $250'
                      )
                    }
                  >
                    Small (S) (Image Size 16.5" x 11") $250
                  </li>
                  <li
                    className="px-3 py-2 font-futuraLight text-gray-400 md:text-base text-[14px] hover:text-black cursor-pointer border-b-[1px] border-gray-400"
                    onClick={() =>
                      handleOptionSelect(
                        'Medium(M) (image size 20" x 13.4") $350'
                      )
                    }
                  >
                    Medium(M) (Image Size 20" x 13.4") $350
                  </li>
                  <li
                    className="px-3 py-2 font-futuraLight text-gray-400 hover:text-black md:text-base text-[14px] cursor-pointer"
                    onClick={() =>
                      handleOptionSelect(
                        'Large (L) ( Image Size16.5" x 11") $450'
                      )
                    }
                  >
                    Large (L) ( Image Size16.5" x 11") $450
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-start items-center">
            <h1 className="font-futuraLight text-[15px] md:text-[18px]">
              Message (if Any )
            </h1>
            <p className="font-futuraLight text-[13px] text-[#979494]">
              (required)
            </p>
          </div>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full border-[0.5px] border-black bg-[#FAFAFA] font-futuraLight"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="w-full md:w-[70%] mb-4 md:mb-0">
            <h1 className="font-futuraLight text-[10px] md:text-[15px] text-center md:text-left">
              Printed on fine art archival photo matte paper rating up to 175
              years. PH neutral, Acid and OBA free.
            </h1>
          </div>
          <button
            type="submit"
            className="border-[1px] border-black px-5 font-futuraLight tracking-wide hover:bg-black hover:text-white h-[40px] md:h-[30px] w-full md:w-auto"
            disabled={isLoading}
          >
            {isLoading ? "Sending" : "Send Query"}
          </button>
        </div>
      </div>
    </form>
  );
};
