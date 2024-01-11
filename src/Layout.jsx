import React, { useState, createContext } from "react";
import Content from "./components/Content";
import Cart from "./components/cart/Cart";
import Header from "./components/Header";

export const ItemsContext = createContext();

function Layout() {
  const [cartItems, setCartItems] = useState({});
  console.log(cartItems);


  return (
    <div className="layout">
      <Header />
      <div className="cartContent">
        <ItemsContext.Provider
          value={{ cartItems, setCartItems }}
        >
          <Cart />
          <Content />
          
        </ItemsContext.Provider>
      </div>
    </div>
  );
}

export default Layout;
