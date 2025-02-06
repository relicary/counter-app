import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Test in <FirstApp />', () => { 

    test('Shoul be match with the Snapshot', () => {

        const title = '';
        const subTitle = '';

        render( <FirstApp title={title} subTitle={subTitle} /> )
    })

 })