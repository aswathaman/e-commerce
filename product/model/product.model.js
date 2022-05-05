const mongoose = require('mongoose');

const schema = mongoose.Schema

const ProductModel = new schema({
    product_name:{ type: String, required:true },
    seller_name:{ type: String, required:true },
    qty:{ type: Number, required:true},
    selling_price:{ type: Number, required:true },

})
module.exports = mongoose.model('product',ProductModel,'product')