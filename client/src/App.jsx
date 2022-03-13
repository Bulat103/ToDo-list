import React from 'react';
import AddTodo from './components/adddTodo/AddTodo';
import Login from './components/Authorization/Login';
import Registration from './components/Authorization/Registration';
import Header from './components/Header/Header';
import TodoList from './components/todoList/TodoList';
import {
  Route, Routes, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './components/redux/slicer/userSlice'

function App() {
  const isAuth = useSelector(selectUser).isAuth;
  console.log(isAuth);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {isAuth && <AddTodo />}
      {isAuth && <TodoList />}
    </div>
  );
}

export default App;
