import mongoose from "mongoose";
import Course from "../models/course.js";
import ContentMaster from "../models/contentMaster.js";
import Category from "../models/category.js";




export const createCourse = async (req, res) => {
    const {
        title,
        subTitle,
        numberStart,
        rawPrice,
        discountRate,
        discountValue,
        mainContent,
        description,
        category,
        image
    } = req.body



    try {
        if (!(await Category.findById({ _id: category }))) {
            return res.status(200).json({ message: "category not found !!" });
        }
        const newModel = await Course.create({
            title,
            subTitle,
            numberStart,
            author: req.customerId,
            rawPrice,
            discountRate,
            discountValue,
            mainContent,
            description,
            category,
            image,

        })
        var newCategory = await Category.findById({ _id: newModel.category });

        await Category.findByIdAndUpdate(newCategory._id, {
            course:
                newCategory.course === undefined
                    ? [newModel._id]
                    : [...newCategory.course, newModel._id],
        });
        return res.status(201).json(newModel);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

export const getCourses = async (req, res) => {
    try {
        const models = await Course.find();
        res.status(200).json(models);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const model = await Course.findById(id)
            .populate({
                path: "contentMaster",
                populate: {
                    path: "contentDetails",
                },
            })

            .exec();
        res.status(200).json(model);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};