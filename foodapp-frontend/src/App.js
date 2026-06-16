import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🍔 Online Food Delivery</h1>
      <RestaurantList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;

