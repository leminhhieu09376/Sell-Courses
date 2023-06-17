import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  accessRight: { type: Number, default: 0 },
  roleCode: { type: Number, required: true, default: 0 },
  roleName: { type: String, required: true, default: "Nhân viên" },
  image: { type: String, default: "https://i.pravatar.cc/300" },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
