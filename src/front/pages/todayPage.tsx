import { useState, useEffect } from 'react';
import { Task, tasks as initialTasks } from '../bdd/database';
import Ticket from '../components/content/ticket';
import Navbar from '../components/navigation/navbar';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

const TodayPage = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

    useEffect(() => {
        const today = new Date().toLocaleDateString();
        const todayTasks = tasks.filter(task => {
            const taskDueDate = new Date(task.due_date).toLocaleDateString();
            return taskDueDate === today;
        });

        setFilteredTasks(todayTasks);
    }, [tasks]);

    const handleTaskCompletionChange = (taskId: number) => {
        // Mettre à jour l'état des tâches en marquant la tâche spécifiée comme complétée
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.state } : task
            )
        );
    };

    return (
        <div style={{width: '100vw'}}>
            <Navbar />
            <br />
            <div style={{justifyContent: 'center', width: '100vw'}}>
                <h2>{filteredTasks.length} tasks for today</h2>
                {filteredTasks.map(task => (
                    <span style={{ margin: 'auto', width: '50vw'}}>
                        <RadioGroup
                            value={task.state ? 'completed' : 'incomplete'}
                            onChange={() => handleTaskCompletionChange(task.id)}
                        >
                            <FormControlLabel
                                value="incompleted"
                                control={<Radio />}
                                label={task.title}
                                onClick={() => handleTaskCompletionChange(task.id)}
                            />
                            <Ticket
                                key={task.id}
                                taskName={task.title}
                                assignedTo={task.assigned_to}
                                deadline={task.due_date.toDateString()}
                                id={task.id}
                            />

                        </RadioGroup>
                    </span>
                ))}
            </div>
        </div>
    );
    /*
    return (
        <div style={{width: '100vw'}}>
            <Navbar />
            <h2>Today's Tasks</h2>
                {filteredTasks.map(task => (
                    <RadioGroup>
                        <Ticket
                            key={task.id}
                            taskName={task.title}
                            assignedTo={task.assigned_to}
                            deadline={task.due_date.toDateString()}
                            id={task.id}
                        />
                    </RadioGroup>
                ))}
        </div>
    );
    */
};


export default TodayPage;

