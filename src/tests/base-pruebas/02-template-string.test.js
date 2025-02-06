import { getGreeting } from "../../base-pruebas/02-template-string";

describe('Test of 02-template-string', () => { 
    test('getGreeting must return "Hello Relicary"', () => { 
        const firstname = 'Relicary';
        const message = getGreeting( firstname );

        expect( message ).toBe( `Hello ${firstname}`);
     })
 })