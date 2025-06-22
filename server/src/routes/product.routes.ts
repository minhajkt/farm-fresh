import express from "express";
import { createDependencies } from "../config/dependencies";

const router = express.Router();
const { productController } = createDependencies();

router.get("/", productController.getAllProducts.bind(productController));

export default router;
