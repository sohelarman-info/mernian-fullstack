const taskModel = require('../../model/taskModel');

let taskController = async (req, res) => {
  const { item, description, userId } = req.body;

  let user = new taskModel({
    item: item,
    description: description,
    userId: userId,
  });
  user.save();

  res.send('Your Item added');
};

module.exports = taskController;
