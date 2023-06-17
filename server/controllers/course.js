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
    } = req.body



    try {
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

        })
        var newCategory = await Category.findById({ _id: newModel.category });
        await Category.findByIdAndUpdate(newCategory._id, {
            course:
                newCategory.course === undefined
                    ? [newModel._id]
                    : [...newCategory.course, newModel._id],
        });
        res.status(201).json(newModel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
