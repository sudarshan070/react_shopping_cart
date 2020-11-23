import React from "react";
import { products } from "../data.json";

export default function Landing() {
  let sizes = [
    ...new Set(products.map((product) => product.availableSizes).flat()),
  ];
  console.log(sizes);
  return (
    <>
      <aside>
        {sizes.map((size) => {
          return <button>{size}</button>;
        })}
      </aside>
      <div>
        {products.map((product, i) => {
          const { sku, title, price, installments } = product;
          return (
            <div key={i}>
              <img src={`static/products/${sku}_1.jpg`} alt="" />
              <h2>{title}</h2>
              <p>{price}</p>
              {installments > 0 ? (
                <p className="text-secondary">
                  or {installments} X $
                  {parseFloat(price / installments).toFixed(2)}
                </p>
              ) : (
                "No Installments"
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
