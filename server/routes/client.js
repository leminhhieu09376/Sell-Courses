import express from "express";

import { signup, signin, changepassword, resetpassword, Resetchangepassword } from "../controllers/userAuth.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.put("/changePassword", changepassword);
router.post("/resetPassword", resetpassword);
router.put("/resetChangePassword", Resetchangepassword);
export default router;