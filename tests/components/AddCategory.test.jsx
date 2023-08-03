import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";



describe('Pruebas en AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () =>{}} /> );//creo sujeto de pruebas
        
        const input = screen.getByRole('textbox');  //tomo el input

        fireEvent.input( input, { target: { value: 'Saitama' } } );//disparo el evento
        expect( input.value ).toBe('Saitama');
        // screen.debug(); 
    })
 })