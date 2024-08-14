import React from "react";
import FilterSection from "../Components/FilterSection";
import Sort from "../Components/Sort";
import ProductList from "../Components/ProductList";

const Products = () => {
  return (
    <>
      <section className="flex justify-between cursor-pointer">
        <div>
          <FilterSection />
        </div>

        <div >
          <div>
            <Sort />
          </div>

          <div >
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
