import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';

import './styles.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <CounterApp value={ 10 } />*/}
        <FirstApp title='Hello, I am Relicary' subTitle='This is a subtitle'/>
    </React.StrictMode>
);