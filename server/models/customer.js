import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  course: [{ type: String, ref: "Course" }],
  image: { type: String, default: "https://i.pravatar.cc/300" },
  stageName: { type: String },
  loginAttempts: { type: Number, default: 0 },
});

export default mongoose.model("Customer", customerSchema);
