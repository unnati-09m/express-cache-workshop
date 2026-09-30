const { readProducts,writeProducts } = require("../database/database");

async function getProducts() {
    return await readProducts();
}

async function getProductById(id) {
    const products = await readProducts();

    return products.find((product) => product.id === id);
}

async function addProduct(product) {
    const products = await readProducts();

    products.push(product);

    await writeProducts(products);

    return product;
}

module.exports = {
    getProducts,
    getProductById,
    addProduct
};