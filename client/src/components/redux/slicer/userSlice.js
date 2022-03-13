/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { userRegistration, userLogin, userLogOut, userRefresh } from '../action/userActionCreater';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userId: '',
    isAuth: false
  },
  extraReducers: {
    // REGISTRATION-------------------------------------
    [userRegistration.fulfilled]: (state, { payload }) => {
      state.userName = payload.name;
      state.userId = payload.id;
    },

    // LOGIN---------------------------------------
    [userLogin.fulfilled]: (state, { payload }) => {
      state.userName = payload.name;
      state.userId = payload.id;
      state.isAuth = true;
    },
    [userLogin.rejected]: (state) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },

    // LOGOUT---------------------------------------
    [userLogOut.fulfilled]: (state, { payload }) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },
    [userLogOut.rejected]: (state) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },

    // REFRESH---------------------------------------
    [userRefresh.fulfilled]: (state, { payload }) => {
      state.userName = payload.name;
      state.userId = payload.id;
      state.isAuth = true;
    },
    [userRefresh.rejected]: (state) => {
      state.userName = '';
      state.userId = '';
      state.isAuth = false;
    },
  }
});

export const selectUser = (state) => state.userReducer;
export default userSlice.reducer;