import mongoose from "mongoose";
import { Schema } from "mongoose";
const courseSchema = mongoose.Schema({
  title: String,
  subTitle: String,
  numberStart: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  numberStudents: {
    type: Number,
    default: 0,
  },
  author: { type: Schema.Types.ObjectId, ref: "Customer" },
  releaseDate: {
    type: Date,
    default: new Date(),
  },
  language: String,
  image: String,
  introVideo: String,
  rawPrice: {
    type: Number,
    default: 0,
  },
  discountRate: {
    type: Number,
    default: 0,
  },
  discountValue: {
    type: Number,
    default: 0,
  },
  mainContent: [String],
  description: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  contentMaster: [{ type: Schema.Types.ObjectId, ref: "ContentMaster" }],
  isActive: { type: Boolean, default: false },
  createAt: {
    type: Date,
    default: new Date(),
  },

});

const Course = mongoose.model("Course", courseSchema);

export default Course;
