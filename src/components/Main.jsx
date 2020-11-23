import React from "react";

export default function Main({ products, setCartItems }) {
  return (
    <>
      <p>{`${products.length} product`}</p>
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
              <button
                onClick={() =>
                  setCartItems((prevState) => {
                    let cartProductIndex = prevState.findIndex(
                      (cartProduct) => cartProduct.id === product.id
                    );
                    let cartProduct;
                    if (cartProductIndex !== -1) {
                      cartProduct = prevState.map((product, i) => {
                        if (i === cartProductIndex) {
                          return {
                            ...product,
                            quantity: product.quantity + 1,
                          };
                        }
                        return product;
                      });
                    } else {
                      cartProduct = prevState.concat({
                        ...product,
                        quantity: 1,
                      });
                    }
                    return cartProduct;
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
