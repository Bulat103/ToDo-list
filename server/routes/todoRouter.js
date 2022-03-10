const express = require('express');
const router = express.Router();
const { Todo } = require('../db/models');

//---------------------------------------------------------
// http://localhost:3001/todo/new
// GET
router.get("/", async (req, res) => {
  let todos;
  try {
    todos = await Todo.findAll({
      raw: true,
      order: [
        ['createdAt', 'DESC']
      ]
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).send({ todos });
});

//---------------------------------------------------------
// http://localhost:3001/todo/new
// CREATE
router.post("/", async (req, res) => {
  const { title } = req.body;
  console.log('TITLTE---------------', title);
  let elem;
  try {
    elem = await Todo.create({ title, done: false });
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