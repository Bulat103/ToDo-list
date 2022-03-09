/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action/actionCreater';

function AddTodo() {
  const [value, setValue] = useState('');
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch();
  const inputHandler = (event) => {
    setValue(event.target.value);
  };
  const add = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo(value));
    } else {
      setWarning('Emty field');
      setTimeout(() => {
        setWarning('');
      }, 2000);
    }
    setValue('');
  };

  return (
    <div className="addTodo">
      <form onSubmit={(event) => add(event)}>
        <div className="mb-3">
          <label className="form-label">TODO</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter what to do" value={value} onChange={(event) => inputHandler(event)} />
        </div>
        <button type="submit" className="btn btn-primary">AddTodo</button>
      </form>
      <div>{warning}</div>
    </div>
  );
}

export default AddTodo;
