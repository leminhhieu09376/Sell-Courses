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
