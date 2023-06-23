import express from "express";
import { createCategory, getCategories, getCategory } from "../controllers/category.js";
import verifyToken from "../middleware/auth.js"
const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
export default router;
