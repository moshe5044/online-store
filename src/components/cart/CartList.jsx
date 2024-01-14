import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ItemsContext } from "../../Layout";

export default function CartList() {

  const { cartItems, setCartItems } = useContext(ItemsContext);

  function handleDeleteAll() {
    setCartItems({})
  }

  return (
    <div>
      <button className="deleteAllButton" onClick={handleDeleteAll}>Delete all</button>
      {Object.values(cartItems).map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
