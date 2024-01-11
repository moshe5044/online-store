import React, { useState, useContext } from "react";
import { ItemsContext } from "../Layout";

function Item({ item }) {
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
    <div className="item">
      <h2>{name}</h2>
      <h1>{emoji}</h1>
      <h3>{price}</h3>

      <button onClick={handlePlus}>+</button>
      <span className="amountSpan">{cartItems[id]?.amount || 0}</span>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default Item;
