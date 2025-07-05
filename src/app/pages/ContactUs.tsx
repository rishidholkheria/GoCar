import SplitText from "@/components/ui/SplitText";
import React, { useState } from "react";
import { BackgroundBeamsWithCollisionDemo } from "../components/BackgroundWithBeams";
import { CardHoverEffectDemo } from "../components/CardHoverEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = () => {
    const ownerNumber = "917087079696";

    const message = `*Hello,👋*

My name is *${name}*.
*Email:* ${email}
*Phone:* ${mobile}

*I have a query regarding cab booking through GoCcar🚗:*

${userMessage}

Looking forward to your assistance.

*Best regards,*
${name}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative w-full h-auto px-4">
      <SplitText
        text="Customer Says :)"
        className="text-4xl mt-10 font-bold text-center md:text-start"
      />
      <CardHoverEffectDemo />
      <div className="w-full py-10 flex flex-col md:flex-row h-full">
        {/* Left Side */}
        <div className="w-full md:w-3/5 justify-start px-4 py-7">
          <SplitText
            text="Reach out to us!"
            className="text-4xl mt-10 font-bold text-center md:text-start"
          />

          <div className="flex justify-center mt-6">
            <img
              src="/assets/logoGIF.gif"
              alt="Contact Us Animation"
              className="w-64 h-auto"
            />
          </div>

          <p className="text-center text-2xl font-semibold text-gray-900 mt-4">
            Own your choice –{" "}
            <span className="text-primary font-bold text-amber-500">GOCCAR!</span>
          </p>

          <div className="flex flex-col md:flex-row gap-5 mt-4 md:absolute md:bottom-7 md:w-full">
            {[
              {
                icon: faPhone,
                text: "+91-8800049696",
                href: "tel:+918800049696",
              },
              {
                icon: faPhone,
                text: "+91-9759961199",
                href: "tel:+919759961199",
              },
              {
                icon: faEnvelope,
                text: "goccarservice@goccar.in",
                href: "mailto:goccarservice@goccar.in",
              },
            ].map(({ icon, text, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="flex items-center gap-3 px-6 py-3 rounded-3xl bg-white text-gray-800 shadow-md transition-all duration-300 ease-in-out transform hover:bg-orange-500 hover:text-white hover:scale-105"
              >
                <FontAwesomeIcon icon={icon} className="text-lg" />
                <p className="font-medium">{text}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/5 m-0 md:m-8 p-6 bg-amber-400 md:rounded-bl-4xl md:rounded-tl-4xl relative">
          {/* <BackgroundBeamsWithCollisionDemo/> */}
          <div>
            <h3 className="text-3xl font-extrabold py-4">Contact Us</h3>
            <input
              type="text"
              className="w-11/12 bg-white p-2 rounded-lg mt-5 outline-0"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="w-11/12 bg-white p-2 rounded-lg mt-7 outline-0"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              className="w-11/12 bg-white p-2 rounded-lg mt-7 outline-0"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="w-11/12 min-h-20 bg-white px-2 py-1 rounded-lg mt-7 outline-0"
              placeholder="Your doubt or any other message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#151001] w-2/5 mt-7 text-white rounded-4xl p-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
