interface FilterProductState {
  isLoading: boolean;
  isError: boolean;
  filterProducts: any[];
  allProducts: any[];
  sorting_value: string;
  filters: {
    text: string;
    category: string;
    company: string;
    color: string;
    maxPrice: number;
    minPrice: number;
    price: number;
  };
}

// Define action types
type ActionType =
  | { type: "LOAD_FILTER_PRODUCTS"; payload: any[] }
  | { type: "GET_SORT_VALUE"; payload: string }
  | { type: "GET_SORT_DATA"; payload: any[] }
  | { type: "GET_FILTER"; payload: { name: string; value: string } }
  | { type: "GET_CATEGORY"; payload: { name: string; value: string } }
  | { type: "GET_FILTER_DATA"; payload: any[] }
  | { type: "GET_COMPANY"; payload: { name: string; value: string } }
  | { type: "GET_COLOR"; payload: { name: string; value: string } }
  | { type: "CLEAR_FILTERS" };

// Define initial state
const initialState: FilterProductState = {
  isLoading: false,
  isError: false,
  filterProducts: [],
  allProducts: [],
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    color: "All",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};

const FilterProductReducer = (
  state: FilterProductState = initialState,
  action: ActionType
): FilterProductState => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArray = action.payload.map((cur) => cur.price);
      let maxprice = priceArray.reduce(
        (initialValue, curvalue) => Math.max(initialValue, curvalue),
        0
      );

      console.log(maxprice);
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxprice,
          price: maxprice,
        },
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "GET_SORT_DATA":
      let sortedData = [...state.filterProducts];
      if (state.sorting_value === "a-to-z") {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sorting_value === "z-to-a") {
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
      } else if (state.sorting_value === "lowest") {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (state.sorting_value === "highest") {
        sortedData.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        filterProducts: sortedData,
      };

    case "GET_FILTER":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "GET_CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload.value,
        },
      };

    case "GET_COMPANY":
      return {
        ...state,
        filters: {
          ...state.filters,
          company: action.payload.value,
        },
      };

    case "GET_COLOR":
      return {
        ...state,
        filters: {
          ...state.filters,
          color: action.payload.value,
        },
      };

    case "GET_FILTER_DATA":
      let filteredData = [...state.allProducts];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        filteredData = filteredData.filter((cur) =>
          cur.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category && category !== "All") {
        filteredData = filteredData.filter((cur) => cur.category === category);
      }

      if (company && company !== "All") {
        filteredData = filteredData.filter((cur) => cur.company === company);
      }

      if (color && color !== "All") {
        filteredData = filteredData.filter((cur) => cur.colors.includes(color));
      }

      if (price === 0) {
        filteredData = filteredData.filter((cur) => cur.price === price);
      } else {
        filteredData = filteredData.filter((cur) => cur.price <= price);
      }

      return {
        ...state,
        filterProducts: filteredData,
      };


  
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
          price: state.filters.maxPrice
        },
      };

      
    default:
      return state;
  }
};

export default FilterProductReducer;
