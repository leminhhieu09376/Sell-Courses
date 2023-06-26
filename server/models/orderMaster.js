import mongoose from "mongoose";
import { Schema } from "mongoose";
const orderMasterSchema = mongoose.Schema({
  customerId: { type: String, ref: "Customer" },
  orderDate: {
    type: Date,
    default: new Date(),
  },
  totalPrice: Number,
  course: [{ type: String, ref: "Course" }],
  createAt: {
    type: Date,
    default: new Date(),
  },
});
const OrderMaster = mongoose.model("OrderMaster", orderMasterSchema);

export default OrderMaster;
