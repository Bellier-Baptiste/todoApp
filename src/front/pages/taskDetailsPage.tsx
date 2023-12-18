// TaskDetailsPage.tsx
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { tasks, Task, updateTask } from '../bdd/database';
import { useEffect, useState } from 'react';
import { Typography, TextField, Button, MenuItem } from '@mui/material';
import { faPencil, faSpinner } from '@fortawesome/free-solid-svg-icons';


const TaskDetailsPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [task, setTask] = useState<Task | undefined>();
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const navigate = useNavigate();
  const [titleValue, setTitleValue] = useState<string>();
  const [assignedToValue, setAssignedToValue] = useState<string>();
  const [dueDateValue, setDueDateValue] = useState<string>();
  const [stateValue, setStateValue] = useState<string>();
  const [categoryValue, setCategoryValue] = useState<string>();
  const [descriptionValue, setDescriptionValue] = useState<string>();


  useEffect(() => {
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

  const handleUpdateTask = () => {
    const updatedTask = { ...task };

    updatedTask.title = titleValue;
    updatedTask.assigned_to = assignedToValue;

    setTask(updatedTask);
    updateTask(updatedTask);

    setIsEditable(false);
  };
 
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
        <TextField label="Title" variant="outlined" value={titleValue} defaultValue={task.title || ''} fullWidth onChange={(e) => setTitleValue(e.target.value)} margin="normal" InputProps={{ readOnly: !isEditable }} />
        <TextField label="Created By" variant="outlined" value={task.created_by} fullWidth margin="normal" InputProps={{ readOnly: true }} />
        <TextField label="Assigned To" variant="outlined" value={assignedToValue} defaultValue={task.assigned_to ? task.assigned_to : ''} fullWidth onChange={(e) => setAssignedToValue(e.target.value)} margin="normal" InputProps={{ readOnly: !isEditable }} />
        <TextField type="date" label="Due Date" variant="outlined" value={dueDateValue} defaultValue={task.due_date.toISOString().split('T')[0]} fullWidth onChange={(e) => setDueDateValue(e.target.value)} margin="normal" disabled={!isEditable} />
        <TextField label="Category" variant="outlined" value={categoryValue} defaultValue={task.category} fullWidth onChange={(e) => setCategoryValue(e.target.value)} margin="normal" InputProps={{ readOnly: !isEditable }} />
        <TextField select label="State" variant="outlined" value={stateValue} defaultValue={task.state} fullWidth onChange={(e) => setStateValue(e.target.value)} margin="normal" disabled={!isEditable}>
            <MenuItem value="Incomplete">Incomplete</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Complete">Complete</MenuItem>
        </TextField>
        <TextField label="Description" variant="outlined" value={descriptionValue} defaultValue={task.description} fullWidth multiline rows={4} onChange={(e) => setDescriptionValue(e.target.value)} margin="normal" InputProps={{ readOnly: !isEditable }} />
        {isEditable ? 
          <Button variant="contained" onClick={handleUpdateTask} style={{ backgroundColor: 'rgba(75, 75, 75, 1)', color: 'white' }}>
              Apply
          </Button> 
        : <></>}
      </div>
    </div>
  );
};

export default TaskDetailsPage;
