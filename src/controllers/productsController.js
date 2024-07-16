const Product = require('../models/product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.getProducts();
        res.json({ error: "", result: products });
    } catch (error) {
        res.json({ error: error.message, result: [] });
    }
};

const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.getProductsByCategory(category);
        res.json({ error: "", result: products });
    } catch (error) {
        res.json({ error: error.message, result: [] });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.getProductById(id);
        res.json({ error: "", result: product });
    } catch (error) {
        res.json({ error: error.message, result: {} });
    }
};

module.exports = {
    getProducts,
    getProductsByCategory,
    getProductById
};
