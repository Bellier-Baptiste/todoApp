import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';

// Utilisez ReactDOM.render pour le rendu synchrone
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
