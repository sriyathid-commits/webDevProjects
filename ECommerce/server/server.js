const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ecommerce");

// Schema & Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String
});

const Product = mongoose.model("Product", productSchema);

// API route
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
