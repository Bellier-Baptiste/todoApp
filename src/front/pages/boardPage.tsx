import Section from '../components/content/section';
import Ticket from '../components/content/ticket';
import { tasks as initialTasks} from '../bdd/database';
import Navbar from '../components/navigation/navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Colors from '../colors/colors';
import { useDarkMode } from '../contexts/darkModeContext';

const BoardPage = () => {

  const [tasks] = useState(initialTasks);
  const [tasksTodo, setTasksTodo] = useState(initialTasks.filter(task => task.state === 'Incomplete'));
  const [tasksInProgress, setTasksInProgress] = useState(initialTasks.filter(task => task.state === 'In Progress'));
  const [tasksCompleted, setTasksCompleted] = useState(initialTasks.filter(task => task.state === 'Complete'));
  

  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setTasksTodo(tasks.filter(task => task.state === 'Incomplete'));
    setTasksInProgress(tasks.filter(task => task.state === 'In Progress'));
    setTasksCompleted(tasks.filter(task => task.state === 'Complete'));
  }, [tasks]);

  const colors = Colors();

  const divStyle: React.CSSProperties = {
    width: '100vw',
    backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
  };

  const addButtonStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? isHovered ? colors.black : colors.darkSlateGray : isHovered ? colors.lightCoffee : colors.coffee,
    color: isDarkMode ? colors.amethyst : colors.black,
  };

  const titleStyle: React.CSSProperties = {
    color: isDarkMode ? colors.amethyst : colors.coffee,
  };

  return (
    <div style={divStyle}>
      <Navbar showSearchInput={false} />
      <h1 style={titleStyle}>Board Page</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '90vw', margin: 'auto', marginBottom: '10px' }}>
        <Section label="Todo" size="30%" bColor={isDarkMode ? colors.darkRed : colors.creamRed}>
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
        <Section label="Open" size="30%" bColor={isDarkMode ? colors.darkOrange : colors.lightOrange}>
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
        <Section label="Closed" size="30%" bColor={isDarkMode ? colors.darkGreen : colors.lightGreen}>
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
