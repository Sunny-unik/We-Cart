import mongoose from "mongoose";

export default interface user {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  created: Date;
  profile: string;
  cartItems: string[];
}
