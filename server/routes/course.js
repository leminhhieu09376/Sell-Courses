import express from "express";
import auth from "../middleware/auth.js";
import { createCourse, getCourses, getCourse } from "../controllers/course.js"

const router = express.Router();

router.post("/", auth, createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);



export default router;