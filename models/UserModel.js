import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
});
mongoose.models = {};
const User = mongoose.model("User", UserSchema);

export default User;
