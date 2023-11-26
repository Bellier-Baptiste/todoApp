import React, { useState } from 'react';

type TicketProps = {
  taskName: string;
  assignedTo: string;
  deadline: string; // Vous pouvez utiliser le type Date si nécessaire
};

const Ticket: React.FC<TicketProps> = ({ taskName, assignedTo, deadline }) => {
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
        <button style={buttonStyle} >
            <h3>{taskName}</h3>
            <p>Assigned to : {assignedTo}</p>
            <p>Due date : {deadline}</p>
        </button>
    </div>
  );
};

export default Ticket;
