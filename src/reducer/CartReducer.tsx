import React from "react";

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

const initialState: stateType = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fees: 500,
};

type ActionType =
  | {
      type: "ADD_TO_CART";
      payload: { id: string; color: string; amount: number; product: Product };
    }
  | { type: "DELETE_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "SET_DECREASE"; payload: string }
  | { type: "SET_INCREASE"; payload: string }
  |{type:"CART_TOTAL_ITEM"}
  |{type:"CART_TOTAL_PRICE"}

const CartReducer = (state: stateType = initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload; //here product is a object which contain data about signle product

      let exictingProduct = state.cart.find((cur) => cur.id === id + color);

      if (exictingProduct) {
        let updatedProduct = state.cart.map((cur) => {
          if (cur.id == id + color) {
            let newAmount = cur.amount + amount;
            if (newAmount >= cur.max) {
              newAmount = cur.max;
            }
            return {
              ...cur,
              amount: newAmount,
            };
          } else {
            return cur;
          }
        });

        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "DELETE_ITEM":
      let exceptDelete = state.cart.filter((cur) => cur.id !== action.payload);
      return {
        ...state,
        cart: exceptDelete,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_DECREASE":
      let updatedData = state.cart.map((cur) => {
        //after the map function completes, updatedData contains the updated cart items. The reducer then returns a new state object,
        if (cur.id === action.payload) {
          let decAmount = cur.amount - 1;
          if (decAmount < 1) {
            decAmount = 1;
          }
          return {
            ...cur,
            amount: decAmount,
          };
        } else {
          return cur;
        }
      });

      return {
        //The reducer returns a new state object, spreading the existing state properties (...state) and updating the cart property to updatedData.
        ...state,
        cart: updatedData,
      };




case "SET_INCREASE":
  let updated = state.cart.map((cur) => {
    //after the map function completes, updatedData contains the updated cart items. The reducer then returns a new state object,
    if (cur.id === action.payload) {
      let inAmount = cur.amount +1 ;
      if (inAmount >= cur.max) {
        inAmount=cur.max;
      }
      return {
        ...cur,
        amount: inAmount,
      };
    } else {
      return cur;
    }
  });

  return {
    //The reducer returns a new state object, spreading the existing state properties (...state) and updating the cart property to updatedData.
    ...state,
    cart: updated,
  };



case 'CART_TOTAL_ITEM':
  let items = state.cart.reduce((initialValue,cur)=>{
let {amount}=cur;
initialValue=initialValue+amount;
return initialValue;
  },0)

  return{
    ...state,
    total_item: items
  }


case"CART_TOTAL_PRICE":
let total_price= state.cart.reduce((initialState,cur)=>{
let {price ,amount}=cur;
initialState=initialState+(price* amount);
return initialState;
},0)
return{
  ...state,
  total_amount:total_price
}

    default:
      return state;
  }
};

export default CartReducer;
