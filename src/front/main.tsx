import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { UserProvider } from './contexts/userContext.tsx';
import { DarkModeProvider } from './contexts/darkModeContext.tsx';
import { SidebarProvider } from './contexts/sidebarContext.tsx';

// Utilisez ReactDOM.render pour le rendu synchrone
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <DarkModeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </DarkModeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
