import React, { useEffect } from 'react';
import AddTodo from './components/adddTodo/AddTodo';
import Login from './components/Authorization/Login';
import Registration from './components/Authorization/Registration';
import Header from './components/Header/Header';
import TodoList from './components/todoList/TodoList';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './components/redux/slicer/userSlice';
import { userRefresh } from './components/redux/action/userActionCreater'

function App() {
  const isAuth = useSelector(selectUser).isAuth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh())
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        {!isAuth && <Route path='/registration' element={<Registration />} />}
        {!isAuth && <Route path='/login' element={<Login />} />}
      </Routes>
      {isAuth && <AddTodo />}
      {isAuth && <TodoList />}
    </div>
  );
}

export default App;
