import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface SidebarContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export { SidebarProvider, useSidebar };
