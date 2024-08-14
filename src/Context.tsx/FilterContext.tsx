import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useProductContext } from "./ProductContext";
import FilterProductReducer from "../reducer/FilterProductReducer";

// Define the shape of the state
interface FilterProductState {
  isLoading: boolean;
  isError: boolean;
  filterProducts: any[];
  allProducts: any[];
  sorting_value: string;
  filters: { text: string; category: string; company: string ; color:string ;maxPrice:number;minPrice:number; price:number};
}

// Define initial state
const initialState: FilterProductState = {
  isLoading: false,
  isError: false,
  filterProducts: [],
  allProducts: [],
  sorting_value: "lowest",
  filters: { text: "", category: "All", company: "All"  , color:"All" ,maxPrice:0,minPrice:0, price:0},
};

// Create a context
const FilterContext = createContext<FilterProductState | any>(undefined);


// Create a provider component
const FilterProvider = ({ children }: { children: ReactNode }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(FilterProductReducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    dispatch({ type: "GET_SORT_DATA", payload: products }); //to set peoducts by default --lowest
  }, [products]);

  const sorting = (value: string) => {
    dispatch({ type: "GET_SORT_VALUE", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "GET_FILTER_DATA", payload: state.filterProducts }); // Update filtered products based on filters
    dispatch({ type: "GET_SORT_DATA", payload: state.filterProducts }); // Then sort the filtered products
  }, [state.sorting_value, state.filters]);



  // Filter logic comes here
  const getFilterValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "GET_FILTER", payload: { name, value } });
    console.log("typedata Name:", name); // Log category name
    console.log("typedata Value:", value); // Log category value
  };






  const getCategoryData = (category: string) => {
    dispatch({
      type: "GET_CATEGORY",
      payload: { name: "category", value: category },
    });
    console.log("Category Value:", category); // Log category value
  };


  const getCompanyData = (company: string) => {
    console.log("company value", company);
    dispatch({
      type: "GET_COMPANY",
      payload: { name: "company", value: company },
    });
  };



const getColorData=(color:string)=>{
  console.log("color value ",color);
  dispatch({type:"GET_COLOR", payload:{name:"color",value:color}});

}


const clearFilters=()=>{
dispatch({type:"CLEAR_FILTERS"})
}
  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        getFilterValue,
        getCategoryData,
        getCompanyData,
        getColorData,
        clearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};






// Custom hook to use the filter context
const useFilterContext = (): FilterProductState | any => {
  return useContext(FilterContext);
};



export { FilterContext, FilterProvider, useFilterContext };
