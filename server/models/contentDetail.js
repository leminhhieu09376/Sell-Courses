import mongoose from "mongoose";
import { Schema } from "mongoose";
const contentDetailSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  subTitle: String,
  url: String,
  contentMaster: { type: Schema.Types.ObjectId, ref: "ContentMaster" },
  length: {
    type: Number,
    default: 0,
  },
  index: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});
const ContentDetail = mongoose.model("ContentDetail", contentDetailSchema);

export default ContentDetail;
