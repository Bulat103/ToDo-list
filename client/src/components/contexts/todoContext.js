import {
  createContext, useContext, useState, useEffect,
} from 'react';
import axios from 'axios';

export const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  // получение постов при первом рендере
  useEffect(() => {
    axios('/').then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  const addHandler = () => {
    const { value } = document.querySelector('.form-control');
    if (value) {
      axios.post('/', { title: value }).then((res) => {
        const arr = [...todos];
        arr.push({
          title: res.data.elem.title,
          done: res.data.elem.title.done,
          id: res.data.elem.title.id,
        });
        console.log(arr);
        setTodos(arr);
        console.log(todos);
        document.querySelector('.form-control').value = '';
      });
    }
  };

  const doneHandler = (event, id) => {
    const todo = event.target.closest('.todoitem').querySelector('p');
    console.log('event====', todo.classList.value);
    if (todo.classList.value == 'undone') {
      todo.classList.value = 'done';
      axios.put(`/${id}`).then((res) => console.log(res));
    }
  };

  const deleteHandler = (id) => {
    axios.delete(`/${id}`).then((res) => console.log(res));
    const arr = todos.filter((item) => item.id != id);
    setTodos(arr);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addHandler,
        deleteHandler,
        doneHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);

export default TodoContextProvider;
