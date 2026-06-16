import React from "react";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  const checkout = () => {
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              {item.name} - ₹{item.price} × {item.qty}
            </div>
          ))}
          <hr />
          <h3>Total: ₹{total}</h3>
          <button onClick={checkout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
