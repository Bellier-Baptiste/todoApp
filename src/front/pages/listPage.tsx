import { Link } from "react-router-dom";
import Navbar from "../components/navigation/navbar";
import Sidebar from "../components/navigation/sidebar";
import { useState } from "react";
import { tasks } from "../bdd/database";
import ListItem from "../components/content/listItem";

const ListPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    /*
    const [tasks] = useState(initialTasks);
    const [tasksTodo, setTasksTodo] = useState(initialTasks.filter(task => task.state === 'Incomplete'));
    const [tasksInProgress, setTasksInProgress] = useState(initialTasks.filter(task => task.state === 'In Progress'));
    const [tasksCompleted, setTasksCompleted] = useState(initialTasks.filter(task => task.state === 'Complete'));

    useEffect(() => {
        setTasksTodo(tasks.filter(task => task.state === 'Incomplete'));
        setTasksInProgress(tasks.filter(task => task.state === 'In Progress'));
        setTasksCompleted(tasks.filter(task => task.state === 'Complete'));
    }, [tasks]);
    */
    const divStyle: React.CSSProperties = {
        width: '70vw',
    }

    const addButtonStyle: React.CSSProperties = {
        backgroundColor: isHovered ? 'rgba(186, 183, 183, 0.7)' : 'rgba(186, 183, 183, 0.4)',
        color: 'black',
    };

    return (
        <div style={divStyle}>
            <Navbar title='Navbar'/>
            <Sidebar title='Sidebar'/>
            <h1>List Page</h1>
            <div style={{ width: '100%', justifyContent: 'space-between' }}>
                {tasks.map(task => (
                    <ListItem
                        key={task.id}
                        taskName={task.title}
                        assignedTo={task.assigned_to}
                        deadline={task.due_date.toDateString()}
                        creator={task.created_by}
                        state={task.state}
                    />
            ))}
            </div>
            <Link to="/newTask">
                <button style={addButtonStyle} onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}>
                Add
                </button>
            </Link>
        </div>
    );
};

export default ListPage;
