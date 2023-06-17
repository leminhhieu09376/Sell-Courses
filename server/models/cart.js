import mongoose from "mongoose";
import { Schema } from "mongoose";
const cartSchema = mongoose.Schema({
  customerID: {
    type: String,
    ref: "Customer",
  },
  course: [{ type: String, ref: "Course" }],
  createAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
});
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
