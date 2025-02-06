import { usContext } from "../../base-pruebas/06-deses-obj"

describe('Test of 06-funciones', () => { 
    
    test('usContext must return an object', () => { 
        
        const context = usContext({ alias:'IronMan', age:45 });

        expect(context).toStrictEqual(
            {
                alias: 'IronMan',
                age: 45,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            });


     })
 })