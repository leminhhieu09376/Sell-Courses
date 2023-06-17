import mongoose from "mongoose";
import { Schema } from "mongoose";
const categorySchema = mongoose.Schema({
  title: String,
  subTitle: String,
  subDescription: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
  course: [{ type: String, ref: "Course" }],

});
const Category = mongoose.model("Category", categorySchema);

export default Category;