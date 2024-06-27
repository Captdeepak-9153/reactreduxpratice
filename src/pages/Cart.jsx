import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  console.log(products); // Check the console to ensure products are correctly retrieved
  const removeCart = (productId) => {
    dispatch(remove(productId));
    console.log(removeCart);
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="productsWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => removeCart(product.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
