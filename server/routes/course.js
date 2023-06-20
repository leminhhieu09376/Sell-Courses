import express from "express";
import auth from "../middleware/auth.js";
import { createCourse, getCourses, getCourse } from "../controllers/course.js"

const router = express.Router();

router.post("/", auth, createCourse);
router.get("/", auth, getCourses);
router.get("/:id", auth, getCourse);



export default router;