import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    minLength: [2, "Name is too short!"],
    maxLength: 55,
    required: true
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 16,
    required: true
  },
  email: { type: String, minLength: 5, maxLength: 50, required: true },
  profile: { type: String, default: "logo.png", required: false },
  created: { type: Date, default: Date.now(), required: false }
});

export default mongoose.model("users", userSchema);