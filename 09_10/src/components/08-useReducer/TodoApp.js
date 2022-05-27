import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Comer hamburguesa',
  done: false,
}]

export const TodoApp = () => {

  const [todos] = useReducer(todoReducer, initialState);

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

          <form>

            <div className='form-group'>
              <input
                type='text'
                name='description'
                className='form-control'
                placeholder='Agregar TODO'
                autoComplete='off'
              />
            </div>

            <button
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