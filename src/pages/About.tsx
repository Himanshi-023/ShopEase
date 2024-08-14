import React, { useContext } from "react";
import HeroSection from "../Components/HeroSection";
import { useProductContext } from "../Context.tsx/ProductContext";
import { NavLink } from "react-router-dom";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdOutlineImageSearch } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";

const About: React.FC = () => {
  return (
    <>
      <section className="flex justify-center mt-14   gap-10">
        <div className="flex  gap-5 ">
          <img
            className="  h-[530px] rounded-xl shadow-2xl"
            src="/images/Heroboy.jpg"
            alt=""
          />
          <img
            className=" h-[530px] rounded-xl shadow-2xl mt-20"
            src="/images/HeroGirl.png"
            alt=""
          />
        </div>

        <div className="w-[38%] mt-32">
          <h1 className="font-bold text-5xl mt-10  text-primary">About Us</h1>
          <p className="mt-3 text-gray-600">
            At ShopEase, we believe in making your shopping experience
            effortless and enjoyable. Our mission is to provide you with the
            best products at unbeatable prices, all while ensuring a seamless
            and satisfying shopping journey. We aim to become your go-to
            destination for all your shopping needs, offering a diverse range of
            products that cater to every aspect of your life.
          </p>
          <NavLink to="/products">
            {" "}
            <button className="bg-primary mt-5  hover:text-black   text-white py-3 px-5  rounded-md hover:bg-ternary">
              Check Our Products
            </button>
          </NavLink>
        </div>
      </section>

      <section>
        <div className="text-center flex flex-col items-center mt-10 ">
          <h1 className="font-bold text-4xl mt-10   text-primary ">
            {" "}
            Our Story
          </h1>
          <p className="mt-5 w-[60%] text-gray-600 bg-zinc-100 rounded-xl px-6 py-12 border border-zinc-300 border-1 ">
            Founded in 2023, ShopEase started as a small online store with a big
            dream: to bring the best products from around the world right to
            your doorstep. Over the years, we've grown into a trusted e-commerce
            platform that caters to millions of customers worldwide. Our success
            is driven by our passion for quality, value, and exceptional
            customer service.
          </p>
        </div>

        <div className="text-center flex flex-col items-center mt-10 ">
          <h1 className="font-bold text-4xl mt-10   text-primary">
            {" "}
            Our Vision and Mission
          </h1>
          <p className="mt-5 w-[60%]    text-gray-600 bg-zinc-100 rounded-xl px-6 py-12 border border-zinc-300 border-1">
            Our vision is to revolutionize the online shopping experience by
            combining the latest technology with a customer-centric approach. We
            aim to make shopping not just an activity, but a delightful
            experience. Our mission is to continuously innovate and expand our
            offerings to meet the evolving needs of our customers, ensuring they
            find exactly what they are looking for, every time they visit
            ShopEase.
          </p>
        </div>
      </section>

      <div className="text-center flex flex-col items-center mt-10 ">
        <h1 className="font-bold text-4xl mt-10   text-primary">
          {" "}
          What We Offer
        </h1>
      </div>

      <section className="flex justify-evenly  mt-16 gap-10 px-10   ">
        <div className="flex flex-col justify-center items-center text-center space-y-3  rounded-xl bg-zinc-100  h-60 w-1/2 border border-zinc-300 border-1">
          <button className="scale-150">
            <FaArrowUpShortWide className="scale-150 text-primary" />
          </button>
          <h1 className="text-center font-semibold text-xl">
            Wide Range of Products
          </h1>
          <p className="text-gray-600 ">
            From electronics and fashion to home goods and beauty products, we
            offer a diverse selection of items to meet all your needs. Our
            product categories are meticulously curated to ensure that you have
            access to the latest trends and timeless classics.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-3  rounded-xl bg-zinc-100  h-60 w-1/2 border border-zinc-300 border-1">
          <button className="scale-150">
            <FaShippingFast className="scale-150 text-primary" />
          </button>
          <h1 className="text-center  font-semibold text-xl">
            {" "}
            Fast and Reliable Shipping
          </h1>
          <p className="text-gray-600 ">
            We understand the importance of timely delivery, so we strive to get
            your orders to you as quickly as possible. Our logistics team works
            around the clock to ensure your purchases reach you in perfect
            condition and on time.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center rounded-xl   bg-zinc-100  space-y-3 h-60 w-1/2 border border-zinc-300 border-1">
          <button className="scale-150">
            <BiSolidOffer className="scale-150 text-primary" />
          </button>
          <h1 className="text-center  font-semibold text-xl">
            {" "}
            Exclusive Deals
          </h1>
          <p className="text-gray-600">
            Enjoy amazing discounts, special offers, and exclusive deals that
            you won't find anywhere else. Our daily deals and seasonal sales are
            designed to give you the best value for your money.
          </p>
        </div>
      </section>

      <div className="text-center flex flex-col items-center mt-10 ">
        <h1 className="font-bold text-4xl mt-10   text-primary"> Our Values</h1>
      </div>
      <section className="flex justify-evenly  mt-10 gap-10 px-10   ">
        <div className="flex flex-col justify-center items-center text-center rounded-xl   bg-zinc-100  space-y-3 h-60 w-1/2 border border-zinc-300 border-1 ">
          <button className="scale-150">
            <RiServiceFill className="scale-150 text-primary" />
          </button>
          <h1 className="text-center  font-semibold text-xl">
            {" "}
            Customer Satisfaction
          </h1>
          <p className="text-gray-600">
            Your happiness is our top priority. We're committed to providing
            excellent customer service and a hassle-free shopping experience.
            Our customer support team is always ready to assist you with any
            queries or concerns.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center rounded-xl   bg-zinc-100  space-y-3 h-60 w-1/2 border border-zinc-300 border-1">
          <button className="scale-150">
            <MdOutlineImageSearch className="scale-150 text-primary" />
          </button>
          <h1 className="text-center  font-semibold text-xl"> Innovation</h1>
          <p className="text-gray-600">
            We're constantly exploring new ways to improve our platform, enhance
            your shopping experience, and bring you the latest trends. Our tech
            team is dedicated to implementing cutting-edge features that make
            shopping more intuitive and enjoyable.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center rounded-xl   bg-zinc-100  space-y-3 h-60 w-1/2 border border-zinc-300 border-1">
          <button className="scale-150">
            <IoShieldCheckmark className="scale-150 text-primary" />
          </button>
          <h1 className="text-center  font-semibold text-xl">
            {" "}
            Quality Assurance
          </h1>
          <p className="text-gray-600">
            We carefully select and vet our products to ensure they meet our
            high standards of quality and durability. Our quality control team
            conducts rigorous checks to ensure that every product you receive is
            of the highest quality.
          </p>
        </div>
      </section>

     
    </>
  );
};

export default About;
