import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
  children: ReactNode;
}

const UserContext = createContext({} as { username: string | null; setUser: (name: string) => void });

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);

  const setUser = (name: string) => {
    setUsername(name);
  };

  return (
    <UserContext.Provider value={{ username, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
