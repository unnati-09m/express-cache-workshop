const {
    getProducts,
    getProductById
} = require("../services/productService");

async function getAllProducts(req, res) {
    try {
        const products = await getProducts();

        res.json(products);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getOneProduct(req, res) {
    try {
        const id = Number(req.params.id);

        const product = await getProductById(id);

        res.json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getAllProducts,
    getOneProduct
};