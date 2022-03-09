import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import {
  selectTodo,
} from '../redux/slicer/todoSlice';
import { getTodos } from '../redux/action/actionCreater';

function TodoList() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="todolist">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          done={item.done}
        />
      ))}
    </div>
  );
}

export default TodoList;
