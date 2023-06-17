import express from "express";
import { createContentMaster } from "../controllers/contentMaster.js";
import auth from "../middleware/auth.js";
const router = express.Router();


router.post("/", auth, createContentMaster);


export default router;
