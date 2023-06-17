import express from "express";
import { createContentDetail } from "../controllers/contentDetail.js";
import auth from "../middleware/auth.js";
const router = express.Router();


router.post("/", auth, createContentDetail);


export default router;
