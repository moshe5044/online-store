import React, { useContext, useState } from "react";
import { ItemsContext } from "../Layout";

export default function Total() {

  const [total, setTotal] = useState(0);
  const { cartItems, setCartItems } = useContext(ItemsContext);


  function getTotal() {
    let correntCart = {...cartItems };
    
  }

  getTotal()

  return <div>Total

  </div>;
}
