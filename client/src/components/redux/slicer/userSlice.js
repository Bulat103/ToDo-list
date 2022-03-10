/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { userRegistration, userLogin, userLogOut } from '../action/userActionCreater';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userId: '',
    isAuth: false,
    status: null,
  },
  extraReducers: {
    // REGISTRATION-------------------------------------
    [userRegistration.pending]: (state) => {
      state.status = 'loading';
    },
    [userRegistration.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.userName = payload.name;
      state.userId = payload.id;
      state.status = 'success';
    },
    [userRegistration.rejected]: (state) => {
      state.status = 'failed';
    },

    // LOGIN---------------------------------------
    [userLogin.pending]: (state) => {
      state.status = 'loading';
      console.log('ADD TODO PENDING');
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      console.log('ADD TODO FULFILLED', payload);
      state.userName = payload.name;
      state.userId = payload.id;
      state.isAuth = true;
      state.status = 'success';
    },
    [userLogin.rejected]: (state) => {
      state.status = 'failed';
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
      console.log('ADD TODO REJECTED');
    },

    // LOGOUT---------------------------------------
    [userLogOut.pending]: (state) => {
      state.status = 'loading';
      console.log('LOGOUT TODO PENDING');
    },
    [userLogOut.fulfilled]: (state, { payload }) => {
      console.log('LOGOUT FULFILLED', payload);
      state.status = 'success';
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },
    [userLogOut.rejected]: (state) => {
      state.status = 'failed';
      console.log('LOGOUT TODO REJECTED');
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },
  }
});

export const selectTodo = (state) => state.userReducer.value;
export default userSlice.reducer;