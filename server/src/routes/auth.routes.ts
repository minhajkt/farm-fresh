import express from "express";
import { createDependencies } from "../config/dependencies";
import { registerValidation, validate } from "../middlewares/validation";

const router = express.Router();
const { authController } = createDependencies();

router.post("/register", registerValidation, validate, authController.register.bind(authController));
router.post("/verify-otp", (req, res) => authController.verifyOtp(req, res));

export default router;
