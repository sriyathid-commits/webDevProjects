 import React from "react";

function Cart({ cart }) {
  if (cart.length === 0) {
    return <h3 style={{ textAlign: "center", marginTop: "50px" }}>🛒 Your cart is empty</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3>🛍️ Cart Items</h3>
      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img src={item.image} alt={item.name} style={{ width: "150px", borderRadius: "10px" }} />
          <h4>{item.name}</h4>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
