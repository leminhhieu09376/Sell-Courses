import mongoose from "mongoose";
import Customer from "../models/customer.js"

export const getCustomer = async (req, res) => {
    const { id } = req.params;

    try {
        const model = await Customer.findById(id).populate("course");
        console.log(model);
        res.status(200).json(model);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
