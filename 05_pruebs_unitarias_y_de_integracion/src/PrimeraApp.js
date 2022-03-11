import React from "react";
import PropTypes from "prop-types";

//FC funcional components
const PrimeraApp = ( {saludo, subtitulo } ) => {

  return (
    <>
      <h1> {saludo} </h1>
      <h2> { subtitulo } </h2>
    </>
  );
};

PrimeraApp.protoType = {
  saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;