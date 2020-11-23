import React from "react";

export default function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((item, i) => {
        let { sku, title, quantity } = item;
        return (
          <div key={i}>
            <img src={`/static/products/${sku}_2.jpg`} alt="" />
            <p>{title}</p>
            <p>{quantity}</p>
          </div>
        );
      })}
    </div>
  );
}
