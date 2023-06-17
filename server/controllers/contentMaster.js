import mongoose, { model } from "mongoose";
import ContentMaster from "../models/contentMaster.js";
import ContentDetail from "../models/contentDetail.js";
import Course from "../models/course.js";

export const createContentMaster = async (req, res) => {
    const {
        title,
        subTitle,
        course
    } = req.body;

    const newModel = new ContentMaster({
        title,
        subTitle,
        course
    });

    try {
        await newModel.save();
        var newContentMasterOfCourse = await Course.findById({ _id: newModel.course })
        await Course.findByIdAndUpdate(newContentMasterOfCourse._id, {
            contentMaster:
                newContentMasterOfCourse.contentMaster === undefined
                    ? [newContentMasterOfCourse._id]
                    : [...newContentMasterOfCourse.contentMaster, newModel._id],
        });
        res
            .status(200)
            .json({ code: true, result: newModel });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
