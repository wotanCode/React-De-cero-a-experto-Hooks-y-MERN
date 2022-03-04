import React from 'react';
import  ReactDOM  from 'react-dom';

const saludo = <h1>HOla mundo</h1>;

console.log(saludo);

const divROOT = document.querySelector('#root');

ReactDOM.render(saludo, divROOT)