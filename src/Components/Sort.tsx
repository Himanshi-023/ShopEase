import React from "react";
import { useFilterContext } from "../Context.tsx/FilterContext";

const Sort = () => {
  const { filterProducts, sorting } = useFilterContext();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sorting(e.target.value);
  };

  return (
    <div className="flex  items-center  mt-10  ">
      <div  className="  ml-16" >
        <p className="font-semibold text-xl  text-primary ">{`${filterProducts.length} Products Available`}</p>
      </div>

      <div className="ml-[750px]  border border-slate-800">
        <form action="#" >
          <label htmlFor="sort"   >
            <select name="sort" id="sort" onChange={handleSortChange}>
              <option value="lowest">Price (lowest)</option>
              <option value="highest">Price (highest)</option>
              <option value="a-to-z">Name (a to z)</option>
              <option value="z-to-a">Name (z to a)</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Sort;
