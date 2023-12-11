import { Link } from "react-router-dom";
import Navbar from "../components/navigation/navbar";
import { useState } from "react";
import { tasks } from "../bdd/database";
import ListItem from "../components/content/listItem";
import { faGrip, faList, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";

const ListPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [displayMode, setDisplayMode] = useState('');
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
        width: '100vw',
    };

    const addButtonStyle: React.CSSProperties = {
        backgroundColor: isHovered ? 'rgba(186, 183, 183, 0.7)' : 'rgba(186, 183, 183, 0.4)',
        color: 'black',
    };

    const spanStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        backgroundColor: 'rgba(75, 75, 75, 1)',
        width: '70%',
        margin: 'auto',
    };

    const iconsStyle = (mode: string): React.CSSProperties => ({
        fontSize: '20px',
        display: 'inline-block',
        cursor: 'pointer',
        marginTop: '20px',
        padding: '10px',
        borderRadius: '50%',
        backgroundColor: displayMode === mode ? 'rgba(60, 60, 60, 1)' : 'transparent',
    });

    return (
        <div style={divStyle}>
            <Navbar />
            <div style={{height: '100px'}}/>
            <span style={spanStyle}>
                <h2> Mode d'affichage :</h2>
                <FontAwesomeIcon onClick={() => {setDisplayMode('')}} style={iconsStyle('')} icon={faList} />
                <FontAwesomeIcon onClick={() => {setDisplayMode('')}} style={iconsStyle('check')} icon={faListCheck} />
                <FontAwesomeIcon onClick={() => {setDisplayMode('flex')}} style={iconsStyle('flex')} icon={faGrip} />
            </span>
            <div style={{height: '40px'}}/>
            <div style={{ width: '80vw', justifyContent: 'space-between', display: displayMode, margin: 'auto'}}>
                {tasks.map(task => (
                    <ListItem
                        key={task.id}
                        taskName={task.title}
                        assignedTo={task.assigned_to}
                        deadline={task.due_date.toDateString()}
                        creator={task.created_by??'Anonymous'}
                        state={task.state}
                        bColor="rgba(224, 224, 224, 0.72)"
                        //bColor={ticketColor}
                        id={task.id}
                    />
            ))}
            </div>
            <Link to="/newTask">
                <Button style={addButtonStyle} onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}>
                Add
                </Button>
            </Link>
        </div>
    );
};

export default ListPage;
