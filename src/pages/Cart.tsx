import React from "react";
import { useCartContext } from "../Context.tsx/CartContext";
import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_amount, shipping_fees } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="text-center   space-y-6">
        <div className="flex justify-center ">
          <img
            src="https://i.pinimg.com/236x/bc/bd/99/bcbd99c43aea08b85d3c3a6b80a47b56.jpg"
            alt="fvf"
          />
        </div>
        <h1 className="text-2xl">OOPS,Your Cart is Empty </h1>

        <NavLink to="/products">
          {" "}
          <button className="  bg-primary hover:bg-primary/90  rounded-lg  text-white font-semibold mt-4  py-3 px-2">
            GO SHOOPING !!
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-evenly mt-3">
        <p>items</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
      <br />
      <hr className="border border-1  border-gray-400 " />

      <div>
        {cart.map((cur: any) => {
          return <CartItem key={cur.id} {...cur} />;
        })}
      </div>

      <div className="flex justify-between  px-20 ">
        <NavLink to="/products">
          {" "}
          <button className="bg-primary  hover:bg-ternary py-3 px-2">
            CONTINUE SHOPPING{" "}
          </button>
        </NavLink>
        <button
          className="bg-red-500  hover:bg-red-600 hover:text-white   py-3 px-2"
          onClick={clearCart}
        >
          CLEAR CART
        </button>
      </div>

      <div className=" ml-[1170px]  border rounded-md   w-[18%]  bg-zinc-100 mt-6  text-center py-10 space-y-4  ">
        <p>
          Subtotal{" "}
          <span className="text-black font-semibold ml-10">
            {" "}
            <FormatPrice price={total_amount} />
          </span>
        </p>

        <p>
          Shipping fee{" "}
          <span className="font-semibold ml-10">
            <FormatPrice price={shipping_fees} />
          </span>
        </p>
        <hr className="border border-1 border-gray-400 w-52 mx-8" />
        <p>
          Order Total{" "}
          <span className="font-semibold text-primary ml-7">
            <FormatPrice price={total_amount + shipping_fees} />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Cart;
