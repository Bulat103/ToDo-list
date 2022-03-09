/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('getTodos', async () => {
  let todoList;
  try {
    todoList = await axios('/');
  } catch (error) {
    console.log(error);
  }
  return todoList.data.todos;
});

export const addTodo = createAsyncThunk('addTodo', async (value) => {
  let todoItem;
  try {
    todoItem = await axios.post('/', { title: value });
  } catch (error) {
    console.log(error);
  }
  return todoItem.data.elem;
});

export const deleteTodo = createAsyncThunk('deleteTodo', async (id) => {
  let deletedItem;
  try {
    deletedItem = await axios.delete(`/${id}`);
  } catch (error) {
    console.log(error);
  }
  return deletedItem.data.id;
});

export const changeState = createAsyncThunk('changeState', async (id) => {
  let changeStateItem;
  try {
    changeStateItem = await axios.put(`/${id}`);
    console.log(changeStateItem);
  } catch (error) {
    console.log(error);
  }
  return changeStateItem.data.id;
});
