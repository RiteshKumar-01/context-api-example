import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

function Item(props) {
  const cart = useContext(CartContext);
  console.log("Cart", cart);
  return (
    <div className="item-cart">
      <h4>{props.name}</h4>
      <p>price: ${props.price}</p>
      <button
        onClick={() =>
          cart?.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
