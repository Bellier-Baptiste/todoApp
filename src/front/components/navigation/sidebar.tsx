import { FunctionComponent, useState } from "react";
import Tab from "./tab";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";



const Sidebar: FunctionComponent = () => {
    const [isDisplay, setIsDisplay] = useState(true);

    const buttonStyle: React.CSSProperties = {
        height: '8%',
        width: '40%',
        fontSize: '15px',
    }
    return ( 
        <>
        {isDisplay ? 
        <div className="sidebar"> 
            <div style={{marginLeft: '80%', fontSize: '20px'}}>
                <FontAwesomeIcon onClick={() => {setIsDisplay(false)}} style={{cursor: 'pointer'}} icon={faCircleLeft} />
            </div>
            <div>            
                <Link to='/today'>
                    <button style={buttonStyle}> Today </button>
                </Link> 
            </div>          
            <span className="sidebar-body">
                <Link to="/list" className="link-style">
                    <Tab label="List" />
                </Link>
                <Link to="/board" className="link-style">
                    <Tab label="Board" />
                </Link>
                <Link to="/calendar" className="link-style">
                    <Tab label="Calendar" />
                </Link>
            </span>
        </div> 
        : <></> }
       
        </>
    );
};

export default Sidebar;
