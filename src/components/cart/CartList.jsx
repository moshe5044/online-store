import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ItemsContext } from "../../Layout";

export default function CartList() {

  const { cartItems } = useContext(ItemsContext);

  return (
    <div>
      {Object.values(cartItems).map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
