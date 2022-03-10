/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeState } from '../redux/action/todoActionCreater';

function TodoItem({ id, title, done }) {
  const dispatch = useDispatch();

  const deleteHandler = (event) => {
    const itemId = event.target.dataset.id;
    dispatch(deleteTodo(itemId));
  };
  const changeStateHandler = (event) => {
    const itemId = event.target.dataset.id;
    dispatch(changeState(itemId));
  };
  return (
    <div className="todoitem">
      <div className="row ">
        <div className="col-1">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              data-id={id}
              checked={done ? 'checked' : ''}
              onChange={(event) => changeStateHandler(event)}
            />
          </div>
        </div>
        <div className="col-9">
          <div className="title">
            <p className={done ? 'done' : 'undone'}>{title}</p>
          </div>
        </div>
        <div className="col-2">
          <button
            className="delete"
            type="button"
            data-id={id}
            onClick={(event) => deleteHandler(event)}
          >
            Delete
          </button>
        </div>
      </div>

    </div>
  );
}

export default TodoItem;
