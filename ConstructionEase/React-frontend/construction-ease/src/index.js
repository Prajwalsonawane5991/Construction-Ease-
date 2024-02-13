import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root.render(

    <App />

);
root1.render(
    <App1 />
)
