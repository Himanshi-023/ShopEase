import React from "react";

interface ProductState{ //type of state 
  isLoading: boolean;
  isError: boolean;
  products:any[]; 
  featureProducts: any[];
  SingleProductLoding:boolean,
  singleProduct:{}
}


type Action={type:"SET_LOADING"}|{ type: "SET_API_DATA"; payload:any[] }|{type:"API_ERROR"} |{type:"SET_SINGLE_LOADING"}|{type:"SET_SINGLE_PRODUCT", payload:{}}|{type:"SET_SINGLE_ERROR"};  //types pf action 

const ProductReducer = (state:ProductState, action:Action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((cur) => {
        return cur.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };




      case "SET_SINGLE_LOADING":
      return{...state, SingleProductLoding:true
      }


      case "SET_SINGLE_PRODUCT":
        return{
          ...state,
          SingleProductLoding:false,
          singleProduct:action.payload,
        }


        case "SET_SINGLE_ERROR":
          return {
            ...state,
            SingleProductLoding : false,
            isError: true,
          }



    default:
      return state;
  }
};

export default ProductReducer;




