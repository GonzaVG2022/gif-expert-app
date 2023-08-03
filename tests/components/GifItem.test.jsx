import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Prueba en <GifItem/>', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    test('debe hacer march contra el snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url }/> );
        expect ( container ).toMatchSnapshot();
    });
    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={ title } url={ url }/>);
        const{ src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });
});