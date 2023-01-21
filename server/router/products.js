const productsRouter = require('express').Router();

const { getAllProducts, filterProductCategory } = require('../controller');

productsRouter.get('/', getAllProducts);
productsRouter.get('/:category', filterProductCategory);

module.exports = productsRouter;
