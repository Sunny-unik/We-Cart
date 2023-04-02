import mongoose from "mongoose";

export default interface product {
  _id: mongoose.Types.ObjectId;
  title: string;
  imageName: string;
  price: number;
  rating: number;
}
