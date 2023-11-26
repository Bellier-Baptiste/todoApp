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
  
  interface Task {
    id: number;
    description: string;
    state: string;
    due_date: Date;
    created_by: string;
    title: string;
    assigned_to: string;
    category: string;
  }
  
  interface Category {
    id: number;
    title: string;
  }
  
  // Données simulées
  
  export const users: User[] = [
    { id: 1, name: 'User1', password: 'password1' },
    { id: 2, name: 'User2', password: 'password2' },
  ];
  
  export const projects: Project[] = [
    { id: 1, title: 'Project1', members: 'User1, User2', tasks: [] },
    { id: 2, title: 'Project2', members: 'User1', tasks: [] },
  ];
  
  export const tasks: Task[] = [
    { id: 1, description: 'Task1', state: 'Incomplete', due_date: new Date(), created_by: 'User1', title: 'Task 1', assigned_to: 'User2', category: 'Category1'},
    { id: 2, description: 'Task2', state: 'In Progress', due_date: new Date(), created_by: 'User2', title: 'Task 2', assigned_to: 'User1, User2', category: 'Category1'},
    { id: 3, description: 'Task3', state: 'Complete', due_date: new Date(), created_by: 'User2', title: 'Task 3', assigned_to: 'User1, User2', category: 'Category2'},
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
  