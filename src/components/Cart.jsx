import React from "react";

export default function Cart({ cartItems, setCartItems }) {
  return (
    <div>
      {cartItems.map((item, i) => {
        let { sku, title, quantity, price, id } = item;
        return (
          <div key={i}>
            <button onClick={() => setCartItems(id)}>X</button>
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
              return parseFloat(acc).toFixed(2);
            }, 0)}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
