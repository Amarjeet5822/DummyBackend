const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
},{
    versionKey: false,
 });



const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };

