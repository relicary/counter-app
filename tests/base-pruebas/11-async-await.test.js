import { getImage } from "../../src/base-pruebas/11-async-await";

describe('Test of 09-promises', () => { 
    
    test('getImage must return an URL', async() => {

        const url = await getImage();
        expect(typeof url).toBe('string');
        
    });
      
 }); 