// UserContext.tsx
import { createContext, useContext, ReactNode, useState, FC, Dispatch, SetStateAction } from 'react';

interface UserContextProps {
  username: string | undefined;
  setUsername: Dispatch<SetStateAction<string | undefined>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string | undefined>(undefined);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
