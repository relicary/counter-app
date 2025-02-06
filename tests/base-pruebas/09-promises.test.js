import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test of 09-promises', () => { 
    
    test('getHeroeByIdAsync should return a Hero', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id ).then( hero => {

            expect( hero ).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });
        
    });

    test('getHeroeByIdAsync should fail due to an Worng ID', ( done ) => {
        
        const id = 99;

        getHeroeByIdAsync( id ).then( hero => {
            expect( hero ).toBeFalsy();
        })
        .catch( error => {

            expect( error ).toBe(`Hero could not be found ${ id }`);

            done();
        });
        
    });
      
 }); 