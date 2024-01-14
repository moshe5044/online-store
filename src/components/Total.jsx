import React, { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../Layout";

export default function Total() {

  const { cartItems } = useContext(ItemsContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function calculateTotal() {
      let sum = Object.values(cartItems).reduce(
        (acc, item) => acc + item.price * item.amount, 0).toFixed(2);
      setTotal(sum)
    }
    calculateTotal();
  }, [cartItems])

  return <div className="total">
    Total: {total}
  </div>;
}
