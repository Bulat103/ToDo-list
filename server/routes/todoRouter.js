const express = require('express');
const router = express.Router();
const { Todo, User, User_todo } = require('../db/models');
const checkAuth = require('../middleware/checkAuth')

//---------------------------------------------------------
// http://localhost:3001/todo/:id
// GET
router.get("/:id", async (req, res) => {
  let todos;
  const userId = req.params.id;
  console.log('userId------------------------------------', userId);
  try {
    todos = await Todo.findAll({
      include: {
        model: User,
        as: 'Users',
        where: {
          id: userId
        }
      },
      raw: true,
      order: [
        ['createdAt', 'DESC']
      ]
    });
    console.log(todos);
  } catch (error) {
    console.log(error);
  }
  res.status(200).send({ todos });
});

//---------------------------------------------------------
// http://localhost:3001/todo/:id
// CREATE
router.post("/:id", async (req, res) => {
  const userId = req.params.id;
  const { title } = req.body;
  console.log('TITLTE---------------', title, userId);
  let elem;
  let todo;
  try {
    elem = await Todo.create({ title, done: false });
    await User_todo.create({ user_id: userId, todo_id: elem.id });
    console.log('elem++++++++++++++++++++++++++++++++++++++', elem);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ elem });
});

//---------------------------------------------------------
// http://localhost:3001/todo/:id
// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });
  } catch (error) {
    return res.json({
      isDeleteSuccessful: false,
      errorMessage: "Не удалось удалить запись из базы данных.",
    });
  }
  return res.status(200).json({ isDeleteSuccessful: true, id: req.params.id });
});

//---------------------------------------------------------
// http://localhost:3001/todo/:id
// PUT
router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const item = await Todo.findOne({
      where: {
        id: req.params.id
      },
      raw: true
    })
    console.log('*********************', item);
    await Todo.update(
      { done: !item.done },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ id: req.params.id });
});

module.exports = router;