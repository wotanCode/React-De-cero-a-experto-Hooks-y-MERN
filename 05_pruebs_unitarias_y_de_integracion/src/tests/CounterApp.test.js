import React from "react";
import PrimeraApp from "../CounterApp";
import {shallow} from 'enzyme'
import "@testing-library/jest-dom"

describe('Pruebas en componente counterApp', () => {
  test('Prebas de integracion', () =>{

    const valor = '31';
    const wrapper = shallow(<PrimeraApp value={valor}/>)

    expect( wrapper ).toMatchSnapshot();
    
  });

  test('Pruebas de valor, debe retornar 100', () => {
    const valor = '100';
    const wrapper = shallow(<PrimeraApp value={valor}/>)

    const numeroValor = wrapper.find('h2').text();

    expect(numeroValor).toBe(valor);


  });
});