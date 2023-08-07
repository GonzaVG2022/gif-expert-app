import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFechGifs } from "../../src/hooks/useFechGifs";

jest.mock(`../../src/hooks/useFechGifs`)

describe('Pruebas en <GifGrid/>', () => { //loading cunado se inicia la app
    const category = 'One Punch'
    test('debe mostrar el loading', () => { 
        useFechGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        // screen.debug();
        expect( screen.getAllByText('...Cargando...') );
        expect( screen.getAllByText( category ) );

     });
     test('debe mostrar item cuando se cargan las imagenes useFechGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title:'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title:'Goku',
                url:'https://localhost/goku.jpg'
            }
        ];
        useFechGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>)
        screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);

      })
     
 });