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
    status: null,
  },
  extraReducers: {
    // GET-------------------------------------
    [getTodos.pending]: (state) => {
      state.status = 'loading';
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.value = payload;
      state.status = 'success';
    },
    [getTodos.rejected]: (state) => {
      state.status = 'failed';
    },

    // ADD---------------------------------------
    [addTodo.pending]: (state) => {
      state.status = 'loading';
      console.log('ADD TODO PENDING');
    },
    [addTodo.fulfilled]: (state, { payload }) => {
      console.log('ADD TODO FULFILLED', payload);
      state.value.push(payload);
      state.status = 'success';
    },
    [addTodo.rejected]: (state) => {
      state.status = 'failed';
      console.log('ADD TODO REJECTED');
    },

    // DELETE---------------------------------------
    [deleteTodo.pending]: (state) => {
      state.status = 'loading';
      console.log('DELTE TODO PENDING');
    },
    [deleteTodo.fulfilled]: (state, { payload }) => {
      console.log('DELETE TODO FULFILLED', payload);
      state.status = 'success';
      state.value = state.value.filter((item) => item.id != payload);
    },
    [deleteTodo.rejected]: (state) => {
      state.status = 'failed';
      console.log('DELETE TODO REJECTED');
    },

    // CHANGE STATE---------------------------------------
    [changeState.pending]: (state) => {
      state.status = 'loading';
      console.log('CHANGE STATE TODO PENDING');
    },
    [changeState.fulfilled]: (state, { payload }) => {
      console.log('CHANGE STATE FULFILLED', payload);
      state.status = 'success';
      state.value = state.value.map((item) => {
        if (item.id == payload) {
          item.done = !item.done;
          return item;
        }
        return item;
      });
      console.log(state.value);
    },
    [changeState.rejected]: (state) => {
      state.status = 'failed';
      console.log('CHANGE STATE REJECTED');
    },
  },
});

export const selectTodo = (state) => state.todoReducer.value;
export default todoSlice.reducer;
