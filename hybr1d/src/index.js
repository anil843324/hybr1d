import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryContextProvider } from './context/QueryContext';

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <QueryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryContextProvider>
  </React.StrictMode>
);
