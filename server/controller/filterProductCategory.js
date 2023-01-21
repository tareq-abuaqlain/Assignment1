const { filterProductCategoryQuery } = require('../database/query');

const filterProductCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { sortName, sortPrice } = req.query;
    const data = await filterProductCategoryQuery(category);
    if (sortPrice === 'true') {
      const sortedData = data.rows.sort((a, b) => b.price - a.price);
      res.status(200).json([sortedData, { 'Total number of products': data.rows.length }, { 'Total price of products': data.rows.reduce((acc, cur) => acc + cur.price, 0) }]);
    } else if (sortPrice === 'false') {
      const sortedData = data.rows.sort((a, b) => a.price - b.price);
      res.status(200).json([sortedData, { 'Total number of products': data.rows.length }, { 'Total price of products': data.rows.reduce((acc, cur) => acc + cur.price, 0) }]);
    } else if (sortName === 'true') {
      const sortedData = data.rows.sort((a, b) => b.product_name.localeCompare(a.product_name));
      res.status(200).json([sortedData, { 'Total number of products': data.rows.length }, { 'Total price of products': data.rows.reduce((acc, cur) => acc + cur.price, 0) }]);
    } else if (sortName === 'false') {
      const sortedData = data.rows.sort((a, b) => a.product_name.localeCompare(b.product_name));
      res.status(200).json([sortedData, { 'Total number of products': data.rows.length }, { 'Total price of products': data.rows.reduce((acc, cur) => acc + cur.price, 0) }]);
    } else {
      res.status(200).json([data.rows, { 'Total number of products': data.rows.length }, { 'Total price of products': data.rows.reduce((acc, cur) => acc + cur.price, 0) }]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = filterProductCategory;
