import { FunctionComponent, useState } from "react";
import Tab from "./tab";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import Colors from "../../colors/colors";
import { useDarkMode } from "../../contexts/darkModeContext";



const Sidebar: FunctionComponent = () => {
    const [isDisplay, setIsDisplay] = useState(true);
    const { isDarkMode } = useDarkMode();

    const colors = Colors();

    const divStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.beige,
        backgroundColor: isDarkMode ? colors.darkSlateGray : colors.lightCoffee,
    };

    const buttonStyle: React.CSSProperties = {
        height: '8%',
        width: '40%',
        fontSize: '15px',
        color: isDarkMode ? colors.amethyst : colors.coffee,
        backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
    };

    const tabStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.coffee,
        backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
    };

    return ( 
        <>
        {isDisplay ? 
        <div className="sidebar" style={divStyle}> 
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
                    <Tab label="List" style={tabStyle}/>
                </Link>
                <Link to="/board" className="link-style">
                    <Tab label="Board" style={tabStyle}/>
                </Link>
                <Link to="/calendar" className="link-style">
                    <Tab label="Calendar" style={tabStyle}/>
                </Link>
            </span>
        </div> 
        : <></> }
        </>
    );
};

export default Sidebar;
