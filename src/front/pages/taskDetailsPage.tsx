import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { tasks as initialTasks, Task, upadateTask_2 } from '../bdd/database';
import { useEffect, useState } from 'react';
import { Typography, TextField, Button, MenuItem } from '@mui/material';
import { faPencil, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Colors from '../colors/colors';
import { useDarkMode } from '../contexts/darkModeContext';


const TaskDetailsPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [task, setTask] = useState<Task | undefined>();
  const [tasks, setTasks] = useState(initialTasks);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const navigate = useNavigate();
  const [titleValue, setTitleValue] = useState<string>();
  const [assignedToValue, setAssignedToValue] = useState<string>();
  const [dueDateValue, setDueDateValue] = useState<string>();
  const [stateValue, setStateValue] = useState<string>();
  const [categoryValue, setCategoryValue] = useState<string>();
  const [descriptionValue, setDescriptionValue] = useState<string>();
  const { isDarkMode } = useDarkMode();



  useEffect(() => {
    if (id) {
      const taskFromList = tasks.find(task => task.id === parseInt(id, 10));
      setTask(taskFromList);

      if (!taskFromList) {
        navigate('/error');
      }
    }
  }, [id, navigate, tasks]);

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

    if (titleValue !== undefined) {
      updatedTask.title = titleValue;
    }
  
    if (assignedToValue !== undefined) {
      updatedTask.assigned_to = assignedToValue;
    }
    /*
    if (dueDateValue !== undefined) {
      updatedTask.due_date = dueDateValue;
    }
    */
  
    if (stateValue !== undefined) {
      updatedTask.state = stateValue;
    }

    if (categoryValue !== undefined) {
      updatedTask.category = categoryValue;
    }
  
    if (descriptionValue !== undefined) {
      updatedTask.description = descriptionValue;
    }

    setTasks((prevTasks) => [...prevTasks, updatedTask]);
    //setTask(updatedTask);
    upadateTask_2(updatedTask);
    setIsEditable(false);
    navigate(-1);
  };
 
  const colors = Colors();
  
  const windowStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
    width: '100vw',
    color: isDarkMode ? colors.amethyst : colors.coffee,
  };

  const divStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? colors.darkGray : colors.coffee,
    width: '80vw',
    margin: 'auto',
    alignItems: 'center',
    borderRadius: '20px',
    padding: '20px',
    paddingTop: '40px',
  };

  const pencilIconStyle: React.CSSProperties = {
    position: 'relative', 
    marginLeft: '95%',
    fontSize: '20px',
    cursor: 'pointer',
    color: isDarkMode ? colors.amethyst : colors.bone,
  };

  const backButtonStyle: React.CSSProperties = {
    color: isDarkMode ? colors.amethyst : colors.coffee,
    alignItems: 'left',
  };

  const propStyle: React.CSSProperties = {
    color: isDarkMode ? colors.bone : colors.black,
  };

  const labelStyle: React.CSSProperties = {
      color: isDarkMode ? colors.bone : colors.black,
  };

  return (
    <div style={windowStyle}>
      <Link onClick={() => navigate(-1)} to={''}>
        <p style={backButtonStyle}>
          <FontAwesomeIcon style={backButtonStyle} icon={faCircleLeft} /> Back
        </p>
      </Link>
      <Typography variant="h4">Task Details</Typography>
      <div style={divStyle}>
        <FontAwesomeIcon onClick={() => {setIsEditable(true)}} style={pencilIconStyle} icon={faPencil} />
        <TextField label="Title" variant="outlined" value={titleValue} defaultValue={task.title ?? ''} fullWidth onChange={(e) => setTitleValue(e.target.value)} 
                  margin="normal" InputProps={{style: propStyle,  readOnly: !isEditable }} InputLabelProps={{style: labelStyle}}/>
        <TextField label="Created By" variant="outlined" value={task.created_by} fullWidth margin="normal" 
                  InputProps={{style: propStyle,  readOnly: !isEditable }} InputLabelProps={{style: labelStyle}} />
        <TextField label="Assigned To" variant="outlined" value={assignedToValue} defaultValue={task.assigned_to ?? ''} fullWidth onChange={(e) => setAssignedToValue(e.target.value)} 
                  margin="normal" InputProps={{style: propStyle,  readOnly: !isEditable }} InputLabelProps={{style: labelStyle}} />
        <TextField type="date" label="Due Date" variant="outlined" value={dueDateValue} defaultValue={task.due_date.toISOString().split('T')[0] ?? new Date()} 
                  fullWidth onChange={(e) => setDueDateValue(e.target.value)} margin="normal" disabled={!isEditable} InputProps={{style: propStyle}} InputLabelProps={{style: labelStyle}}/>
        <TextField label="Category" variant="outlined" value={categoryValue} defaultValue={task.category ?? ''} fullWidth onChange={(e) => setCategoryValue(e.target.value)} 
                  margin="normal" InputProps={{style: propStyle,  readOnly: !isEditable }} InputLabelProps={{style: labelStyle}}/>
        <TextField select label="State" variant="outlined" value={stateValue} defaultValue={task.state ?? 'Incomplete'} 
                  fullWidth onChange={(e) => setStateValue(e.target.value)} margin="normal" disabled={!isEditable} InputProps={{style: propStyle}} InputLabelProps={{style: labelStyle}}>
            <MenuItem value="Incomplete">Incomplete</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Complete">Complete</MenuItem>
        </TextField>
        <TextField label="Description" variant="outlined" value={descriptionValue} defaultValue={task.description} 
                  fullWidth multiline rows={4} onChange={(e) => setDescriptionValue(e.target.value)} margin="normal" 
                  InputProps={{style: propStyle,  readOnly: !isEditable }} InputLabelProps={{style: labelStyle}}/>
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
