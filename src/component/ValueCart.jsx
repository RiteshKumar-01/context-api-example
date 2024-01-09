import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

function ValueCart() {
  const cart = useContext(CartContext);

  const total = cart.items.reduce((a, b) => a + b.price, 0);

  return (
    <div className="cart-items">
      <h4>My Cart</h4>
      {cart &&
        cart.items.map((item) => {
          <li>
            {item.name} - ${item.price}
          </li>;
        })}
      <h3>Total Bill : ${total}</h3>
    </div>
  );
}

export default ValueCart;
