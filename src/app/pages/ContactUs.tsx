import SplitText from "@/components/ui/SplitText";
import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "../components/BackgroundWithBeams";
import { CardHoverEffectDemo } from "../components/CardHoverEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="relative w-full h-auto px-4">
      <div className="w-full py-10 flex flex-col md:flex-row h-full">
        {/* Left Side */}
        <div className="w-full md:w-3/5 justify-start px-4 py-7">
          <SplitText
            text="Customer Says :)"
            className="text-4xl mt-10 font-bold text-center md:text-start"
          />
          <CardHoverEffectDemo />
          <p className="px-10 py-5 text-[#8c8a8a] text-lg">
            We would love to hear from you. Contact us for any inquiries or
            questions.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/5 m-0 md:m-8 p-6 bg-amber-400 md:rounded-bl-4xl md:rounded-tl-4xl relative">
          {/* <BackgroundBeamsWithCollisionDemo/> */}
          <div>
            <h3 className="text-3xl font-extrabold py-4">Contact Us</h3>
            <input
              type="text"
              className="w-11/12 bg-white p-3 rounded-lg mt-5"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="w-11/12 bg-white p-3 rounded-lg mt-7"
              placeholder="Mobile Number"
            />
            <input
              type="text"
              className="w-11/12 bg-white p-3 rounded-lg mt-7"
              placeholder="Email"
            />
            <button className="bg-[#151001] w-2/5 mt-7 text-white rounded-4xl p-4">
              Submit
            </button>
          </div>

          {/* Contact Info */}
          <h2 className="text-lg px-1 py-2 font-bold mt-8 md:absolute md:bottom-20">
            Reach out here!
          </h2>
          <div className="flex flex-col md:flex-row gap-5 mt-4 md:absolute md:bottom-7 md:w-full">
            <div className="flex gap-2 justify-start items-center cursor-pointer">
              <FontAwesomeIcon icon={faPhone} />
              <p>879727299</p>
            </div>
            <div className="flex gap-2 justify-start items-center cursor-pointer">
              <FontAwesomeIcon icon={faPhone} />
              <p>879727299</p>
            </div>
            <div className="flex gap-2 justify-start items-center cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>goCar@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
