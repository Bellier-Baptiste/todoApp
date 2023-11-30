import {FunctionComponent, useState} from 'react';
import { useUser } from '../../userContext';
import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';




const Navbar: FunctionComponent = () => {
    const { username } = useUser();
    console.log(username);

    const [isDisplay, setIsDisplay] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);


    const divStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        backgroundColor: 'rgba(66, 66, 66, 1)',
        height: '10%',
        width: '100vw',
    };

    const userLogoPosition: React.CSSProperties = {
        marginTop: '15px',
        marginLeft: '200%',
    };

    const userLogoStyle: React.CSSProperties = {
        backgroundColor: 'rgba(50, 50, 50, 1)',
        borderRadius: '50%',
        padding: '7px',
    };
    
    const inputStyle: React.CSSProperties = {
        backgroundColor: 'white',
        color: 'black',
        fontSize: '20px',
        borderRadius: '20px',
        width: '400px',
        height: '30%',
        marginLeft: '-100%',
        marginTop: '18px',
    };

    const navLogoStyle: React.CSSProperties = {
        fontSize: '30px',
        marginTop: '18px',
        marginLeft: '18px',
    };

    const darkModeLogoStyle: React.CSSProperties = {
        fontSize: '30px',
        marginTop: '-55px',
        marginLeft: '310%',
        cursor: 'pointer',
    }
    
    return (
        <div className="navbar" style={divStyle}>
            <FontAwesomeIcon style={navLogoStyle} onMouseEnter={() => { setIsDisplay(true); } } icon={faBars} />
            {isDisplay ? <Sidebar /> : <br />}
            <h2 style={userLogoPosition}><FontAwesomeIcon style={userLogoStyle} icon={faUser} /></h2>
            <input style={inputStyle} type="text"></input>
            {isDarkMode ? <FontAwesomeIcon style={darkModeLogoStyle} icon={faSun} onClick={() => { setIsDarkMode(false)}} /> : 
                            <FontAwesomeIcon style={darkModeLogoStyle} icon={faMoon} onClick={() => { setIsDarkMode(true)}}/>}            
            
        </div>
    );
};

export default Navbar;
