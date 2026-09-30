const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    patchProduct
} = require("../services/productService");

const { cache } = require("../middleware/cacheMiddleware");

async function getAllProducts(req, res) {
    try {
        const products = await getProducts();

        cache[key] = {
    value: products,
    createdAt: Date.now()
};

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

cache[req.url] = {
    value: product,
    createdAt: Date.now()
};

        res.json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function createProduct(req, res) {
    try {
        const product = req.body;

        const newProduct = await addProduct(product);

        res.status(201).json(newProduct);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}
async function editProduct(req, res) {
    try {
        const id = Number(req.params.id);
        const updatedData = req.body;

        const product = await updateProduct(id, updatedData);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function patchProductData(req, res) {
    try {
        const id = Number(req.params.id);
        const updatedData = req.body;

        const product = await patchProduct(id, updatedData);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}
module.exports = {
    getAllProducts,
    getOneProduct,
     createProduct,
     editProduct,
     patchProductData
};