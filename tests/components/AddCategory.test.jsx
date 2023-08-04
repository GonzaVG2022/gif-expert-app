import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";



describe('Pruebas en AddCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () =>{}} /> );//creo sujeto de pruebas
        
        const input = screen.getByRole('textbox');  //tomo el input

        fireEvent.input( input, { target: { value: 'Saitama' } } );//disparo el evento
        expect( input.value ).toBe('Saitama');
        // screen.debug(); 
    });
    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); //debo agregar un aria-label para que lo encuentre

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');//compruebo que quede vacío 
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
                
        // screen.debug();
     });
     test('no debe llamar al onNewCategory si el input esta vacío', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

       
        




    });
 });