import mongoose from "mongoose";
import { Schema } from "mongoose";
const paymentMethodSchema = mongoose.Schema({
  name: String,
  image: String,
  isActive: Boolean,
  createAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
});
const PaymentMethod = mongoose.model("PaymentMethod", paymentMethodSchema);

export default PaymentMethod;
