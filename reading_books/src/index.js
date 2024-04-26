import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

import { BooksContextProvider } from './context/BooksContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BooksContextProvider>
        <App />
    </BooksContextProvider>
);

