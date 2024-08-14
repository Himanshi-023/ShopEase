import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from "../Context.tsx/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
const Nav:React.FC = () => {
 const{total_item}=useCartContext();
 const { loginWithRedirect , isAuthenticated  ,user} = useAuth0();
 const { logout } = useAuth0();
  return (

    <>
      <div className=" text-xs b   lg:text-base  font-normal ">
        <ul className="sm:flex sm:items-center  sm:space-x-10 ">
        <li className="hover:text-primary">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/About">ABOUT</NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/Products">PRODUCTS</NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>


          {isAuthenticated?<button className="bg-primary hover:bg-ternary  text-white hover:text-black rounded-md py-1.5 px-5"onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            LOG OUT
          </button>: <button className="bg-primary hover:bg-ternary  text-white hover:text-black rounded-md py-1.5 px-5" onClick={() => loginWithRedirect()}>
            LOG IN
          </button>}
         {isAuthenticated && <p>{user.name}</p> }
          
          <li>
            <NavLink to="/Cart" className="relative ">
              <AiOutlineShoppingCart className="  hover:text-ternary   scale-150" />
              <span className="bg-primary text-white absolute  left-3  py-0.5 bottom-2 scale-100  text-xs rounded-2xl px-1.5">
                {total_item}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;

//yarn dev --host
