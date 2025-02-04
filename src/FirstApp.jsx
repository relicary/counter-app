const getGreeting = (message, title) => {
    return <h1>{message} {title}</h1>
};

const newMessage = {
    message: 'Hello',
    title: 'Relicary'
};

export const FirstApp = () => {

    return (
        <>
            { getGreeting(newMessage.message, newMessage.title) }
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <p>I am a subtitle</p>
        </>
    );
}