import { fireEvent, screen, render } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: {value: 'Saitama'}});
        
        expect(input.value).toBe('Saitama');
        // screen.debug(); 

    });
});