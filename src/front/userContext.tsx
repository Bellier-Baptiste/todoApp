// userContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

interface UserContextProps {
  userName: string | null;
  setUser: (name: string | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userName, setUserName] = useState<string | null>(null);

  const setUser = (name: string | null) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, setUser }}>
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
