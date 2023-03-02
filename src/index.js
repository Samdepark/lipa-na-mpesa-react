import React from 'react';
import ReactDOM from 'react-dom/client';
import './table.css';
import Trans from './trans';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <hr/>
    <Trans/>
  </React.StrictMode>
);