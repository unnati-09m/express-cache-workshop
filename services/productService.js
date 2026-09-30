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

async function updateProduct(id, updatedData) {
    const products = await readProducts();

    const index = products.findIndex((product) => product.id === id);

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...updatedData
    };

    await writeProducts(products);

    return products[index];
}
async function patchProduct(id, updatedData) {
    const products = await readProducts();

    const index = products.findIndex((product) => product.id === id);

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...updatedData
    };

    await writeProducts(products);

    return products[index];
}
module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    patchProduct
};