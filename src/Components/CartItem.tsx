import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import FormatPrice from "../Helper/FormatPrice";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../Context.tsx/CartContext";

interface CartItemProps {
  id: string;
  name: string;
  color: string;
  amount: number;
  image: string;
  price: number;
  max: number;

}

const CartItem: React.FC<CartItemProps> = (cur) => {

  const {deleteItem ,setDecrease,setIncrease}=useCartContext();
  const { id, name, color, amount, image, price ,max} = cur;
  
  return (
    <section className="flex justify-between items-center my-4  px-24 ">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-20 h-20 object-cover mr-4"/>
        <div>
          <p>{name}</p>
          <p>Color: {color}</p>
        </div>
      </div>
      <div>
     <FormatPrice price={price}/>
      </div>
      <div>
      <CartAmountToggle
        amount={amount}
        setIncrease={()=>setIncrease(id)}
        setDecrease={()=>setDecrease(id)}
      />
      </div>
      <div>
      <p><FormatPrice price={price*amount}/></p>
      </div>
      <div>
        <button className="text-red-500  scale-150 "  onClick={()=>deleteItem(id)}><MdDelete className="scale-125" /></button>
      </div>



    </section>
  );
};

export default CartItem;
