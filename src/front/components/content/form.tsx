import React, { FormEvent, useRef, useState } from 'react';
import { tasks as initialTasks } from '../../bdd/database';
import { Link } from 'react-router-dom';

const Form = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const [description, setDescription] = useState('');
    const [state, setState] = useState('Incomplete');
    const [dueDate, setDueDate] = useState('');
    const [title, setTitle] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [formIsValid, setFormIsValid] = useState<boolean>(true);

    const titleRef = useRef<HTMLInputElement>(null);
    const assignedToRef = useRef<HTMLInputElement>(null);
    const dueDateRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Vérifier la validité de chaque champ
        const isTitleValid = titleRef.current?.checkValidity();
        const isAssignedToValid = assignedToRef.current?.checkValidity();
        const isDueDateValid = dueDateRef.current?.checkValidity();
        const isDescriptionValid = descriptionRef.current?.checkValidity();

        // Mettre à jour l'état de la validité du formulaire
        setFormIsValid(!!(isTitleValid && isAssignedToValid && isDueDateValid && isDescriptionValid));
        
        // Si tous les champs sont valides, ajoutez la tâche
        if (isTitleValid && isAssignedToValid && isDueDateValid && isDescriptionValid) {
            const newTask = {
                id: tasks.length + 1,
                description: description,
                state: state,
                due_date: new Date(dueDate),
                created_by: 'Administrator',
                title: title,
                assigned_to: assignedTo,
                category: 'Category1',
            };

            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    };

    const formStyle: React.CSSProperties = {
        backgroundColor: 'palegoldenrod',
        borderRadius: '30px',
        padding: '5px',
        margin: '10px',
        color: 'black',
    };



    return (
        <form onSubmit={handleSubmit} style={formStyle}>
        <label>
            Title:
            <input type="text" ref={titleRef} value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />

        <label>
            Assigned to:
            <input type="text" name="assignedTo" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />
        </label>
        <br />

        <label>
            Due date:
            <input type="date" name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </label>
        <br />

        <label>
            State:
            <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="Incomplete">Incomplete</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
            </select>
        </label>
        <br />

        <label>
            Description:
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <Link to={formIsValid ? "/board" : "#"}>
            <button type="submit">Add</button>
        </Link>
        </form>
    );
};

export default Form;

