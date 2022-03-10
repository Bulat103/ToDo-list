import React from 'react';
import AddTodo from './components/adddTodo/AddTodo';
import Registration from './components/Authorization/Registration';
import Header from './components/Header/Header';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
      <Registration />
    </div>
  );
}

export default App;
