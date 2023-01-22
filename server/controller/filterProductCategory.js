const { filterProductCategoryQuery } = require('../database/query');

const filterProductCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const data = await filterProductCategoryQuery(category);
    res.status(200).json({
      data: data.rows,
      'Total number of products': data.rows.length,
      'Total price of products': data.rows.reduce((acc, cur) => acc + cur.price, 0),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = filterProductCategory;
