const fs = require("fs").promises;
const path = require("path");

const pathToFile = path.join(__dirname, "db.json");

async function readProducts() {
    const data = await fs.readFile(pathToFile, "utf8");

    return JSON.parse(data);
}

module.exports = {
    readProducts
};

readProducts()
    .then((products) => {
        console.log(products);
    })
    .catch((err) => {
        console.log(err);
    });