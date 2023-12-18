import {FunctionComponent, useState} from 'react';
import { UserProvider, useUser } from '../../userContext';
import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import { TextField } from '@mui/material';
import Colors from '../../colors/colors';


const Navbar: FunctionComponent = () => {
    const { userName } = useUser();
    console.log(userName);

    const [isDisplay, setIsDisplay] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    /*
    const keyPress: (arg0: any) => KeyboardEventHandler<HTMLDivElement>(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here
        }
     }*/

    const colors = Colors(); 

    const divStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        backgroundColor: colors.navbarBackgroundColor,
        //backgroundColor: 'rgba(66, 66, 66, 1)',
        height: '10%',
        width: '100vw',
    };

    const userLogoPosition: React.CSSProperties = {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '1250px',
    };

    const userLogoStyle: React.CSSProperties = {
        //backgroundColor: userLogoBackgroundColor,
        backgroundColor: 'black',
        borderRadius: '50%',
        padding: '7px',
    };
    
    const inputStyle: React.CSSProperties = {
        position: 'absolute',
        //backgroundColor: inputBackgroundColor,
        backgroundColor: 'white',
        //color: inputColor,
        color: 'black',
        fontSize: '20px',
        borderRadius: '5px',
        width: '400px',
        marginLeft: '450px',
        marginTop: '13px',
    };

    const navLogoStyle: React.CSSProperties = {
        fontSize: '30px',
        marginTop: '18px',
        marginLeft: '18px',
    };

    const darkModeLogoStyle: React.CSSProperties = {
        position: 'absolute',
        fontSize: '30px',
        marginTop: '18px',
        cursor: 'pointer',
        marginLeft: '1110px',
    }
    
    return (
        <UserProvider>
            <div className="navbar" style={divStyle}>
                <FontAwesomeIcon style={navLogoStyle} onMouseEnter={() => { setIsDisplay(true); } } icon={faBars} />
                {isDisplay ? <Sidebar /> : <br />}
                <h2 style={userLogoPosition}><FontAwesomeIcon style={userLogoStyle} icon={faUser} /> {userName}</h2>
                <TextField label="Search" variant="outlined" value={searchValue} style={inputStyle} 
                            size='small' onChange={(e) => setSearchValue(e.target.value)}/>
                {isDarkMode ? <FontAwesomeIcon style={darkModeLogoStyle} icon={faSun} onClick={() => { setIsDarkMode(false)}} /> : 
                                <FontAwesomeIcon style={darkModeLogoStyle} icon={faMoon} onClick={() => { setIsDarkMode(true)}}/>}            
                
            </div>
        </UserProvider>
    );
};

export default Navbar;