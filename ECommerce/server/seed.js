 const mongoose = require("mongoose");
const Product = require("./models/Product"); // make sure this path is correct

mongoose.connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("✅ MongoDB connected for seeding"))
  .catch(err => console.error(err));

const sampleProducts = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    description: "High performance laptop",
    image: "https://via.placeholder.com/200x150?text=Laptop"
  },
  {
    name: "Headphones",
    category: "Accessories",
    price: 2500,
    description: "Wireless headphones",
    image: "https://via.placeholder.com/200x150?text=Headphones"
  },
  {
    name: "Smartphone",
    category: "Electronics",
    price: 30000,
    description: "Latest smartphone",
    image: "https://via.placeholder.com/200x150?text=Smartphone"
  }
];

async function seedData() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log("🌱 Sample products added successfully!");
  } catch (err) {
    console.error("❌ Error seeding products:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
