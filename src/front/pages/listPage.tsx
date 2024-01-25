import { Link } from "react-router-dom";
import Navbar from "../components/navigation/navbar";
import { SetStateAction, useEffect, useState } from "react";
//import { tasks } from "../bdd/database";
import ListItem from "../components/content/listItem";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import Colors from "../colors/colors";
import { useDarkMode } from "../contexts/darkModeContext";
import { useDatabase } from "../contexts/databaseContext";

const ListPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [displayMode, setDisplayMode] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const { isDarkMode } = useDarkMode();
    const { tasks } = useDatabase();
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    
    useEffect(() => {
        handleFilter();
    }, [searchValue]);
      
    const handleFilter = () => {
        if (searchValue === '') {
            setFilteredTasks(tasks);
            return;
        }
        const lowerCaseSearch = searchValue.toLowerCase();
        const filtered = tasks.filter((task) => {
            return (
                (task.title && task.title.toLowerCase().includes(lowerCaseSearch)) ||
                (task.assigned_to && task.assigned_to.toLowerCase().includes(lowerCaseSearch)) || 
                (task.created_by && task.created_by.toLowerCase().includes(lowerCaseSearch)) ||
                (task.state && task.state.toLowerCase().includes(lowerCaseSearch))
            );
        });
        setFilteredTasks(filtered);
    };
    
      


    const colors = Colors();

    const divStyle: React.CSSProperties = {
        width: '100vw',
        backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
    };

    const addButtonStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? isHovered ? colors.darkGray : colors.darkSlateGray 
                        : isHovered ? colors.lightCoffee : colors.coffee ,
        color: isDarkMode ? colors.amethyst : colors.black, 
        marginBottom: '10px',  
    };

    const spanStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        backgroundColor: isDarkMode ? colors.darkSlateGray : colors.lightCoffee,
        color: isDarkMode ? colors.amethyst : colors.black,
        width: '70%',
        margin: 'auto',
        borderRadius: '20px',
    };

    const iconsStyle = (mode: string): React.CSSProperties => ({
        fontSize: '20px',
        display: 'inline-block',
        cursor: 'pointer',
        marginTop: '20px',
        padding: '10px',
        borderRadius: '50%',
        backgroundColor: displayMode === mode ? isDarkMode ? colors.black : colors.coffee : 'transparent',
    });

    const listStyle: React.CSSProperties = {
        width: '80vw', 
        marginTop: '5%',
        
        display: displayMode, 
        margin: 'auto',
        grid: 'true',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    };

    const listItemStyle: React.CSSProperties = {
        color: isDarkMode ? colors.bluePurple : colors.ivory,
        backgroundColor: isDarkMode ? colors.darkGray : colors.coffee,
    };

    const resultStyle: React.CSSProperties = {
        color: isDarkMode ? colors.bone : colors.black,
    };

    return (
        <div style={divStyle}>
            <Navbar 
                showSearchInput={true} 
                onSearch={(value: SetStateAction<string>) => setSearchValue(value)}
            />
            <div style={{height: '100px'}}/>
            <span style={spanStyle}>
                <h2> Display mode :</h2>
                <FontAwesomeIcon onClick={() => {setDisplayMode('')}} style={iconsStyle('')} icon={faList} />
                <FontAwesomeIcon onClick={() => {setDisplayMode('grid')}} style={iconsStyle('grid')} icon={faGrip} />
            </span>
            {filteredTasks.length == 0 ?
                    <div>
                        <h3 style={resultStyle}> No task found ! Please try another filter.</h3>
                    </div>
                    : filteredTasks.length == 1 ?
                    <div>
                        <h3 style={resultStyle}>
                            {filteredTasks.length} task found
                        </h3>
                    </div>
                    : 
                    <div>
                        <h3 style={resultStyle}>
                            {filteredTasks.length} tasks found
                        </h3>
                    </div>
                }
            <div style={listStyle}>
                {filteredTasks.map(task => (
                    <ListItem
                        key={task.id}
                        taskName={task.title}
                        assignedTo={task.assigned_to}
                        deadline={task.due_date?.toLocaleDateString() ?? new Date().toLocaleDateString()}
                        creator={task.created_by ?? 'Anonymous'}
                        state={task.state ?? 'Incomplete'}
                        id={task.id}
                        style={listItemStyle}
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
