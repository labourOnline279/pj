"use client";

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa";
import { FormInputBox } from "../Components/FormInputBox/FormInputBox";
import { FormRadioButton } from "../Components/FormRadioButton";
import { Button } from "../Components/Button/Button";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      formType: "",
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      formType: Yup.string().required("Purpose is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${values.firstName} ${values.lastName}`,
            email: values.email,
            subject: values.subject,
            message: values.message,
            formType: values.formType,
          }),
        });

        if (response.ok) {
          toast.success("Message sent successfully!");
          formik.resetForm();
        } else {
          toast.error("Failed to send message");
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="flex flex-col w-full pb-[100px]">
      <div className="flex md:flex-col flex-col mt-[200px] md:mx-[70px] mx-5 gap-4">
        <div className="md:w-[50%] w-full flex flex-col md:gap-12 gap-4">
          <h1 className="font-futuraLight md:text-6xl text-5xl">Contact</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-20 items-center">
          <div
            className="w-full md:h-[90vh] h-[50vh] bg-center bg-cover"
            style={{ backgroundImage: "url(assets/images/contact.jpg)" }}
          ></div>
          <div className="w-full">
            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-7"
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-start items-center">
                  <h1 className="font-futuraLight md:text-[18px] text-[15px]">
                    Purpose of email
                  </h1>
                  <p className="font-futuraLight text-[13px] text-[#979494]">
                    (required)
                  </p>
                </div>
                <p className="font-futuraLight text-[13px] text-[#979494]">
                  Select One
                </p>
                <FormRadioButton
                  name={"formType"}
                  label={"Business Inquiries"}
                  onChange={formik.handleChange}
                  value="Business Inquiries"
                />
                <FormRadioButton
                  name={"formType"}
                  label={"Customer Service"}
                  onChange={formik.handleChange}
                  value="Customer Service"
                />
                {formik.touched.formType && formik.errors.formType && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.formType}
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="flex flex-col gap-2 w-full">
                <div className="flex gap-2 justify-start items-center">
                  <h1 className="font-futuraLight md:text-[18px] text-[15px]">
                    Name
                  </h1>
                  <p className="font-futuraLight text-[13px] text-[#979494]">
                    (required)
                  </p>
                </div>
                <div className="flex flex-row w-[100%] gap-2">
                  <div className="w-[50%]">
                    <FormInputBox
                      name={"firstName"}
                      type={"text"}
                      label="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="text-red-500 text-xs">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="w-[50%]">
                    <FormInputBox
                      name={"lastName"}
                      type={"text"}
                      label="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="text-red-500 text-xs">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Email */}

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-start items-center">
                  <h1 className="font-futuraLight md:text-[18px] text-[15px]">
                    Email
                  </h1>
                  <p className="font-futuraLight text-[13px] text-[#979494]">
                    (required)
                  </p>
                </div>
                <FormInputBox
                  name={"email"}
                  type={"email"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              {/* Subject */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-start items-center">
                  <h1 className="font-futuraLight md:text-[18px] text-[15px]">
                    Subject / Order #
                  </h1>
                  <p className="font-futuraLight text-[13px] text-[#979494]">
                    (required)
                  </p>
                </div>
                <FormInputBox
                  name={"subject"}
                  type={"text"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.subject}
                  </div>
                )}
              </div>
              {/* Message */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-start items-center">
                  <h1 className="font-futuraLight md:text-[18px] text-[15px]">
                    Message ( All Spam Will Be Ignored )
                  </h1>
                  <p className="font-futuraLight text-[13px] text-[#979494]">
                    (required)
                  </p>
                </div>
                <textarea
                  name="message"
                  id=""
                  cols={30}
                  rows={5}
                  className="border-[0.5px] border-black bg-[#FAFAFA] font-futuraLight"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.message}
                  </div>
                )}
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="border-2 border-black px-4 font-futuraLight tracking-wide uppercase hover:bg-black hover:text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "SUBMIT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
