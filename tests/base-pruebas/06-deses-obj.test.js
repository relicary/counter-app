import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Test of 06-deses-obj', () => { 
    
    test('usContext must return an object', () => { 
        
        const { alias: aliasReceived, age: ageReceived} = usContext({ alias: 'IronMan', age: 45 });

        expect(aliasReceived).toStrictEqual('IronMan');
        expect(ageReceived).toStrictEqual(45);

     })
 })