import React from "react";
import PropTypes from 'prop-types'



const CounterApp = ( { value } ) => {

  // hadleAdd
  const handleAdd = (e)=>{
    console.log(e)
  }

  return(
    <>
      <h1>Counter App</h1>
      <h2> {value} </h2>

      <button onClick={ (e) => {handleAdd} }>+1</button>
    </>
  )
};
CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;