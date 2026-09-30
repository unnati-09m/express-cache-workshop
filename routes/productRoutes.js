const express = require("express");

const router = express.Router();

const {
    getAllProducts,
    getOneProduct
} = require("../controllers/productController");


const { cacheMiddleware } = require("../middleware/cacheMiddleware");

router.get("/products", cacheMiddleware, getAllProducts);

router.get("/products/:id", cacheMiddleware, getOneProduct);

module.exports = router;