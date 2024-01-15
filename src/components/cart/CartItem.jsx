import React, { useContext } from "react";
import { ItemsContext } from "../../Layout";

export default function CartItem({ item }) {
  const { cartItems, setCartItems } = useContext(ItemsContext);
  const { id, name, price, emoji } = item;

  function handlePlus() {
    let newCart = { ...cartItems };
    if (cartItems[id]) {
      newCart[id].amount += 1;
    } else {
      newCart[id] = { ...item, amount: 1 };
    }
    setCartItems(newCart);
  } 

  function handleMinus() {
    let newCart = { ...cartItems };
    if (cartItems[id].amount > 1) {
      newCart[id].amount -= 1;
    } else {
      delete newCart[id];
    }
    setCartItems(newCart);
  }
 
  return (
    <div className="cartItem">
      <h3>{name}</h3>
      <h2>{emoji}</h2>
      <h4>{price}</h4>

      <button onClick={handlePlus}>+</button>
      <span className="amountSpan">{cartItems[id]?.amount || 0}</span>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
