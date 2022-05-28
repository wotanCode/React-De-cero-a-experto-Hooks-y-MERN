import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../hooks/useForm';

import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {

    const action = {
      type: 'Borrar',
      payload: todoId,
    }

    dispatch(action);
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'Toggle',
      payload: todoId,
    });
  }

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    const action = {
      type: 'Agregar',
      payload: newTodo,
    }

    dispatch(action);

    reset();

  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>

          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />

        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleAddSubmit}>

            <div className='form-group'>
              <input
                type='text'
                name='description'
                className='form-control'
                placeholder='Agregar T'
                autoComplete='off'
                value={description}
                onChange={handleInputChange}
              />
            </div>

            <button
              type='submit'
              className='btn btn-outline-primary mt-1 btn-block'
            >
              Agregar
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}