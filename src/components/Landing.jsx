import React, { useState } from "react";
import { products } from "../data.json";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Landing() {
  let sizes = [
    ...new Set(products.map((product) => product.availableSizes).flat()),
  ];
  const [allProducts] = useState(products);

  return (
    <>
      <aside>
        <Sidebar sizes={sizes} />
      </aside>
      <section>
        <Main products={allProducts} />
      </section>
    </>
  );
}
