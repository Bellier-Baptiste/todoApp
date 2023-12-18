import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { UserProvider } from './userContext.tsx';


window.addEventListener('error', (event) => {
    console.error('Erreur non capturée :', event.error);
});

// Utilisez ReactDOM.render pour le rendu synchrone
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
