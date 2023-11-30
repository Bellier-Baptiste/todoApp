import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type TicketProps = {
    taskName: string;
    assignedTo: string;
    deadline: string; // Vous pouvez utiliser le type Date si nécessaire
    id: number;
};

const Ticket: React.FC<TicketProps> = ({ taskName, assignedTo, deadline, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    const ticketStyle: React.CSSProperties = {
        backgroundColor: isHovered ? 'rgba(186, 183, 183, 0.7)' : 'rgba(186, 183, 183, 0.4)',
        borderRadius: '30px',
        padding: '5px',
        margin: '10px',
        color: 'black',
    };
    
    const buttonStyle: React.CSSProperties = {
        color: 'black',
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
                <p><FontAwesomeIcon icon={faUser} style={{marginRight: '5px'}}/>Assigned to : {assignedTo}</p>
                <p><FontAwesomeIcon icon={faCalendar} style={{marginRight: '5px'}}/>Due date : {deadline}</p>
            </button>
        </Link>
    </div>
  );
};

export default Ticket;
