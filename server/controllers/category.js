import mongoose from "mongoose";
import Category from "../models/category.js";

export const createCategory = async (req, res) => {
    const { title, subTitle, subDescription } = req.body;

    const newModel = new Category({
        title,
        subTitle,
        subDescription

    });

    try {
        await newModel.save();
        res.status(201).json(newModel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getCategories = async (req, res) => {
    try {
        const models = await Category.find().populate("course");

        res.status(200).json(models);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const model = await Category.findById(id);

        res.status(200).json(model);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}; 