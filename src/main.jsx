import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    // document.createElement
    return (<h1>Hi World</h1>);
}

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);