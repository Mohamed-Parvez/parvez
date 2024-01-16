import React from "react";
import Button from "../ui/button";

const Contact = () => {
  return (
    <section id="contact" className="mb-40 mt-12 md:mt-40">
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
      <div className="flex-between max-w-[1440px]">
        <div>
          <div className="flex-start mx-auto max-w-[1440px] flex-col gap-20 2xl:mx-auto">
            <div className="flex w-full max-w-[1060px] items-start justify-between">
              <div className="max-w-[660px]">
                <p className="heading4 md:heading3 lg:heading2 text-black">
                  Have an awesome idea? Lets bring it to life.
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-[1060px] items-start justify-between">
              <div className="flex-between max-w-[660px] gap-5">
                <input
                  placeholder="Your Name"
                  className="border-b border-b-black p-4"
                />
                <input
                  placeholder="Your Email"
                  className="border-b border-b-black p-4"
                />
              </div>
            </div>

            <div className="flex w-full max-w-[1060px] items-start justify-between">
              <div className="flex-between max-w-[660px] gap-5">
                <input
                  placeholder="Your Message"
                  className="border-b border-b-black p-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-start flex-col gap-24">
          <div className="flex-start max-w-[286px] flex-col">
            <p className="base-bold text-black">Contact Details</p>
            <p className="paragraph-regular mt-2 text-grey-700">
              clash.parwesh@gmail.com
            </p>
          </div>
          <div className="flex-start max-w-[286px] flex-col gap-4">
            <p className="base-bold text-black">Digital Link</p>
            <div>
              <p>Github</p>
            </div>
            <div>
              <p>LinkedIn</p>
            </div>
            <div>
              <p>X</p>
            </div>
          </div>
        </div>
      </div>

      <Button
        label="Send Message"
        variant="send-message-btn"
        type="button"
        href="/"
      />
    </section>
  );
};

export default Contact;
