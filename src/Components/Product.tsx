import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

interface productProps{
  id:string,
  name:string,
  image:string,
  price:number,
  category:string
}

const Product: React.FC<productProps> = (cur) => {
  const { id, name, image, price, category } = cur;
  return (
    <NavLink to={`/SinglePage/${id}`}>
      <div>
        <figure className="flex flex-col items-center">
          <img
            className="h-[50%] w-[70%] rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            src={image}
            alt=""
          />
          <div className="flex space-x-36 mt-4">
            <h1>{name}</h1>
            <h1 className="text-primary font-semibold">{<FormatPrice price={price}/>}</h1>
          </div>
        </figure>
      </div>
    </NavLink>
  );
};

export default Product;
