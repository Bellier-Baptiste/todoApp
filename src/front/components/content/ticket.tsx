import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/darkModeContext';
import Colors from '../../colors/colors';

type TicketProps = {
    taskName: string | undefined;
    assignedTo: string | undefined;
    deadline: string; // Vous pouvez utiliser le type Date si nécessaire
    id: number;
    style?: React.CSSProperties;
};

const Ticket: React.FC<TicketProps> = ({ taskName, assignedTo, deadline, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { isDarkMode } = useDarkMode();

    const colors = Colors();

    const ticketStyle: React.CSSProperties = {
        /*backgroundColor: isDarkMode ? isHovered ? colors.darkSlateGray.substring(0,18)+', 0.7)' 
                                                : colors.darkSlateGray.substring(0,18)+', 0.4)'
                        : isHovered ? colors.coffee.substring(0,18)+', 0.7)' 
                                                : colors.coffee.substring(0,18)+', 0.4)',*/
        backgroundColor: isDarkMode ? isHovered ? colors.black : colors.darkSlateGray
                        : isHovered ? colors.coffee : colors.lightCoffee,
        borderRadius: '30px',
        padding: '5px',
        margin: '10px',
    };
    
    const buttonStyle: React.CSSProperties = {
        color: isDarkMode ? colors.ivory : colors.darkCharcoal,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        borderRadius: '30px',
    };    

  return (
    <div className="ticket" style={ticketStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Link to={`/task/${id}`}>
            <button style={buttonStyle}>
                <h3>{taskName}</h3>
                <p><FontAwesomeIcon icon={faUser} style={{marginRight: '5px', color: isDarkMode ? colors.amethyst : colors.beige}}/>Assigned to : {assignedTo}</p>
                <p><FontAwesomeIcon icon={faCalendar} style={{marginRight: '5px', color: isDarkMode ? colors.amethyst : colors.beige}}/>Due date : {deadline}</p>
            </button>
        </Link>
    </div>
  );
};

export default Ticket;
