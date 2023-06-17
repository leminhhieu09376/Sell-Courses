import express from "express";
import auth from "../middleware/auth.js";
import { createCourse } from "../controllers/course.js"

const router = express.Router();

router.post("/", auth, createCourse);


export default router;