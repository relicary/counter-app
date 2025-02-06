import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Test of 08-imp-exp', () => { 
    
    test('getHeroeById must return an hero by its ID', () => {
        
        const id = 1;
        
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeById must return undefined', () => {
        
        const id = 99;
        
        const hero = getHeroeById(id);

        expect(hero).toBeUndefined();

        expect(hero).toBeFalsy();

    });

    test('getHeroeById must return undefined', () => {
        
        const dcHeroes = getHeroesByOwner( 'DC' );

        expect(dcHeroes).toHaveLength(3);
        expect(dcHeroes.length).toEqual(3);

        expect(dcHeroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },            
        ]);

        const marvelHeroes = getHeroesByOwner( 'Marvel' );
        expect(marvelHeroes).toHaveLength(2);
        expect(marvelHeroes.length).toEqual(2);

        expect(marvelHeroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel'},           
        ]);

    })
 })
 