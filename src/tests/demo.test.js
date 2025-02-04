test('This test shoud not fail', () => {
    if ( 1 === 0 ) {
        throw new Error('Zero cannot be divided between zero.');
        
    }
})