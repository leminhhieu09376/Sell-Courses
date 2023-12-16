import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import CustomerModel from "../models/customer.js";
import nodemailer from "nodemailer"
import LoginLog from "../models/loginLog.js"
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
            expiresIn: "3m",
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
            subject: "Ucourse reset password -", // Subject line
            text: "Hello ", // plain text body
            html: `
          <p>We have received a request to reset the password for your account. To complete the password reset process, please use the link below. This link will only be valid for a short period of time.</p>
          <p><a href='http://127.0.0.1:5173/reset-pass?token=${token}'>Reset Password</a></p>
          <p><strong>Important note:</strong></p>
          <ul>
              <li>Please do not share this password reset link with anyone else.</li>
              <li>This link is valid for a limited time and will expire after a certain period.</li>
              <li>If you did not request a password reset, please ignore this email or contact our support team.</li>
          </ul>
          <p>Thank you for using our services.</p>
          <p>Best regards,</p>
           `, // html body
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

// Hàm để lấy 5 lần đăng nhập sai gần nhất
const getRecentFailedLoginAttempts = async (userEmail) => {
    try {
        const loginAttempts = await LoginLog.find({ email: userEmail, success: false })
            .sort({ loginTime: -1 })
            .limit(5);

        return loginAttempts;
    } catch (error) {
        console.log("Lỗi khi truy vấn cơ sở dữ liệu: " + error);
        return [];
    }
};
// Hàm gửi email thông báo
const sendLockAccountEmail = async (userEmail) => {
    const recentFailedLoginAttempts = await getRecentFailedLoginAttempts(userEmail);
    // Tạo nội dung email thông báo
    let emailContent = "Your account has been locked due to too many incorrect logins. Below is information about the last 5 failed login attempts:\n\n";

    for (const attempt of recentFailedLoginAttempts) {
        emailContent += `Time: ${attempt.loginTime}, IP: ${attempt.ipAddress}\n`;
    }
    const transporter = nodemailer.createTransport({
        service: "gmail", // Ví dụ: Gmail, Outlook, SendGrid, ...
        auth: {
            user: "n19dcat024@student.ptithcm.edu.vn", // Địa chỉ email gửi
            pass: "oxilpihjnuwspqxc", // Mật khẩu email gửi
        },
    });

    const mailOptions = {
        from: "n19dcat024@student.ptithcm.edu.vn",
        to: userEmail, // Địa chỉ email của người dùng
        subject: "Your account has been locked",
        text: emailContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Gửi email thông báo lỗi: " + error);
        } else {
            console.log("Gửi email thông báo thành công: " + info.response);
        }
    });
};

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await CustomerModel.findOne({ email });
        if (!oldUser.loginAttempts) {
            oldUser.loginAttempts = 0;
        }
        // Kiểm tra số lần đăng nhập sai
        if (oldUser.loginAttempts >= 5) {
            // Khóa tài khoản và gửi email thông báo
            oldUser.isLocked = true;
            // Gửi email thông báo về việc khóa tài khoản
            sendLockAccountEmail(oldUser.email);
            return res
                .status(200)
                .json({ code: false, message: "Tài khoản đã bị khóa" });
        }
        // Tạo một biến để kiểm tra kết quả đăng nhập
        let isPasswordCorrect = false;

        if (oldUser) {
            isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        }

        // Tạo và lưu nhật ký đăng nhập
        const loginLog = new LoginLog({
            userId: oldUser ? oldUser._id : null,
            email,
            loginTime: new Date(),
            ipAddress: req.ip,
            success: isPasswordCorrect,
        });

        loginLog.save();

        if (!oldUser) {
            return res
                .status(200)
                .json({ code: false, message: "Tài khoản không tồn tại" });
        }

        if (!isPasswordCorrect) {
            oldUser.loginAttempts += 1;
            await oldUser.save();
            return res
                .status(200)
                .json({ code: false, message: "Thông tin đăng nhập không đúng" });
        }
        oldUser.loginAttempts = 0;
        await oldUser.save();
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