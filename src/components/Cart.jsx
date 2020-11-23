import React from "react";

export default function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((item, i) => {
        let { sku, title, quantity, price } = item;
        return (
          <div key={i}>
            <img src={`/static/products/${sku}_2.jpg`} alt="" />
            <p>{title}</p>
            <p>{quantity}</p>
            <p>{price}</p>
          </div>
        );
      })}
      <div>
        {cartItems.length > 0 ? (
          <p>
            Total:
            {cartItems.reduce((acc, cv) => {
              acc = acc + cv.price * cv.quantity;
              return acc;
            }, 0)}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
