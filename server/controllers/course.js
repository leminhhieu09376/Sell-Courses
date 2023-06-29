import mongoose from "mongoose";
import Course from "../models/course.js";
import ContentMaster from "../models/contentMaster.js";
import Category from "../models/category.js";
import Customer from "../models/customer.js"



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
        const customerId = req.customerId;
        const customer = await Customer.findById(customerId);
        const stageName = customer.stageName
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
            stageName: stageName

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

// Hàm tính toán số sao trung bình
const calculateAverageStars = (currentNumberStart, numberOfVotes, newStars) => {
    const totalStars = currentNumberStart * numberOfVotes;
    const newTotalStars = totalStars + newStars;
    const newNumberOfVotes = numberOfVotes + 1;
    const newAverageStars = newTotalStars / newNumberOfVotes;
    return newAverageStars;
};


export const updateRate = async (req, res) => {
    const { id } = req.params;
    const { numberStars, idCustomer } = req.body;

    try {
        // Kiểm tra xem khóa học có tồn tại không
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ code: false, message: 'Course not found' });
        }

        // Kiểm tra xem người dùng đã vote cho khóa học chưa
        if (course.numberVoted.includes(idCustomer)) {
            return res.status(200).json({ code: false, message: '🦄 User has already voted for this course' });
        }

        // Cập nhật số sao và danh sách người vote
        const newNumberStart = calculateAverageStars(course.numberStart, course.numberVoted.length, numberStars);
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { $push: { numberVoted: idCustomer }, $set: { numberStart: newNumberStart } },
            { new: true }
        );

        res.status(200).json({ code: true, result: updatedCourse, message: '🦄 Successful rating!' });
    } catch (error) {
        console.error('Error while updating rate:', error);
        res.status(500).json({ code: false, message: 'Internal server error' });
    }
};
