// Définition des entités

import path from "path";
import fs from "fs/promises";

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
    description: string;
    state: string;
    due_date: Date;
    created_by: string | null;
    title: string;
    assigned_to: string;
    category: string;
  }
  
  interface Category {
    id: number;
    title: string;
  }
  
  // Données simulées

  export const users = await readJsonFile('users');
  
  export const projects = await readJsonFile('projects');
  
  export const tasks = await readJsonFile('tasks');
  
  export const categories = await readJsonFile('categories')

//const dirname = path.dirname(new URL(import.meta.url).pathname);
const dataPath = '/';

async function readJsonFile(fileName: string) {
  try {
    const filePath = path.join(dataPath, `${fileName}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading JSON file ${fileName}:`, error);
    return null;
  }
}

async function getProjectsByUser(userId: number): Promise<Project[]> {
  return projects.filter((project: Project) => project.members.includes(`User${userId}`));
}

async function getTasksByUser(userId: number): Promise<Task[]> {
  return tasks.filter((task: Task) => task.assigned_to === `User${userId}`);
}

async function getTasksByCategory(category: string): Promise<Task[]> {
  return tasks.filter((task: Task) => task.category === category);
}

async function getAllCategories(): Promise<Category[]> {
  return readJsonFile('categories');
}

async function getAllUsers(): Promise<User[]> {
  return readJsonFile('users');
}

export async function updateTasks(newTask: Task): Promise<void> {
  tasks.push(newTask);
  await fs.writeFile(path.join(dataPath, 'tasks.json'), JSON.stringify(tasks, null, 2), 'utf-8');
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
  console.log('All tasks:', tasks);
