import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-primary mt-72 pb-5 sm:h-96 text-white flex items-center justify-evenly font-poppins relative text-sm">
        <div className=" sm:mt-24 mt-16 sm:w-[35%]  mx-6 ">
          <p className="font-bold text-xl sm:text-5xl">GET IN TOUCH</p>
          <h1 className=" sm:mt-6 sm:font-semibold text-xs sm:text-base">
            Hey! WE are looking forward
          </h1>
          <h1 className="   sm:font-semibold  text-xs sm:text-base">
            to start a journey with you!
          </h1>
          <p className="font-extralight text-sm mt-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aliquid est magni neque a, corporis quam quibusdam consectetur
            aspernatur eaque.
          </p>

          <div className="flex mt-8 space-x-4  ">
            <FaFacebook className="scale-150 hover:text-ternary" />
            <FaInstagram className="scale-150 hover:text-ternary" />
            <IoLogoWhatsapp className="scale-150 hover:text-ternary" />
            <FaXTwitter className="scale-150 hover:text-ternary" />
            <FaYoutube className="scale-150 hover:text-ternary " />
          </div>

          <div className=" absolute bg-white border border-gray-200 h-24  sm:h-44 sm:w-[78%] sm:right-40 right-3 bottom-[240px] sm:bottom-80 shadow-xl   rounded-3xl flex  justify-between items-center   ">
            <div className="text-zinc-600 font-medium px-8 sm:px-16 text-sm">
              <h1>Ready to get started?</h1>
              <h1>Talk to Us Today</h1>
            </div>

            <div className=" sm:px-16 px-3 ">
              <button className="bg-primary py-2 px-2 sm:px-4   hover:bg-ternary hover:text-black ">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2 hidden sm:block">
          <h1>Subscribe to get important updates!</h1>
          <form
            action="#"
            autoComplete="off"
            className="flex flex-col space-y-3"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Your E-MAIL"
              className="border py-3 text-black text-sm px-2  outline-none border-gray-400 rounded-md"
            />
            <div>
              {" "}
              <input
                type="submit"
                value="send"
                className="border-2 border-white px-10  py-2  rounded-sm  "
              />
            </div>
          </form>
        </div>


        <div className=" h-32 space-y-2 hidden sm:block">
            <h1>Call Us</h1>
            
            <a href="tel:+919760764436">+91 9760764436</a>
        </div>


        
      </footer>
    </>
  );
};

export default Footer;
