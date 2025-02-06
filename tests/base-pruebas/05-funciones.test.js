import { getActiveUser, getUser } from "../../src/base-pruebas/05-funciones";

describe('Test of 05-funciones', () => { 

    test('getUser must return an object', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'relicary'
        };

        const user = getUser();

        expect( testUser ).toStrictEqual( user );

    });

    test('getActiveUser must return an object', () => {
        
        const username = 'Relicary';
        
        const user = getActiveUser( username );

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: username
        });

    })

 })