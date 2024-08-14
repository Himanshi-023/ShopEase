import React, {
  createContext,
  ReactNode,
  useReducer,
  useContext,
  useEffect,
} from "react";
import CartReducer from "../reducer/CartReducer";
import { json } from "react-router-dom";

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

interface stateType {
  cart: any[];
  total_item: string;
  total_amount: string;
  shipping_fees: number;
}

const getLocalCartData = (): any[] => {
  let newCartData = localStorage.getItem("cartItem"); //localStorage.getItem returns a string or null, not an array.

  if (newCartData === null || newCartData === "[]") {
    //
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};
const cartContext = createContext<stateType | any>(undefined);

const initialState: stateType = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fees: 5000,
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const AddInCart = (
    id: string,
    color: string,
    amount: number,
    product: Product
  ) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } }); //here this product hold the data about single product
  };

  console.log("THIS IS CART", state.cart);

  const deleteItem = (id: any) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  
  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    
    localStorage.setItem("cartItem", JSON.stringify(state.cart));
  }, [state.cart]);


  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setDecrease = (id: string) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const setIncrease = (id: string) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  return (
    <cartContext.Provider
      value={{
        ...state,
        AddInCart,
        deleteItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = (): stateType | any => {
  return useContext(cartContext);
};

export { cartContext, CartProvider, useCartContext };
