const newMessage = {
    message: 'Hello World',
    title: 'Relicary'
};

export const FirstApp = () => {

    return (
        <>
            <h1>{JSON.stringify(newMessage)}</h1>
            <p>I am a subtitle</p>
        </>
    );
}