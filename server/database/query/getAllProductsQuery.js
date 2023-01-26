const connection = require('../config/connection');

const getAllProductsQuery = (offset) => connection.query('select * from product offset $1 limit 3', [offset]);
const filterProductCategoryQuery = (category) => connection.query('SELECT * FROM product where category = $1', [category]);
const getAllCategoryQuery = () => connection.query('SELECT DISTINCT category FROM product');
module.exports = {
  getAllProductsQuery, filterProductCategoryQuery, getAllCategoryQuery,
};
