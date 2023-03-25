import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components";

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'http://asd.com/abc.jpg'
    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render(<GifItem title={title} url = {url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render(<GifItem title={title} url = {url} />);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });
});