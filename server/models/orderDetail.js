import mongoose from "mongoose";
import { Schema } from "mongoose";
const orderDetailSchema = mongoose.Schema({
  orderMasterId: { type: String, ref: "OrderMaster" },
  orderDate: {
    type: Date,
    default: new Date(),
  },
  price: Number,
  course: { type: String, ref: "Course" },
  createAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
});
const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);

export default OrderDetail;
