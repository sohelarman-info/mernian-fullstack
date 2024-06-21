const mongoose = require('mongoose');
const { Schema } = mongoose;
const CategorySchema = new Schema({
  name: String,
  status: {
    type: String,
    enum: ['approved', 'waiting', 'reject'],
    default: 'waiting',
  },
});
module.exports = mongoose.model('Category', CategorySchema);
