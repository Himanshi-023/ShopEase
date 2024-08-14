import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

interface CartToggle {
  amount: number;
  setIncrease: any;
  setDecrease: any;
}

const CartAmountToggle: React.FC<CartToggle> = ({
  amount,
  setIncrease,
  setDecrease,
}) => {
  return (
    <div className="flex gap-8 mt-4 text-lg font-medium">
      <button onClick={setDecrease}>
        <FiMinus className="scale-150   text-gray-700" />
      </button>
      {amount}
      <button className="scale-150 text-gray-700">
        <IoAddOutline onClick={setIncrease} />
      </button>
    </div>
  );
};

export default CartAmountToggle;
