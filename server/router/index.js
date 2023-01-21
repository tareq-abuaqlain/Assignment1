const { Router } = require('express');

const router = Router();
// const { clientError, serverError } = require('../controllers');
const productsRouter = require('./products');

router.use('/products', productsRouter);

module.exports = router;
