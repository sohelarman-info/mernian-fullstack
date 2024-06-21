const CategoryModel = require('../../model/CategoryModel');

let ViewCategoryController = async (req, res) => {
  let data = await CategoryModel.find();
  res.send(data);
};

module.exports = ViewCategoryController;
