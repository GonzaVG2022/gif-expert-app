import { renderHook, waitFor } from "@testing-library/react"
import { useFechGifs } from "../../src/hooks/useFechGifs"

describe('Prueba de Hooks useFechGifs', () => {
    test('debe de regresar el estado inicial', () => { 
        const { result } = renderHook( () => useFechGifs('One Punch') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
     });    
     test('debe de retornar un arreglo de img y isLoading en false', async() => { 
        const { result } = renderHook( () => useFechGifs('One Punch') );
        
        
        await waitFor(
           () => expect( result.current.images.length ).toBeGreaterThan(0) 
        );
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
     });  

});