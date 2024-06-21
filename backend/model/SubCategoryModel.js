const mongoose = require('mongoose');
const { Schema } = mongoose;
const SubCategorySchema = new Schema({
  name: String,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  status: {
    type: String,
    enum: ['approved', 'waiting', 'reject'],
    default: 'waiting',
  },
});
module.exports = mongoose.model('SubCategory', SubCategorySchema);
