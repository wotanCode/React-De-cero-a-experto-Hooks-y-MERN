import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../hooks/useForm';

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

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: 'false',
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
          <ul className='list-group list-group-flush'>
            {todos.map((todo, idx) => (
              <li
                className='list-group-item'
                key={todo.id}
              >
                <p className='text-center'>{idx + 1}. {todo.desc}</p>
                <button className='btn btn-danger'>Borrar</button>
              </li>
            ))}
          </ul>
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