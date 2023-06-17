import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import CustomerModel from "../models/customer.js";
import nodemailer from "nodemailer"
const secret = "test";


export const resetpassword = async (req, res) => {
    const { email } = req.body;
    try {
        const oldUser = await CustomerModel.findOne({ email });
        if (!oldUser)
            return res
                .status(200)
                .json({ code: false, message: "Tài khoản không tồn tại" });


        const token = jwt.sign({ id: oldUser._id }, secret, {
            expiresIn: "1h",
        });
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "n19dcat024@student.ptithcm.edu.vn", // generated ethereal user
                pass: "oxilpihjnuwspqxc", // generated ethereal password
            },
        });

        // send mail with defined transport object
        await transporter.sendMail({
            from: 'n19dcat024@student.ptithcm.edu.vn', // sender address
            to: `${email}`, // list of receivers
            subject: "Ucourse reset password", // Subject line
            text: "Hello ", // plain text body
            html: `<a href='http://127.0.0.1:5173/reset-pass?token=${token}'>Reset</a>`, // html body
        }, (err) => {
            if (err) {
                return res.json({
                    message: 'err',
                    err
                })
            }
            return res.json({
                message: 'mail sent',
                token: token,
                err
            })
        });


    }
    catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi không xác định" });
        console.log(error);
    }
}
export const Resetchangepassword = async (req, res) => {
    const { newPassword, token } = req.body;
    try {

        const decoded = jwt.verify(token, secret)
        if (!decoded.id) {
            return res.status(400).json({ message: 'Invalid token' })
        }
        const oldUser = await CustomerModel.findById(decoded.id);
        if (!oldUser) {
            return res.status(400).json({ message: 'User not found' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        const updatePassword = {
            name: oldUser.name,
            email: oldUser.email,
            password: hashedPassword,
        };

        const result = await CustomerModel.findOneAndUpdate({ _id: decoded.id }, updatePassword, { new: true })
        const newToken = jwt.sign({ email: result.email, id: result._id }, secret, {
            expiresIn: "1h",
        });
        res.status(201).json({ result, newToken });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi không xác định" });
        console.log(error);
    }
}




export const changepassword = async (req, res) => {
    const { email, password, newPassword } = req.body;
    try {
        const oldUser = await CustomerModel.findOne({ email });
        if (!oldUser)
            return res
                .status(200)
                .json({ code: false, message: "Tài khoản không tồn tại" });
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect)
            return res
                .status(200)
                .json({ code: false, message: "Sai mật khẩu" });
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        const updatePassword = {
            name: oldUser.name,
            email,
            password: hashedPassword,
        };

        const result = await CustomerModel.findOneAndUpdate({ email }, updatePassword, { new: true })
        const token = jwt.sign({ email: result.email, id: result._id }, secret, {
            expiresIn: "1h",
        });
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi không xác định" });
        console.log(error);
    }
}



export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await CustomerModel.findOne({ email });

        if (!oldUser)
            return res
                .status(200)
                .json({ code: false, message: "Tài khoản không tồn tại" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect)
            return res
                .status(200)
                .json({ code: false, message: "Thông tin đăng nhập không đúng" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
            expiresIn: "24h",
        });
        oldUser.password = "";
        res.status(200).json({ code: true, result: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Đã xảy ra lỗi không xác định" });
    }
};
export const signup = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const oldUser = await CustomerModel.findOne({ email });

        if (oldUser)
            return res.status(400).json({ message: "Tài khoản đã tồn tại" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await CustomerModel.create({
            email,
            password: hashedPassword,
            name: name,
        });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, {
            expiresIn: "1h",
        });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi không xác định" });

        console.log(error);
    }
};