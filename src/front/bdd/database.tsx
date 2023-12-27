// Définition des entités

interface User {
    id: number;
    name: string;
    password: string;
  }
  
  interface Project {
    id: number;
    title: string;
    members: string;
    tasks: Task[];
  }
  
  export interface Task {
    id: number;
    description: string | undefined;
    state: string | undefined;
    due_date: Date;
    created_by: string | null;
    title: string | undefined;
    assigned_to: string | undefined;
    category: string | undefined;
  }
  
  interface Category {
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
    { id: 1, description: 'Task1', state: 'Incomplete', due_date: new Date(), created_by: 'User1', title: 'Task 1', assigned_to: 'User2', category: 'Category1'},
    { id: 2, description: 'Task2', state: 'In Progress', due_date: new Date(), created_by: 'User2', title: 'Task 2', assigned_to: 'User1, User2', category: 'Category1'},
    { id: 3, description: 'Task3', state: 'Complete', due_date: new Date(), created_by: 'User2', title: 'Task 3', assigned_to: 'User1, User2', category: 'Category2'},
    { id: 4, description: 'Task4', state: 'Complete', due_date: new Date(), created_by: 'User2', title: 'Task 4', assigned_to: 'User1, User2', category: 'Category2'},
    { id: 5, description: 'Jour de Noël', state: 'Incomplete', due_date: new Date('December 25, 2023'), created_by: 'toto', title: 'Noël', assigned_to: 'Santa Claus', category: 'Fête'},
    { id: 6, description: 'Nouvel an', state: 'Incomplete', due_date: new Date('January 1, 2024'), created_by: 'toto', title: 'Nouvel an', assigned_to: 'Eve', category: 'Fête'},
  ];
  
  export const categories: Category[] = [
    { id: 1, title: 'Category1' },
    { id: 2, title: 'Category2' },
  ];
  
  // Exemple de manipulation des données
  
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


  
  // Utilisation des fonctions
  
  const userProjects = getProjectsByUser(1);
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
  