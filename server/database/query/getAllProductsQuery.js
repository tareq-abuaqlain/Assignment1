const connection = require('../config/connection');

const getAllProductsQuery = (offset) => connection.query('select * from product offset $1 limit 3', [offset]);
const filterProductCategoryQuery = (category, offset) => connection.query('SELECT * FROM product where category = $1 offset $2 limit 3', [category, offset]);
const getAllCategoryQuery = () => connection.query('SELECT DISTINCT category FROM product');
module.exports = {
  getAllProductsQuery, filterProductCategoryQuery, getAllCategoryQuery,
};
