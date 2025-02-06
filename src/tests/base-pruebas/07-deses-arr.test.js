import { returnArray } from "../../base-pruebas/07-deses-arr"

describe('Test of 07-deses-arr', () => { 
    
    test('returnArray must return a string and a number', () => { 

        const [ letters, numbers ] = returnArray();

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        expect( typeof letters).toBe('string');
        expect( typeof numbers).toBe('number');

        expect( letters ).toEqual(expect.any(String));
        expect( numbers ).toEqual(expect.any(Number));
    })
 })