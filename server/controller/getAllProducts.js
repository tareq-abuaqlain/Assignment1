const { getAllProductsQuery, getAllCategoryQuery } = require('../database/query/getAllProductsQuery');

const getAllProducts = async (req, res) => {
  try {
    const { offset } = req.query;
    const data = await getAllProductsQuery(offset);
    const categories = await getAllCategoryQuery();
    res.status(200).json({
      data: data.rows,
      'Total number of products': data.rows.length,
      'Total price of products': data.rows.reduce((acc, cur) => acc + cur.price, 0),
      categories: categories.rows.map((category) => category.category),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAllProducts;
