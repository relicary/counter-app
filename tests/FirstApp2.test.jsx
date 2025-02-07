import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Test in <FirstApp />', () => { 

    const title = 'Hello, I am Relicary'
    const subTitle = 'This is a subtitle'

    test('Should match with the Snapshot', () => { 
        const { container } = render(
            <FirstApp title={ title } subTitle={ subTitle }/>
        );
        expect( container ).toMatchSnapshot();
     });

     test('Should render the message of title', () => {
        render(
            <FirstApp title={ title } subTitle={ subTitle }/>
        );
        expect( screen.getByText(title) ).toBeTruthy();
     });

     test('Should render the message of title inside an H1', () => {
        render(
            <FirstApp title={ title } subTitle={ subTitle }/>
        );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML )
            .toContain( title );
     });

     test('Should render the message of subtitle sent by props', () => {
        render(
            <FirstApp title={ title } subTitle={ subTitle }/>
        );
        expect( screen.getAllByText(subTitle).length ).toBe(1);            
     });

 })
 