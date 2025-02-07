import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Test in <FirstApp />', () => { 

    test('Shoul be match with the Snapshot', () => {

        const title = 'Hello, I am Relicary';
        const subTitle = 'This is a subtitle';

        // Updates the screen, returns a container (where we can get the snaphost)
        const { container } = render( <FirstApp title={title} subTitle={subTitle} /> );

        expect(container).toMatchSnapshot();

    });

    test('Should render the title inside a H1 tag', () => {

        const title = 'Hello, I am Relicary';
        const subTitle = 'This is a subtitle';

        const { container, getByText, getByTestId } = render( <FirstApp title={title} subTitle={subTitle} /> );

        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');

        // expect(h1.innerHTML).toBe( title );
        // expect(h1.innerHTML).toContain( title );

        expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('Should render the subTitle sent by Props', () => { 
        const title = 'Hello, I am Relicary';
        const subTitle = 'This is a subtitle';

        const { getByText, getAllByText } = render(
            <FirstApp title={title} subTitle={subTitle} /> 
        );

        expect( getByText(subTitle) ).toBeTruthy();
        expect( getAllByText(subTitle).length ).toBe(1);
        
     })

 })
 