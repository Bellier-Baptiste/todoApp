import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { UserProvider } from './contexts/userContext.tsx';
import { DarkModeProvider } from './contexts/darkModeContext.tsx';
import { SidebarProvider } from './contexts/sidebarContext.tsx';
import { DatabaseProvider } from './contexts/databaseContext.tsx';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <DarkModeProvider>
        <SidebarProvider>
          <DatabaseProvider>
            <App />
          </DatabaseProvider>
        </SidebarProvider>
      </DarkModeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
