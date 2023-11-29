// TaskDetailsPage.tsx
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { tasks, Task } from '../bdd/database';
import { useEffect, useState } from 'react';

const TaskDetailsPage = () => {
  // Utilisez useParams pour extraire l'ID de l'URL
  const { id } = useParams<{ id?: string }>();
  const [task, setTask] = useState<Task | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'ID est présent
    if (id) {
      const taskFromList = tasks.find(task => task.id === parseInt(id, 10));
      setTask(taskFromList);

      if (!taskFromList) {
        navigate('/error');
      }
    }
  }, [id, navigate]);

  if (!task) {
    return <p>Loading...</p>;
  }

  // Utilisez l'ID pour récupérer les détails de la tâche à afficher (à partir de votre base de données, par exemple)
  // Remplacez cette partie par votre logique pour récupérer les détails de la tâche
  const taskDetails = {
    // Les détails de la tâche basés sur l'ID
    // Remplacez cela par votre logique réelle
    id: Number(id),
    title: 'Task Title',
    description: 'Task Description',
    // ... d'autres détails de la tâche
  };

  return (
    <div>
      <Link to='/board'>
        <p style={{ marginRight: '20px', fontSize: '20px', color: 'black' }}>
          <FontAwesomeIcon icon={faCircleLeft} /> Back to Board
        </p>
      </Link>
      <h2>Task Details</h2>
      <div>
        <h3>{taskDetails.title}</h3>
        <p>{taskDetails.description}</p>
        {/* Affichez d'autres détails de la tâche ici */}
      </div>
    </div>
  );
};

export default TaskDetailsPage;
