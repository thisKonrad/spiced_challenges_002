/* PRODUCTS SCHEMA::: */
import mongoose from "mongoose";
import "./Review.js";

const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    reviews: { type: [Schema.Types.ObjectId], ref: "Review", strictPopulate: false },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

