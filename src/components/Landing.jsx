import React, { useEffect, useState } from "react";
import { products } from "../data.json";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Landing() {
  const [allProducts] = useState(products);
  const [filterProduct, setFilterProduct] = useState([]);
  let [sizes, setSizes] = useState(
    [
      ...new Set(products.map((product) => product.availableSizes).flat()),
    ].map((size) => ({ label: size, checked: false }))
  );

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

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, [cartItems]);

  let removeCartItems = (id) => {
    const removeItem = cartItems.filter((item) => item.id !== id);
    setCartItems(removeItem);
  };

  return (
    <main className="d-flex">
      <aside>
        <Sidebar sizes={sizes} handleClick={handleClick} />
      </aside>
      <section>
        <Main
          products={filterProduct.length ? filterProduct : allProducts}
          setCartItems={setCartItems}
        />
      </section>
      <section>
        <Cart cartItems={cartItems} setCartItems={removeCartItems} />
      </section>
    </main>
  );
}
