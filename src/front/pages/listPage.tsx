import { Link } from "react-router-dom";
import Navbar from "../components/navigation/navbar";
import { useState } from "react";
import { tasks } from "../bdd/database";
import ListItem from "../components/content/listItem";
import { faGrip, faList, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import Colors from "../colors/colors";
//import { useDarkMode } from "../contexts/darkModeContext";

const ListPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [displayMode, setDisplayMode] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [searchValue] = useState('');
    //const { isDarkMode } = useDarkMode();

    const handleFilter = () => {
        const lowerCaseSearch = searchValue.toLowerCase();
        const filtered = tasks.filter((task) => {
          return (
            task.title && task.title.toLowerCase().includes(lowerCaseSearch) ||
            task.assigned_to && task.assigned_to.toLowerCase().includes(lowerCaseSearch) ||
            task.due_date.toDateString().toLowerCase().includes(lowerCaseSearch) ||
            task.state.toLowerCase().includes(lowerCaseSearch)
          );
        });
        setFilteredTasks(filtered);
      };


    const colors = Colors();

    const divStyle: React.CSSProperties = {
        width: '100vw',
        //backgroundColor: 'white',
    };

    const addButtonStyle: React.CSSProperties = {
        backgroundColor: isHovered ? 'rgba(186, 183, 183, 0.7)' : 'rgba(186, 183, 183, 0.4)',
        color: colors.darkAddButtonColor,    
    };

    const spanStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        backgroundColor: colors.darkDisplayModeSpan,
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
            <Navbar showSearchInput={true} onSearch={handleFilter}/>
            <div style={{height: '100px'}}/>
            <span style={spanStyle}>
                <h2> Mode d'affichage :</h2>
                <FontAwesomeIcon onClick={() => {setDisplayMode('')}} style={iconsStyle('')} icon={faList} />
                <FontAwesomeIcon onClick={() => {setDisplayMode('')}} style={iconsStyle('check')} icon={faListCheck} />
                <FontAwesomeIcon onClick={() => {setDisplayMode('flex')}} style={iconsStyle('flex')} icon={faGrip} />
            </span>
            <div style={{height: '40px'}}/>
            <div style={{ width: '80vw', justifyContent: 'space-between', display: displayMode, margin: 'auto'}}>
                {filteredTasks.map(task => (
                    <ListItem
                        key={task.id}
                        taskName={task.title}
                        assignedTo={task.assigned_to}
                        deadline={task.due_date.toDateString()}
                        creator={task.created_by??'Anonymous'}
                        state={task.state}
                        bColor={colors.darkTicketColor}
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
