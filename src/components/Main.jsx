import React from "react";

export default function Main({ products, setCartItems, highToLow, LowToHigh }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p>{`${products.length} product(s) found`}</p>
        <div>
          <button
            className="btn btn-secondary btn-sm mr-2"
            onClick={() => highToLow()}
          >
            Low to High
          </button>
          <button
            className="btn btn-secondary btn-sm mr-2"
            onClick={() => LowToHigh()}
          >
            High to Low
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {products.map((product, i) => {
          const { sku, title, price, installments, isFreeShipping } = product;
          return (
            <div key={i} className="text-center p-3 product-cart mt-3">
              <div className="free-shipping">
                {isFreeShipping === true ? (
                  <button className=" free-shipping-btn">FreeShipping</button>
                ) : null}
              </div>
              <img src={`static/products/${sku}_1.jpg`} alt={title} />
              <h2 className="product-title">{title}</h2>
              <p className="product-price">
                $ <span>{price}</span>
              </p>
              {installments > 0 ? (
                <p className="text-secondary">
                  or {installments} X $
                  {parseFloat(price / installments).toFixed(2)}
                </p>
              ) : (
                ""
              )}
              <button
                className="mt-4 product-btn"
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
