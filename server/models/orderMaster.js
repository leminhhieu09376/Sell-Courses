import mongoose from "mongoose";
import { Schema } from "mongoose";
const orderMasterSchema = mongoose.Schema({
  customerId: { type: String, ref: "Customer" },
  orderDate: {
    type: Date,
    default: new Date(),
  },
  totalPrice: Number,
  paymentInfo:{type: String},
  paymentMethod: { type: String, ref: "PaymentMethod" },
  orderDetails: [{ type: String, ref: "OrderDetail" }],
  status: { type: Number, default: 0 },
  statusName: { type: String, default: "Đang chờ xử lý" },
  createAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
});
const OrderMaster = mongoose.model("OrderMaster", orderMasterSchema);

export default OrderMaster;
