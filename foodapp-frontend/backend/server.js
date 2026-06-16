const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample restaurants
app.get("/restaurants", (req, res) => {
  res.json([
    { id: 1, name: "Dominos", menu: ["Pizza", "Garlic Bread"] },
    { id: 2, name: "Burger King", menu: ["Whopper", "Fries"] }
  ]);
});

// Handle orders
app.post("/order", (req, res) => {
  console.log("Order received:", req.body);
  res.json({ status: "success", message: "Order placed successfully!" });
});

app.listen(5000, () => console.log("✅ Food Delivery backend running on port 5000"));
