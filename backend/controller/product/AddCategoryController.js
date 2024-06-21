const Category = require('../../model/CategoryModel');
let AddCategoryController = async (req, res) => {
  const { name } = req.body;
  let existingCategory = await Category.find({ name: name });
  if (existingCategory.length > 0) {
    res.send({ error: 'Category Already Exist' });
  } else {
    let Cat = new Category({
      name: name,
    });
    Cat.save();
    res.send({ success: 'Category Created' });
  }
  res.send(existingCategory);
};

module.exports = AddCategoryController;
