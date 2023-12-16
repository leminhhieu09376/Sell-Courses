import express from "express";
import Course from "../models/course.js";
const router = express.Router();
const isWhitelistedURL = (url) => {
    const whitelist = ["http://localhost:5000/course/:id"];

    const regex = /http:\/\/localhost:5000\/course\/[a-zA-Z0-9]+/;
    return regex.test(url);
}

const validateURL = (req, res, next) => {
    const requestedURL = req.body.url;

    if (isWhitelistedURL(requestedURL)) {
        next(); // Nếu URL thuộc danh sách trắng, tiếp tục xử lý
    } else {
        res.status(403).json({ message: "Từ chối truy cập URL không hợp lệ." });
    }
}

router.post("/", validateURL, async (req, res) => {
    const { url } = req.body;
    res.status(500).json({ message: "Truy cập URL thành công", url: url })

});

export default router;
