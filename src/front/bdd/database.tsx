import Papa from 'papaparse';

// Définition des entités

export interface User {
    id: number;
    name: string;
    password: string;
}
  
export interface Project {
  id: number;
  title: string;
  members: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string | undefined;
  assigned_to: string | undefined;
  due_date: Date;
  state: string | undefined;
  description: string | undefined;    
  category: string | undefined;
  created_by: string | null;
}

export interface Category {
  id: number;
  title: string;
}

// Données simulées

export const users: User[] = [
  { id: 1, name: 'User1', password: 'password1' },
  { id: 2, name: 'User2', password: 'password2' },
  { id: 3, name: 'toto', password: 'root' },
];

export const projects: Project[] = [
  { id: 1, title: 'Project1', members: 'User1, User2', tasks: [] },
  { id: 2, title: 'Project2', members: 'User1', tasks: [] },
];

export const tasks: Task[] = [
  {id: 1, title: 'Task 1', assigned_to: 'User2', due_date: new Date(), state: 'Incomplete', description: 'Task1', category: 'Category1', created_by: 'User1'},
  {id: 2, title: 'Task 2', assigned_to: 'User1, User2', due_date: new Date(), state: 'In Progress', description: 'Task2', category: 'Category1', created_by: 'User2'},
  {id: 3, title: 'Task 3', assigned_to: 'User1, User2', due_date: new Date(), state: 'Complete', description: 'Task3', category: 'Category2', created_by: 'User2'},
  {id: 4, title: 'Task 4', assigned_to: 'User1, User2', due_date: new Date(), state: 'Complete', description: 'Task4', category: 'Category2', created_by: 'User2'},
  {id: 5, title: 'Noël', assigned_to: 'Santa Claus', due_date: new Date('December 25, 2023'), state: 'Complete', description: 'Jour de Noël', category: 'Fête', created_by: 'toto'},
  {id: 6, title: 'Nouvel an', assigned_to: 'Eve', due_date: new Date('January 1, 2024'), state: 'Complete', description: 'Nouvel an', category: 'Fête', created_by: 'toto'}
];

export const categories: Category[] = [
  { id: 1, title: 'Category1' },
  { id: 2, title: 'Category2' },
];

// Exemple de manipulation des données
/*
function getProjectsByUser(userId: number): Project[] {
  return projects.filter(project => project.members.includes(`User${userId}`));
}

function getTasksByUser(userId: number): Task[] {
  return tasks.filter(task => task.assigned_to === `User${userId}`);
}

function getTasksByCategory(category: string): Task[] {
  return tasks.filter(task => task.category === category)
}

function getAllCategories() {
  return categories
}

function getAllUsers() {
  return users
}
*/
export const updateTasks = (newTask: Task) => {
  tasks.push(newTask);
}

export const updateTask = (updatedTask: Task): Task[] => {
  const index = tasks.findIndex(task => task.id === updatedTask.id);

  if (index !== -1) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    return updatedTasks;
  }

  return tasks;
};

export const upadateTask_2 = (updatedTask: Task): Task[] => {
  const index = tasks.findIndex(task => task.id === updatedTask.id);

  if (index !== -1) {
    tasks.splice(index, 1, updatedTask);
  }

  return [...tasks];
};

export const addUser = (user: User) => {
  users.push(user);
};

export const exportTasksToJSON = () => {
  const jsonString = JSON.stringify(tasks, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const link = document.createElement('a');

  link.href = URL.createObjectURL(blob);
  link.download = 'tasks.json';
  link.click();

  URL.revokeObjectURL(link.href);
  return true;
};

export const updateDatabase = (importedTasks: Task[]) => {
  tasks.splice(0, tasks.length);
  tasks.push(...importedTasks);
  console.log('database : ',tasks)
};

export const exportTasksToCSV = () => {
  const csvData = Papa.unparse(tasks, {
    header: true,
    delimiter: ',',
  });

  const blob = new Blob([csvData], { type: 'text/csv' });
  const link = document.createElement('a');

  link.href = URL.createObjectURL(blob);
  link.download = 'tasks.csv';
  link.click();

  URL.revokeObjectURL(link.href);
  return true;
};

export const importTasks = (file: File): Promise<Task[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        if (event?.target?.result) {
          const importedTasks: Task[] = JSON.parse(event.target.result as string);
          console.log(importedTasks);
          resolve(importedTasks);
        }
      } catch (error) {
        console.error('Erreur lors de l\'import du fichier :', error);
        reject(error);
      }
    };

    reader.readAsText(file);
  });
};



  
  // Utilisation des fonctions
  /*  const userProjects = getProjectsByUser(1);
  const userTasks = getTasksByUser(1);
  const taskCategories = getTasksByCategory("Category1");
  const allCategories = getAllCategories();
  const allUsers = getAllUsers();
  
  console.log('Projects for User1:', userProjects);
  console.log('Tasks assigned to User1:', userTasks);
  console.log('Existing users:', allUsers);
  console.log('Existing categories:', allCategories);
  console.log('Task of category 1:', taskCategories);
  console.log('All tasks:', tasks);
  */