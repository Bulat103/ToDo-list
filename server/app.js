const express = require("express");
const { Todo } = require("./db/models");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require("cors");
const todoRouter = require('./routes/todoRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  store: new FileStore(),
  secret: 'todo',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  name: 'authorisation',
}));

app.use((req, res, next) => {
  next();
});

app.use('/todo', todoRouter);
app.use('/user', userRouter);


app.listen(PORT);
