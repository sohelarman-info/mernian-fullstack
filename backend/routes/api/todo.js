const express = require('express');
const todoModel = require('../../model/todoModel');
const route = express.Router();

//Create a todo
// http://127.0.0.1:8000/todo/create
route.post('/create', async (req, res) => {
  const { title, name, description } = req.body;
  try {
    const todo = new todoModel({
      title,
      name,
      description,
    });

    await todo.save();
    // res.status(200).send(todo);
    res.json({ todo, message: 'Todo created successfully' });
  } catch (error) {
    console.log(error);
  }
});

// http://127.0.0.1:8000/todo/view
http: route.get('/view', async (req, res) => {
  try {
    // const getTodos = await todoModel.find();
    // const getTodos = await todoModel.findById('662bb553ae1ad63b5680104d');
    // const getTodos = await todoModel.find().select('name');
    const getTodos = await todoModel
      .find()
      .select('name title -_id')
      .limit(5)
      .sort({ name: -1 });
    // const getTodos = await todoModel.find().select({
    //   _id: 0,
    //   __v: 0,
    // });
    res.send(getTodos);
  } catch (error) {
    console.log(error);
  }
});

// http://127.0.0.1:8000/todo/view/id
http: route.get('/view/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const singleTodo = await todoModel.findById(id).select('name -_id');
    res.send(singleTodo);
  } catch (error) {
    console.log(error);
  }
});

// http://127.0.0.1:8000/todo/update/id
http: route.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updateTodo = await todoModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await updateTodo.save();
    res.send(updateTodo);
  } catch (error) {
    console.log(error);
  }
});

// http://127.0.0.1:8000/todo/delete/id
http: route.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deleteTodo = await todoModel.findByIdAndDelete(id);
    await deleteTodo.save();
    res.send(deleteTodo);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
