"const Product = require('../models/Product');\n\nexports.getProducts = async (req, res) => {\n  const products = await Product.find();\n  res.json(products);\n};" 
