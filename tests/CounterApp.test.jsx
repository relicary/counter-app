import { fireEvent, render, screen } from "@testing-library/react"
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

     test('Should increment value with +1 button', () => {
        
        render(
            <CounterApp value={ initialValue } />
        );

        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText( initialValue + 1 ) ).toBeTruthy();

     });

     test('Should decrement value with -1 button', () => {
        
        render(
            <CounterApp value={ initialValue } />
        );

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText( initialValue - 1 ) ).toBeTruthy();

     });

     test('Should reset value with Reset button', () => {
        
        render(
            <CounterApp value={ initialValue } />
        );

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        fireEvent.click( screen.getByText('Reset') );

        expect( screen.getByText( initialValue ) ).toBeTruthy();

     });

     test('Should reset value with Reset button', () => {
        
        render(
            <CounterApp value={ initialValue } />
        );

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        fireEvent.click(
            screen.getByRole('button', { name: 'btn-reset' })
        );

        expect( screen.getByText( initialValue ) ).toBeTruthy();        

     });

 })
 
 