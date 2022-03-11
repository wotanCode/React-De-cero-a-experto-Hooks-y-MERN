import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <Priemrapp />', () => {
  test('Debe de mostrar el mensaje "Hola soy pedrito"', () =>{

    const saludo = "Hola soy pedrito";
    const wrapper = render(<PrimeraApp saludo={saludo} />)

    //esto hubiera sido otra forma de hacerlo
    //const {getByText} = render(<PrimeraApp saludo={saludo} />)
    //Abajo hubiera quedado
    //expect( getByText(saludo) )

    expect( wrapper.getByText(saludo) ).toBeInTheDocument();



  })
})