import React from "react";

const menu = [
  { id: 1, name: "Pizza", price: 250 },
  { id: 2, name: "Burger", price: 150 },
  { id: 3, name: "Pasta", price: 200 }
];

function RestaurantList({ addToCart }) {
  return (
    <div>
      <h2>Menu</h2>
      {menu.map((item) => (
        <div key={item.id} style={{ marginBottom: "8px" }}>
          {item.name} - ₹{item.price}
          <button onClick={() => addToCart(item)} style={{ marginLeft: "10px" }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
