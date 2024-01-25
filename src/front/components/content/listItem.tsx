import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faListAlt, faPenToSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/darkModeContext';
import Colors from '../../colors/colors';


type ListItemProps = {
    taskName: string | undefined;
    assignedTo: string | undefined;
    deadline: string; // Vous pouvez utiliser le type Date si nécessaire
    creator: string | null;
    state: string;
    id: number;
    style?: React.CSSProperties;
};

const ListItem: React.FC<ListItemProps> = ({ taskName, assignedTo, deadline, creator, state, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { isDarkMode } = useDarkMode();

    const colors = Colors();

    const itemStyle: React.CSSProperties = {
        //backgroundColor: isHovered ? style?.backgroundColor?.substring(0,18)+', 1)' 
                        //: style?.backgroundColor?.substring(0,18)+', 0.7)',
        //color: isDarkMode ? colors.offWhite : colors.dark,
        backgroundColor: isDarkMode ? isHovered ? colors.darkSlateGray : colors.darkGray
                        : isHovered ? colors.lightCoffee : colors.coffee,
        borderRadius: '30px',
        padding: '5px',
        margin: '10px',
    };
    
    const buttonStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.darkCharcoal,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        borderRadius: '30px',
    };    

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 2fr)', 
        gap: '5px',
        color: isDarkMode ? colors.bone : colors.darkCharcoal,
    };

  return (
    <div className="ticket" style={itemStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Link to={`/task/${id}`}>
            <button style={buttonStyle} >
                <h3>{taskName}</h3>
                    <span style={gridStyle}>
                        <p><FontAwesomeIcon icon={faUser} style={{marginRight: '5px', color: isDarkMode ? colors.amethyst : colors.beige}}/><b>Assigned to </b></p>
                        <p><FontAwesomeIcon icon={faCalendar} style={{marginRight: '5px', color: isDarkMode ? colors.amethyst : colors.beige}}/><b>Due date</b></p>
                        <p><FontAwesomeIcon icon={faPenToSquare} style={{marginRight: '5px', color: isDarkMode ? colors.amethyst : colors.beige}}/><b>Created by</b></p>
                        <p><FontAwesomeIcon icon={faListAlt} style={{marginRight: '5px', color: isDarkMode ? colors.amethyst : colors.beige}}/><b>State</b></p>
                        <p>{assignedTo}</p><p>{deadline}</p><p>{creator}</p><p>{state}</p>
                    </span>
            </button>
        </Link>
    </div>
  );
};

export default ListItem;
