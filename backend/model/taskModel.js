const mongoose = require('mongoose');
const { Schema } = mongoose;
const TaskSchema = new Schema({
  item: String,
  description: String,
  userId: String,
});
module.exports = mongoose.model('task', TaskSchema);
