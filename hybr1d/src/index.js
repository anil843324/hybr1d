import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryContextProvider } from './context/QueryContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryContextProvider>
    <App />
    </QueryContextProvider>
  </React.StrictMode>
);
