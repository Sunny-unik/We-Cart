import express from "express";
import ProductController from "../controllers/productController";

const router = express.Router();
const { getProducts, createProduct } = ProductController;

router.get("/", getProducts);
router.post("/", createProduct);

export default router;
