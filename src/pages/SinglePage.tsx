import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context.tsx/ProductContext";
import PageNavigation from "../Components/PageNavigation";
import FormatPrice from "../Helper/FormatPrice";
import { TbTruckDelivery, TbExchange } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Image from "../Components/Image";
import Star from "../Components/Star";

import AddtoCart from "../Components/AddtoCart";
import Product from "../Components/Product";

const API = "https://api.pujakaitem.com/api/products/";

interface Product {
  id: string;
  name: string;
  company: string;
  price: number;
  description: string;
  stars: number;
  reviews: number;
  stock: number;
  image: { url: string }[];
  colors: [];
}



const SinglePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const context = useProductContext();

  if (!context) {
    return <p>Error: Context not found</p>;
  }

  const { getSingleProduct, singleProduct, SingleProductLoding } = context;

  const {
    id: identifier,
    name,
    company,
    price,
    description,
    stars,
    reviews,
    stock,
    image,
    colors,
  } = singleProduct as Product;

  console.log("image is", image);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (SingleProductLoding) {
    return <p>Loading.....</p>;
  }

  return (
    <>
      <PageNavigation title={name} />

      <div className="mx-32 flex justify-between items-center mt-7 space-x-10 ">
        <div>
          <Image image={image} />
        </div>

        <div className="w-[100%]">
          <div className="space-y-2   ">
            <h2 className="text-3xl font-semibold">{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p>
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="text-primary font-semibold">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p className="text-base">{description}</p>

            <div className="flex space-x-24">
              <div className="bg-gray-100 hover:text-primary flex items-center justify-center w-14 h-14 rounded-full">
                <TbTruckDelivery className="scale-150" />
              </div>

              <div className="bg-gray-100 hover:text-primary flex items-center justify-center w-14 h-14 rounded-full">
                <TbExchange className="scale-125" />
              </div>
              <div className="bg-gray-100 hover:text-primary flex items-center justify-center  w-14 h-14 rounded-full">
                <AiFillSafetyCertificate className="scale-125" />
              </div>
            </div>

            <div className="flex space-x-12  text-black font-medium  text-xs  ">
              <p>free Delivery</p>
              <p>30 Days Replacement</p>
              <p>2 year Warranty</p>
            </div>

            <br />
            <hr />
            <br />

            <div>
              <p>
                Available:{" "}
                <span className="font-semibold">
                  {stock > 0 ? "In stock" : "Not in stock"}
                </span>
              </p>
              <p>
                Brand: <span className="font-semibold">{company}</span>
              </p>
            </div>

            <div>
              {stock > 0 && <AddtoCart product={singleProduct as Product} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
