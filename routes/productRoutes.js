const express = require("express");

const router = express.Router();

const {
    getAllProducts,
    getOneProduct
} = require("../controllers/productController");

router.get("/products", getAllProducts);

router.get("/products/:id", getOneProduct);

module.exports = router;