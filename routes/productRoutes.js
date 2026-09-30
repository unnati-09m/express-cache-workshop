const express = require("express");

const router = express.Router();

const {
    getAllProducts,
    getOneProduct,
    createProduct
} = require("../controllers/productController");


const { cacheMiddleware } = require("../middleware/cacheMiddleware");

router.get("/products", cacheMiddleware, getAllProducts);

router.get("/products/:id", cacheMiddleware, getOneProduct);

router.post("/products", createProduct);

module.exports = router;