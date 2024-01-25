import React, { FormEvent, useEffect, useRef, useState } from 'react';
//import { tasks as initialTasks, updateTasks } from '../../bdd/database';
import { Alert, Button, MenuItem, TextField } from '@mui/material';
import { useUser } from '../../contexts/userContext';
import Colors from '../../colors/colors';
import { useDarkMode } from '../../contexts/darkModeContext';
import { useDatabase } from '../../contexts/databaseContext';


const Form = () => {
    const { isDarkMode } = useDarkMode();
    const { tasks, updateTasks } = useDatabase();
    //const [tasks, setTasks] = useState(initialTasks);
    const { username } = useUser();
    const alertTimeout = 3000;


    const [description, setDescription] = useState('');
    const [state, setState] = useState('Incomplete');
    const [dueDate, setDueDate] = useState('');
    const [title, setTitle] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [, setFormIsValid] = useState<boolean>(true);
    const [ alert, setAlert ] = useState<React.ReactNode | null>(null);

    const titleRef = useRef<HTMLInputElement>(null);
    const assignedToRef = useRef<HTMLInputElement>(null);
    const dueDateRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        let isValid = false;

        // Vérifier la validité de chaque champ
        const isTitleValid = titleRef.current?.checkValidity();
        const isAssignedToValid = assignedToRef.current?.checkValidity();
        const isDueDateValid = dueDateRef.current?.checkValidity();
        const isDescriptionValid = descriptionRef.current?.checkValidity();
        console.log('checkval')
        isValid = !!(isTitleValid && isAssignedToValid && isDueDateValid && isDescriptionValid);
        setFormIsValid(isValid);

        console.log('setformisvalid', isValid)

        if (isValid) {
            const newTask = {
                id: tasks.length + 1,
                title: title,
                assigned_to: assignedTo,
                due_date: new Date(dueDate),
                state: state,
                description: description,
                category: 'Category1',
                created_by: username ?? 'Anonymous',
            };

            //setTasks((prevTasks) => [...prevTasks, newTask]);
            updateTasks(newTask);
            setAlert(
                <Alert severity="success" action={
                    <Button color="inherit" size="small">
                    UNDO
                    </Button>
                }> 
                    Task added successfully!
                </Alert>
            );
            setTimeout(() => {
                setAlert(null);
              }, alertTimeout);
            
            setTitle('');
            setAssignedTo('');
            setDueDate('');
            setDescription('');
        } else {
            setAlert(
                <Alert onClose={() => {}} severity="error">Error when trying to add the task!</Alert>
            );
            setTimeout(() => {
                setAlert(null);
              }, alertTimeout);
        }
    };

    useEffect(() => {
        console.log('setformisvalid', setFormIsValid);
      }, [setFormIsValid]);

    const colors = Colors();

    const divStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
        height: '100%', 
      };

    const formStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.darkGray : colors.lightCoffee,
        borderRadius: '30px',
        padding: '5px',
        margin: 'auto',
        color: isDarkMode ? colors.amethyst : colors.coffee,
        width: '60vw',
        height: '90vh',
        display: '',
    };

    const lineStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.amethyst : colors.coffee,
        height: '2px',
    };

    const textFieldStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.purple,
        paddingBottom: '15px',
        width: '60%',
        borderColor: isDarkMode ? colors.amethyst : colors.lightGray,
    };

    const propStyle: React.CSSProperties = {
        color: isDarkMode ? colors.bone : colors.black,
    };

    const labelStyle: React.CSSProperties = {
        color: isDarkMode ? colors.bone : colors.black,
      };

    const buttonStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.black,
        backgroundColor: isDarkMode ? colors.darkSlateGray : colors.coffee,
    };

    const alertStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
      };

    return (
        <div style={divStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2> Add a new task </h2>
                <div style={lineStyle} /><br />
                <span>
                    <div>
                    <TextField
                        label="Title"
                        variant="outlined"
                        value={title}
                        inputRef={titleRef}
                        onChange={(e) => setTitle(e.target.value)}
                        style={textFieldStyle}
                        inputProps={{style: propStyle}}
                        InputLabelProps={{ style: labelStyle }}
                        required
                    />
                    </div>
                    <div>
                    <TextField
                        label="Assigned to"
                        variant="outlined"
                        value={assignedTo}
                        inputRef={assignedToRef}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        style={textFieldStyle}
                        inputProps={{style: propStyle}}
                        InputLabelProps={{ style: labelStyle }}
                        required
                    />
                    </div>
                    <div>
                    <TextField
                        type="date"
                        variant="outlined"
                        value={dueDate}
                        inputRef={dueDateRef}
                        onChange={(e) => setDueDate(e.target.value)}
                        style={textFieldStyle}
                        inputProps={{style: propStyle}}
                        InputLabelProps={{ style: labelStyle }}
                        required
                    />
                    </div>
                    <div>
                    <TextField
                        select
                        label="State"
                        variant="outlined"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        style={textFieldStyle}
                        inputProps={{style: propStyle}}
                        InputLabelProps={{ style: labelStyle }}
                        required>
                        <MenuItem value="Incomplete">Incomplete</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Complete">Complete</MenuItem>
                    </TextField>
                    </div>
                    <div>
                    <TextField
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={description}
                        inputRef={descriptionRef}
                        style={textFieldStyle}
                        inputProps={{style: propStyle}}
                        InputLabelProps={{ style: labelStyle }}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    </div>
                </span>
                <br />
                <Button type="submit" variant="contained" style={buttonStyle}>
                    Add
                </Button>
            </form>
            {alert && <div style={alertStyle}>{alert}</div>}
        </div>
    );
};

export default Form;

