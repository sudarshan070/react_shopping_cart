import React from "react";

export default function Main({ products }) {
  return (
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
  );
}
