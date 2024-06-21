const SubCategoryModel = require('../../model/SubCategoryModel');

let AddSubCategoryController = async (req, res) => {
  const { name, categoryId } = req.body;
  let existingSubCategory = await SubCategoryModel.find({ name: name });
  if (existingSubCategory.length > 0) {
  } else {
    let Cat = new SubCategoryModel({
      name: name.toLowerCase(),
      categoryId: categoryId,
    });
    Cat.save();
  }
  res.send(existingSubCategory);
};

module.exports = AddSubCategoryController;
