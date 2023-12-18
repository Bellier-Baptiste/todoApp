// TaskDetailsPage.tsx
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { tasks, Task } from '../components/database/database';
import { useEffect, useState } from 'react';
import { Typography, TextField, Button, MenuItem } from '@mui/material';
import { faPencil, faSpinner } from '@fortawesome/free-solid-svg-icons';

const TaskDetailsPage = () => {
  // Utilisez useParams pour extraire l'ID de l'URL
  const { id } = useParams<{ id?: string }>();
  const [task, setTask] = useState<Task | undefined>(undefined);
  const [isEditable, setIsEditable] = useState<boolean>(false);
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
    return (
        <div>
            <FontAwesomeIcon style={{fontSize: '60px'}} icon={faSpinner} spin />
            <p>Loading</p>
        </div>
    );
  }

  // Utilisez l'ID pour récupérer les détails de la tâche à afficher (à partir de votre base de données, par exemple)
  // Remplacez cette partie par votre logique pour récupérer les détails de la tâche
 
  const divStyle: React.CSSProperties = {
    backgroundColor: 'grey',
    borderRadius: '20px',
    padding: '20px',
    paddingTop: '40px',
  };

  const pencilIconStyle: React.CSSProperties = {
    position: 'absolute', 
    top: '160px',
    right: '55px',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'black',
  };

  return (
    <div>
      <Link to='/board'>
        <p style={{ marginRight: '20px', fontSize: '20px', color: 'white' }}>
          <FontAwesomeIcon style={{alignItems: 'left'}} icon={faCircleLeft} /> Back
        </p>
      </Link>
      <Typography variant="h4">Task Details</Typography>
      <div style={divStyle}>
        <FontAwesomeIcon onClick={() => {setIsEditable(true)}} style={pencilIconStyle} icon={faPencil} />
        <TextField label="Title" variant="outlined" value={task.title} fullWidth margin="normal" InputProps={{ readOnly: !isEditable }} />
        <TextField label="Created By" variant="outlined" value={task.created_by} fullWidth margin="normal" InputProps={{ readOnly: true }} />
        <TextField label="Assigned To" variant="outlined" value={task.assigned_to} fullWidth margin="normal" InputProps={{ readOnly: !isEditable }} />
        <TextField label="Due Date" variant="outlined" value={task.due_date.toDateString()} fullWidth margin="normal" InputProps={{ readOnly: !isEditable }} />
        <TextField label="Category" variant="outlined" value={task.category} fullWidth margin="normal" InputProps={{ readOnly: !isEditable }} />
        <TextField select label="State" variant="outlined" value={task.state} fullWidth margin="normal" InputProps={{ readOnly: !isEditable }}>
            <MenuItem value="Incomplete">Incomplete</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Complete">Complete</MenuItem>
        </TextField>
        <TextField label="Description" variant="outlined" value={task.description} fullWidth multiline rows={4} margin="normal" InputProps={{ readOnly: !isEditable }} />
        {isEditable ? 
                    <Button variant="contained" onClick={() => { /* Logique pour la modification */ }} style={{ backgroundColor: 'rgba(75, 75, 75, 1)', color: 'white' }}>
                        Modifier
                    </Button> 
        : <></>}
      </div>
    </div>
  );
};

export default TaskDetailsPage;
