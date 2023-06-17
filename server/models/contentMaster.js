import mongoose from "mongoose";
import { Schema } from "mongoose";
import ContentDetail from "./contentDetail.js";
const contentMasterSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  subTitle: String,
  index: {
    type: Number,
    default: 0,
  },
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  contentDetails: [{ type: Schema.Types.ObjectId, ref: "ContentDetail" }],
  createAt: {
    type: Date,
    default: new Date(),
  },
});
const ContentMaster = mongoose.model("ContentMaster", contentMasterSchema);

export default ContentMaster;