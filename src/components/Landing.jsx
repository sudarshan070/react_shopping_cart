import React, { useState } from "react";
import { products } from "../data.json";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Landing() {
  let [sizes, setSizes] = useState(
    [
      ...new Set(products.map((product) => product.availableSizes).flat()),
    ].map((size) => ({ label: size, checked: false }))
  );
  const [allProducts] = useState(products);
  let [filterProduct, setFilterProduct] = useState([]);

  const handleClick = (selectedSize) => {
    console.log(selectedSize);
    let updatedSizes = sizes.map((size) => {
      if (size.label === selectedSize) {
        return {
          ...size,
          checked: !size.checked,
        };
      }
      return size;
    });
    let selectedSizes = updatedSizes
      .filter((singleSize) => singleSize.checked)
      .map((size) => size.label);
    setSizes(updatedSizes);

    let filterProduct = allProducts.filter((product) => {
      return selectedSizes.some((e) => product.availableSizes.includes(e));
    });
    setFilterProduct(filterProduct);
  };

  return (
    <>
      <aside>
        <Sidebar sizes={sizes} handleClick={handleClick} />
      </aside>
      <section>
        <Main products={filterProduct.length ? filterProduct : allProducts} />
      </section>
    </>
  );
}
