import React from "react";
import { useFilterContext } from "../Context.tsx/FilterContext";
import FormatPrice from "../Helper/FormatPrice";

const FilterSection: React.FC = () => {
  const {
    filters: { text, company, category, color, price, maxPrice, minPrice },
    getFilterValue,
    allProducts,
    getCategoryData,
    getCompanyData,
    getColorData,
    clearFilters
  } = useFilterContext();

  const getData = (data: any[], atribute: any) => {
    let newData = data.map((cur: any) => cur[atribute]);

    if (atribute === "colors") {
      return (newData = ["All", ...new Set([].concat(...newData))]); //[].concat(...newData) takes all the elements from newData, flattens them into a single array if there are nested arrays.
    } else {
      return (newData = ["All", ...new Set(newData)]);
    }
  };

  const categoryData = getData(allProducts, "category");
  console.log(categoryData);

  const companyData = getData(allProducts, "company");
  console.log(companyData);

  const colorData = getData(allProducts, "colors");
  console.log(colorData);

  return (
    <section className="  w-64 ">
      <div className="mt-10 flex justify-center">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            className="border-2 border-zinc-200 px-4  py-2 text-sm"
            type="text"
            name="text"
            value={text}
            onChange={getFilterValue}
            placeholder="search"
          />
        </form>
      </div>

<h1 className="text-center mt-8 font-bold text-primary underline">categories</h1>
      <div className="flex flex-col mt-4">
        {categoryData.map((cur, index) => (
          <button
            key={index}
            type="button"
            name="category"
            value={cur}
            onClick={() => getCategoryData(cur)}
          >
            {cur}
          </button>
        ))}
      </div>

<h1 className="text-center mt-8 font-bold text-primary underline">Companies</h1>
      <div className="flex  justify-center  mt-4 ">
        <form action="#">
          <select
            name="category"
            onChange={(e) => getCompanyData(e.target.value)}
          >
            {companyData.map((cur) => (
              <option id="company">{cur}</option>
            ))}
          </select>
        </form>
      </div>

      <h1 className="text-center mt-8 font-bold text-primary underline">Colors</h1>
      <div className="flex gap-2 justify-center items-center ml-2 mt-4 ">
        {colorData.map((cur, index) => (
          <button
            key={index}
            className="rounded-full flex items-center justify-center  border border-3 border-gray-500 "
            style={{ backgroundColor: cur, width: "20px", height: "20px" }} // Increased button size
            name="color"
            value={cur}
            onClick={() => getColorData(cur)}
          ></button>
        ))}
      </div>

      <div className="flex flex-col  justify-center items-center gap-2 mt-8">
        <h1 className="font-bold text-primary underline">Price</h1>
        <FormatPrice price={price} />
        <input
          type="range"
          value={price}
          name="price"
          min={minPrice}
          max={maxPrice}
          onChange={getFilterValue}
          
        />
      </div>

      <div className="flex  items-center justify-center mt-7">
        <button className="bg-red-400 py-2 px-3 hover:bg-red-500  text-center   " onClick={clearFilters}>
          CLEAR FILTERS
        </button>
      </div>
    </section>
  );
};

export default FilterSection;
