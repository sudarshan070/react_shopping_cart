import React, { useEffect, useState } from "react";
import { products } from "../data.json";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Landing() {
  const [allProducts, setAllProducts] = useState(products);
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

  let increment = (id) => {
    console.log(id, "increment");
    let inc = cartItems.filter((item) =>
      item.id === id ? (item.quantity += 1) : item
    );
    setCartItems(inc);
  };

  let decrement = (id) => {
    console.log(id, "increment");
    let dec = cartItems.filter((item) =>
      item.id === id ? (item.quantity -= 1) : item
    );
    setCartItems(dec);
  };

  let highToLow = () => {
    let high = [...allProducts].sort((a, b) => a.price - b.price);
    setAllProducts(high);
  };
  let LowToHigh = () => {
    let low = [...allProducts].sort((a, b) => b.price - a.price);
    setAllProducts(low);
  };

  return (
    <main className="d-flex container-xl pt-3">
      <aside className="sidebar">
        <p>Sizes:</p>
        <Sidebar sizes={sizes} handleClick={handleClick} />
      </aside>
      <section className="product">
        <Main
          products={filterProduct.length ? filterProduct : allProducts}
          setCartItems={setCartItems}
          highToLow={highToLow}
          LowToHigh={LowToHigh}
        />
      </section>
      <section>
        <Cart
          cartItems={cartItems}
          setCartItems={removeCartItems}
          increment={increment}
          decrement={decrement}
        />
      </section>
    </main>
  );
}
