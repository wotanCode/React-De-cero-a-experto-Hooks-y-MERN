import '../02-useEffect/effects.css';
import { useFetch } from '../hooks/useFetch';

//const URL = 'https://www.breakingbadapi.com/api/quotes/1'

export const MultipleCustomHooks = () => {

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)

  console.log(state);


  return (
    <div>
      <h1>Custom hooks!!!</h1>
    </div>
  )
};