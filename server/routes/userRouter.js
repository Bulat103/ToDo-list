/* eslint-disable arrow-body-style */
const express = require('express');
const sha256 = require('sha256');
const { User } = require('../db/models');
const checkAuth = require('../middleware/checkAuth');

const router = express.Router();

// -----------------------------------------------------
// http://localhost:3000/user/registration
router.post('/registration', async (req, res) => {
  const {
    name, email, password, repeatPassword,
  } = req.body;
  let user;
  if (password === repeatPassword) {
    const r = await User.findOne({ where: { email }, raw: true });
    if (r) {
      return res.json({ text: 'Пользователь с такой почтой уже существет' });
    }
    user = await User.create({
      name, email, password: sha256(password),
    });
    return res.json({ user, text: 'Вы успешно зарегестрировались' });
  }
  res.send('Пароли не совпадают');
});

//------------------------------------------------------
// http://localhost:3000/user/login/
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(("LOGIN____________________", email, password));
  const user = await User.findOne({ where: { email }, raw: true });
  if (user) {
    if (user.password === sha256(password)) {
      req.session.user = user.name;
      req.session.userid = user.id;
      return res.json({ user });
    }
    return res.json({ text: 'Wrong password' });
  }
  return res.json({ text: 'there is no such user' });
});

//------------------------------------------------------
// http://localhost:3000/user/refresh/
router.get('/refresh', checkAuth, async (req, res) => {
  return res.json({ name: req.session.user, id: req.session.userid });
});

//---------------------------------------------------------
// http://localhost:3000/user/logout/
router.get('/logout', (req, res) => {
  // разрушается сессия
  console.log('session destroed');
  req.session.destroy();
  res.clearCookie('authorisation');
  res.json({ text: "session destroyed" })
});
module.exports = router;