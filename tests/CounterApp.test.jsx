import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Test of <CounterApp />', () => { 

    const initialValue = 100;

    test('Should match with the Snapshot', () => { 

        const { container } = render(
            <CounterApp value={ initialValue } />
        );

        expect( container ).toMatchSnapshot();
     });

     test('Initial counter value should be 100', () => {

        render(
            <CounterApp value={ initialValue } />
        );

        expect(
            screen.getByRole("heading", { level: 2 }).innerHTML
        )
        .toContain('100');
                
        expect(
            screen.getByText(100)
        )
        .toBeTruthy();
     });

 })
 