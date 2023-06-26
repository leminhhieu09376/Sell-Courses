import express from "express";
import {
    getCustomer
} from "../controllers/customer.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/:id", auth, getCustomer);


export default router;
