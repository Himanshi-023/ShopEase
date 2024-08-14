import React, { useState } from "react";
import Nav from "./Nav";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

const Header:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-gray-200/70 cursor-pointer  ">
      <div className="flex justify-between items-center sm:mx-10 py-6 mx-4">
        <a href="/"  className="flex space-x-1 ">
          <p className="  text-sm  md:text-xl font-semibold">
            Shop <span className="text-primary hover:text-ternary">Ease</span>
          </p><FaShoppingBag className="mt-1 scale-125 text-primary hover:text-ternary "/>
         
        </a>

        <div className="hidden sm:flex">
          <Nav />
        </div>

        <div className=" sm:hidden">
          <button onClick={handleToggleMenu}>
            {open ? <CgClose size={24} /> : <CgMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden  flex flex-col items-center py-5 ">
          <ul className="space-y-14 flex flex-col items-center ">
            <li className="hover:text-ternary ">
              <NavLink to="/" >
                HOME
              </NavLink>
            </li>
            <li className="hover:text-indigo-600">
              <NavLink to="/About" >
               ABOUT
              </NavLink>
            </li>
            <li className="hover:text-indigo-500">
              <NavLink to="/Products" >
                PRODUCTS
              </NavLink>
            </li>
            <li className="hover:text-indigo-500">
              <NavLink to="/Contact" >
              CONTACT
              </NavLink>
            </li>
            <button className="bg-primary hover:bg-ternary rounded-md py-1.5 px-5">
              LOG IN
            </button>
            <li>
              <NavLink to="/Cart" className="relative" >
                <AiOutlineShoppingCart className="hover:text-ternary scale-150" />
                <span className="bg-primary absolute left-3 py-0.5 bottom-2 scale-100 text-xs rounded-2xl px-1">
                  10
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
