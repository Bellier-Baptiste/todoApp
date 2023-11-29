import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { tasks as initialTasks, updateTasks } from '../../bdd/database';


const Form = () => {
    const [tasks, setTasks] = useState(initialTasks);

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
        // Mettre à jour l'état de la validité du formulaire
        isValid = !!(isTitleValid && isAssignedToValid && isDueDateValid && isDescriptionValid);
        setFormIsValid(isValid);

        console.log('setformisvalid', isValid)

        // Si tous les champs sont valides, ajoutez la tâche
        // if (isValid) {
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
            console.log('tache créer', newTask);

            setTasks((prevTasks) => [...prevTasks, newTask]);
            updateTasks(newTask);
            console.log('Tâches mises à jour :', tasks);
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
        height: '85vh',
    };

    const inputStyle: React.CSSProperties = {
        fontSize: '20px',
        margin: '20px',
        borderRadius: '20px',
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 5fr)', 
    };

    const lineStyle: React.CSSProperties = {
        backgroundColor: 'black',
        height: '2px',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '20px',
    };


    return (
        <div>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2> Add a new task </h2>
                <div style={lineStyle} /><br />
                <span style={gridStyle}>
                    <label style={labelStyle}>
                        Title:
                    </label>
                    <input style={inputStyle} type="text" ref={titleRef} value={title} onChange={(e) => setTitle(e.target.value)} required />

                    <label style={labelStyle}>
                        Assigned to:
                    </label>
                    <input style={inputStyle} type="text" name="assignedTo" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />

                    <label style={labelStyle}>
                        Due date:
                    </label>
                    <input style={inputStyle} type="date" name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />

                    <label style={labelStyle}>
                    State:
                    </label>
                    <select style={inputStyle} value={state} onChange={(e) => setState(e.target.value)}>
                        <option value="Incomplete">Incomplete</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                    </select>
                    <label style={labelStyle}>
                        Description:
                    </label>
                    <textarea style={{ height: '100px', width: '500px' }} name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </span> <br />
                <button type="submit">Add</button>
        </form>
        </div>
    );
};

export default Form;

