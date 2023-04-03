import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    minLength: [2, "Name is too short!"],
    maxLength: 82,
    required: true
  },
  imageName: {
    type: String,
    minLength: 2,
    maxLength: 28,
    default: "logo.png"
  },
  price: { type: Number, required: true },
  rating: { type: Number, min: 1, max: 5, default: 0, required: true },
  category: { type: String, minLength: 2, maxLength: 19, required: true },
  segment: { type: String, minLength: 2, maxLength: 28, required: true }
});

export default mongoose.model("products", productSchema);
