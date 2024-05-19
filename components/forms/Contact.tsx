"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import React from "react";
import { SubmitButton } from "../ui/button";
import { LinkLogoLarge, LinkLogoSmall } from "../ui/linklogo";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  async function onSubmit(formData: FormInput) {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    }).then(() => {
      // Toast notification
      toast.success("Your message has been sent successfully");
    });

    reset();
  }

  return (
    <section id="contact" className="my-40">
      <div>
        <h1
          className="light-primary-gradient 
          text-center text-[36px] font-normal
          tracking-[-0.25%] xs:text-[52px]
          md:text-[78px] lg:text-[120px] lg:font-normal"
        >
          CONTACT
        </h1>
      </div>
      <div className="md:flex-between mx-auto mt-5 max-w-[1024px] gap-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-start mx-auto max-w-[1024px] flex-col space-y-10 md:space-y-20 2xl:mx-auto ">
            <div className="flex w-full max-w-[1060px] items-start justify-between">
              <div className="max-w-[660px]">
                <p className="heading3 md:heading3 lg:heading2 text-black">
                  Have an awesome idea? Lets bring it to production.
                </p>
              </div>
            </div>

            <div className="xs:flex-between w-full max-w-[736px] gap-4 space-y-10 xs:space-x-3 xs:space-y-0">
              <div className="group relative z-0 w-full">
                <input
                  type="text"
                  className="peer block w-full max-w-[356px] appearance-none border-0 border-b border-b-black bg-transparent px-0 
                  py-4 text-start focus:outline-none focus:ring-0"
                  placeholder=""
                  required
                  {...register("name")}
                />
                <label
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-grey-100
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium
                rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Your Name
                </label>
              </div>

              <div className="group relative z-0 w-full">
                <input
                  type="text"
                  className="peer block w-full max-w-[356px] appearance-none border-0 border-b border-b-black bg-transparent 
                  px-0 py-4 text-start focus:outline-none focus:ring-0"
                  placeholder=""
                  required
                  {...register("email")}
                />
                <label
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-grey-100
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium
                rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Your Email
                </label>
              </div>
            </div>

            <div className="flex-between w-full max-w-[744px] space-y-10">
              <div className="group relative z-0 w-full">
                <input
                  type="text"
                  className="peer block w-full max-w-[744px] appearance-none border-0 border-b border-b-black bg-transparent 
                  px-0 py-4 pb-24 text-start focus:outline-none focus:ring-0"
                  placeholder=""
                  required
                  {...register("message")}
                />
                <label
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-grey-100
                duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium
                rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Your Message
                </label>
              </div>
            </div>
          </div>

          <SubmitButton
            type={"submit"}
            disabled={isSubmitting}
            label="Send Message"
            variant="send-message-btn"
          />
        </form>

        <div className="flex-start mt-20 flex-col gap-8 md:mt-0 md:gap-24">
          <div className="flex-start max-w-[286px] flex-col">
            <p className="heading4 lg:base-bold text-black">Contact Details</p>
            <p className="small-regular lg:paragraph-regular mt-2 text-grey-700">
              clash.parwesh@gmail.com
            </p>
          </div>
          <div className="flex-start max-w-[286px] flex-col gap-4">
            <p className="heading4 lg:base-bold text-black">Social Links</p>
            <LinkLogoSmall />
            <LinkLogoLarge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
