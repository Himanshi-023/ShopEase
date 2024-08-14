import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";

import reducer from "../reducer/ProductReducer";
import Product from "../Components/Product";


interface ProductState{  //This interface defines the structure of the state and context.
  isLoading: boolean;
  isError: boolean;
  products:any[]; 
  featureProducts: any[];
  SingleProductLoding:boolean,
  singleProduct:{}
}


// This interface defines the structure of the context value, which includes both the state and the functions.
interface ProductContextType extends ProductState {
  getSingleProduct: (url: string) => Promise<void>;
}


const AppContext = createContext<ProductContextType| undefined>(undefined); //here undifined is type
const API: string = "https://api.pujakaitem.com/api/products";


const initialState:ProductState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  SingleProductLoding:false,
  singleProduct:{}
};
  

const AppProvider = ({ children }: { children: ReactNode }) => 
  {
  const [state, dispatch] = useReducer(reducer, initialState);  //state holds the current state, and dispatch is used to send actions to the reducer.
  //FOR COMPLETE PRODUCTS DATA 
  const getProducts = async (url: string) => {
    dispatch({type:"SET_LOADING"})
   try {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(products);
    dispatch({type:"SET_API_DATA", payload:products});
   }  
   catch (error) {
    dispatch({type:"API_ERROR"})
   }

  };




// FOR SINGLEPRODUCT 
  const getSingleProduct= async(url:string)=>{

    dispatch({type:"SET_SINGLE_LOADING"})
   try {
    const responce= await axios.get(url);
    const signleproduct= await responce.data;  //data object of axios 
    console.log("my single product is ", signleproduct );

  dispatch({type:"SET_SINGLE_PRODUCT", payload: signleproduct});
   } catch (error)
    {
  dispatch({type:"SET_SINGLE_ERROR"})
   }
  }


  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{...state ,getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = ():ProductContextType |undefined=> {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

//({ children }) is destructuring the children prop from the component's props. This means that the AppProvider component expects an object with a children property.: { children: ReactNode } is a TypeScript type annotation. It specifies the type of the destructured children prop.
