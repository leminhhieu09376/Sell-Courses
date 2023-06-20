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
        if (!(await Course.findById({ _id: course }))) {
            return res.status(200).json({ message: "course not found !!" });
        }
        await newModel.save();
        var newContentMasterOfCourse = await Course.findById({ _id: newModel.course })
        if (!newContentMasterOfCourse) {
            return res.status(200).json({ message: "course not found !!" });
        }
        await Course.findByIdAndUpdate(newContentMasterOfCourse._id, {
            contentMaster:
                newContentMasterOfCourse.contentMaster === undefined
                    ? [newModel._id]
                    : [...newContentMasterOfCourse.contentMaster, newModel._id],
        });
        return res
            .status(200)
            .json({ code: true, result: newModel });
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};


export const getContentMasters = async (req, res) => {
    const courseCode = req.query.courseCode;
    console.log(courseCode);
    try {
        const models = await ContentMaster.find({ courseCode }).populate(
            "contentDetails"
        );
        res.status(200).json({ code: true, result: models });
    } catch (error) {
        res.status(200).json({ code: false, message: error.message });
    }
};
export const getContentMaster = async (req, res) => {
    const { id } = req.params;

    try {
        const model = await ContentMaster.findById(id).populate("contentDetails");
        res.status(200).json({ code: true, result: model });
    } catch (error) {
        res.status(200).json({ code: false, message: error.message });
    }
};