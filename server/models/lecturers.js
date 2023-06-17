import mongoose from "mongoose";
import { Schema } from "mongoose";
const lecturersSchema = mongoose.Schema({
  name: String,
  about: String,
  numberStars: {
    type: Number,
    default: 0,
  },
  image: String,
  course: [{ type: String, ref: "Course" }],
  isActive: Boolean,
  createAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
});
const Lecturers = mongoose.model("Lecturers", lecturersSchema);

export default Lecturers;