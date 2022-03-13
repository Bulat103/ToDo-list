/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  getTodos, addTodo, deleteTodo, changeState,
} from '../action/todoActionCreater';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  extraReducers: {
    // GET-------------------------------------
    [getTodos.fulfilled]: (state, { payload }) => {
      state.value = payload;
    },

    // ADD---------------------------------------
    [addTodo.fulfilled]: (state, { payload }) => {
      state.value.push(payload);
    },

    // DELETE---------------------------------------
    [deleteTodo.fulfilled]: (state, { payload }) => {
      state.value = state.value.filter((item) => item.id != payload);
    },

    // CHANGE STATE---------------------------------------
    [changeState.fulfilled]: (state, { payload }) => {
      state.value = state.value.map((item) => {
        if (item.id == payload) {
          item.done = !item.done;
          return item;
        }
        return item;
      });
    },
  },
});

export const selectTodo = (state) => state.todoReducer.value;
export default todoSlice.reducer;
