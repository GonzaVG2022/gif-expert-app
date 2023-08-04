import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"

describe('Pruebas en <GifGrid/>', () => { //loading cunado se inicia la app
    const category = 'One Punch'
    test('debe mostrar el loading', () => { 
        render(<GifGrid category={category}/>);
        // screen.debug();
        expect( screen.getAllByText('...Cargando...') );
        expect( screen.getAllByText( category ) );

     });
     
 });