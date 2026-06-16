"const mongoose = require('mongoose');\n\nconst productSchema = new mongoose.Schema({\n  name: String,\n  price: Number\n});\n\nmodule.exports = mongoose.model('Product', productSchema);" 
