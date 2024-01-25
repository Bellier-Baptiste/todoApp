import React, { createContext, useContext, ReactNode } from 'react';
import { Task, User, Project, Category, users, tasks, projects, addUser, categories, exportTasksToCSV, exportTasksToJSON, importTasks, updateTask, updateTasks, updateDatabase } from '../bdd/database';

interface DatabaseContextType {
  tasks: Task[];
  users: User[];
  projects: Project[];
  categories: Category[];
  updateTasks: (newTask: Task) => void;
  updateTask: (updatedTask: Task) => void;
  addUser: (user: User) => void;
  exportTasksToJSON: () => boolean;
  exportTasksToCSV: () => boolean;
  importTasks: (file: File) => Promise<Task[]>;
  updateDatabase: (importedTasks: Task[]) => void;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value: DatabaseContextType = {
      tasks,
      users,
      projects,
      categories,
      updateTasks,
      updateTask,
      addUser,
      exportTasksToJSON,
      exportTasksToCSV,
      importTasks,
      updateDatabase,
  };

  return <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>;
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};
export { importTasks, exportTasksToJSON, exportTasksToCSV };

