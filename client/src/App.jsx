import React from 'react';
import AddTodo from './components/adddTodo/AddTodo';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
