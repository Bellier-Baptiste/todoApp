import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { tasks as initialTasks, updateTasks } from '../database/database';
import { Button, MenuItem, TextField } from '@mui/material';
import { useUser } from '../../userContext';


const Form = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const { userName } = useUser();


    const [description, setDescription] = useState('');
    const [state, setState] = useState('Incomplete');
    const [dueDate, setDueDate] = useState('');
    const [title, setTitle] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [, setFormIsValid] = useState<boolean>(true);

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
                description: description,
                state: state,
                due_date: new Date(dueDate),
                created_by: userName ?? 'Anonymous',
                title: title,
                assigned_to: assignedTo,
                category: 'Category1',
            };
            console.log('tache créer', newTask);
            console.log('creator', newTask.created_by);

            setTasks((prevTasks: any) => [...prevTasks, newTask]);
            updateTasks(newTask);
            console.log('Tâches mises à jour :', tasks);
            console.log('creator : ', newTask.created_by);

            setTitle('');
            setAssignedTo('');
            setDueDate('');
            setDescription('');
        }
    };

    useEffect(() => {
        console.log('setformisvalid', setFormIsValid);
      }, [setFormIsValid]);


    const formStyle: React.CSSProperties = {
        backgroundColor: 'palegoldenrod',
        borderRadius: '30px',
        padding: '5px',
        margin: '10px',
        color: 'black',
        width: '60vw',
        height: '90vh',
        display: '',
    };

    /*
    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 5fr)', 
    };*/

    const lineStyle: React.CSSProperties = {
        backgroundColor: 'black',
        height: '2px',
    };

    const textFieldStyle: React.CSSProperties = {
        paddingBottom: '15px',
        width: '60%',
    };

    return (
        <div>
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
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    </div>
                    </span>
                    <br />
                    <Button type="submit" variant="contained" style={{ backgroundColor: 'rgba(224, 198, 40, 1)', color: 'black' }}>
                        Add
                    </Button>
        </form>
        </div>
    );
};

export default Form;

