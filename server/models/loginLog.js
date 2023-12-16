import mongoose from "mongoose";
import { Schema } from "mongoose";

const loginLogSchema = mongoose.Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true },
    loginTime: { type: Date, required: true },
    ipAddress: { type: String, required: true },
    success: { type: Boolean, required: true },
});


export default mongoose.model("LoginLog", loginLogSchema);
