import React from "react";

export default function Cart({
  cartItems,
  setCartItems,
  increment,
  decrement,
}) {
  return (
    <div>
      {cartItems.map((item, i) => {
        let { sku, title, quantity, price, id } = item;
        return (
          <div key={i}>
            <button onClick={() => setCartItems(id)}>X</button>
            <img src={`/static/products/${sku}_2.jpg`} alt="" />
            <div>
              <button onClick={() => decrement(id)}>-</button>
              <button onClick={() => increment(id)}>+</button>
            </div>
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
