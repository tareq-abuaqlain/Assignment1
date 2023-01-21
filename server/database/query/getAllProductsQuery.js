const connection = require('../config/connection');

const getAllProductsQuery = () => connection.query('select * from product offset 0 limit 2');
const filterProductCategoryQuery = (category) => connection.query('SELECT * FROM product where category = $1 offset 0 limit 2', [category]);

module.exports = {
  getAllProductsQuery, filterProductCategoryQuery,
};
