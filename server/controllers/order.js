import mongoose from "mongoose";
import OrderMaster from "../models/orderMaster.js"
import OrderDetail from "../models/orderDetail.js"
import Cart from "../models/cart.js";
import Customer from "../models/customer.js";
import CourseModel from "../models/course.js";
export const createOrder = async (req, res) => {
    const {
        customerId,
        course,
        totalPrice,
        createAt,
    } = req.body;
    const newModel = new OrderMaster({
        customerId,
        course,
        totalPrice,
        createAt,
    });

    try {


        var newOrderMaster = await newModel.save();
        var customer = await Customer.findById(customerId);
        if (customer) {
            var newCourse = customer.course.concat(newOrderMaster.course);
            await Customer.findByIdAndUpdate(customerId, {
                course: newCourse,
            });
        }
        res.status(201).json(newOrderMaster);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
};
