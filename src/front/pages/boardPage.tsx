import Section from '../components/content/section';
import Ticket from '../components/content/ticket';
import { tasks as initialTasks} from '../bdd/database';
import Navbar from '../components/navigation/navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const BoardPage = () => {

  const [tasks] = useState(initialTasks);
  const [tasksTodo, setTasksTodo] = useState(initialTasks.filter(task => task.state === 'Incomplete'));
  const [tasksInProgress, setTasksInProgress] = useState(initialTasks.filter(task => task.state === 'In Progress'));
  const [tasksCompleted, setTasksCompleted] = useState(initialTasks.filter(task => task.state === 'Complete'));
  

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setTasksTodo(tasks.filter(task => task.state === 'Incomplete'));
    setTasksInProgress(tasks.filter(task => task.state === 'In Progress'));
    setTasksCompleted(tasks.filter(task => task.state === 'Complete'));
  }, [tasks]);

  const addButtonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? 'rgba(186, 183, 183, 0.7)' : 'rgba(186, 183, 183, 0.4)',
    color: 'black',
};

  return (
    <div style={{width: '100vw'}}>
      <Navbar showSearchInput={false} />
      <h1>Board Page</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '90vw', margin: 'auto', marginBottom: '10px' }}>
        <Section label="Todo" size="30%" bColor="rgba(251, 173, 173, 1)">
          {tasksTodo.map(task => (
            <Ticket
              key={task.id}
              taskName={task.title}
              assignedTo={task.assigned_to}
              deadline={task.due_date.toDateString()}
              id={task.id}
            />
          ))}
        </Section>
        <Section label="Open" size="30%" bColor="rgba(251, 218, 173, 1)">
          {tasksInProgress.map(task => (
            <Ticket
              key={task.id}
              taskName={task.title}
              assignedTo={task.assigned_to}
              deadline={task.due_date.toDateString()}
              id={task.id}
            />
          ))}
        </Section>
        <Section label="Closed" size="30%" bColor="rgba(196, 251, 173, 1)">
          {tasksCompleted.map(task => (
            <Ticket
              key={task.id}
              taskName={task.title}
              assignedTo={task.assigned_to}
              deadline={task.due_date.toDateString()}
              id={task.id}
            />
          ))}
        </Section>
      </div >
        <Link to="/newTask">
            <Button style={addButtonStyle} onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}>
              Add
            </Button>
        </Link>
    </div>
  );
};

export default BoardPage;
