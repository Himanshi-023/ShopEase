import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context.tsx/CartContext";

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
  colors: string[];
}

interface AddToCartProps {
  product: Product;
}

const AddtoCart: React.FC<AddToCartProps> = ({ product }) => {
  const { AddInCart } = useCartContext();
  const { colors, stock, id } = product; // Extract from single product
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="space-x-4 mt-3 flex">
        {colors.map((cur, index) => (
          <button
            key={index}
            className="rounded-full flex items-center justify-center"
            style={{ backgroundColor: cur, width: "27px", height: "27px" }}
            onClick={() => setColor(cur)}
          >
            {color === cur ? (
              <FaCheck className="text-white" style={{ fontSize: "0.8rem" }} />
            ) : null}
          </button>
        ))}
      </div>

      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />

      <NavLink to="/Cart">
        <button
          className="mt-3 bg-primary text-white py-3 rounded-sm px-2 hover:bg-ternary hover:text-black"
          onClick={() => AddInCart(id, color, amount, product)}
        >
          ADD TO CART
        </button>
      </NavLink>
    </>
  );
};

export default AddtoCart;
