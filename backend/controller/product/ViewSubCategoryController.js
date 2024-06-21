const SubCategoryModel = require('../../model/SubCategoryModel');

let ViewSubCategoryController = async (req, res) => {
  let data = await SubCategoryModel.find().populate('categoryId');
  res.send(data);
};

module.exports = ViewSubCategoryController;
