import { useState, useEffect } from 'react';
import { Task, tasks as initialTasks } from '../bdd/database';
import Ticket from '../components/content/ticket';
import Navbar from '../components/navigation/navbar';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useDarkMode } from '../contexts/darkModeContext';
import Colors from '../colors/colors';

const TodayPage = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const { isDarkMode } = useDarkMode();


    useEffect(() => {
        const today = new Date().toLocaleDateString();
    
        const notCompletedTasks = tasks.filter(task => task.state !== 'Complete');
    
        const todayTasks = notCompletedTasks.filter(task => {
            const taskDueDate = new Date(task.due_date).toLocaleDateString();
            return taskDueDate === today;
        });
    
        setFilteredTasks(todayTasks);
    }, [tasks]);

    const handleTaskCompletionChange = (taskId: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.state } : task
            )
        );
    };


    const colors = Colors();

    const windowStyle: React.CSSProperties = {
        margin: 'auto',
        width: '100vw',
        backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
    };

    const titleStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.coffee, 
    };

    const spanStyle: React.CSSProperties = {
        margin: 'auto',
        width: '50vw',
    };

    const divStyle: React.CSSProperties = {
        //gridTemplateColumns: 'repeat(3, 1fr)',
    };

    const checkStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.coffee, 
    };

    return (
        <div style={windowStyle}>
            <Navbar showSearchInput={false}/>
            <br />
            <div style={{justifyContent: 'center', width: '100vw'}}>
                <h2 style={titleStyle}> Today's tasks ({filteredTasks.length})</h2>
                {filteredTasks.map(task => (
                    <span style={spanStyle}>
                        <RadioGroup
                            value={task.state ? 'completed' : 'incomplete'}
                            onChange={() => handleTaskCompletionChange(task.id)}
                            style={checkStyle}
                        >
                            <div style={divStyle}>
                            <FormControlLabel
                                value="incompleted"
                                control={<Radio />}
                                label={task.title}
                                labelPlacement="start"
                                onClick={() => handleTaskCompletionChange(task.id)}
                            />
                            <Ticket
                                key={task.id}
                                taskName={task.title}
                                assignedTo={task.assigned_to}
                                deadline={task.due_date.toDateString()}
                                id={task.id}
                            />
                            </div>
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

