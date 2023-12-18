import React, { FunctionComponent, useState } from 'react';
import { UserProvider, useUser } from '../../contexts/userContext';
import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import { TextField } from '@mui/material';
import Colors from '../../colors/colors';

interface NavbarProps {
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  onSearch?: () => void;
  showSearchInput: boolean;
}

// Declare outside the component
let searchValueLocal: string = '';
let setSearchValueLocal: React.Dispatch<React.SetStateAction<string>> | undefined;

const Navbar: FunctionComponent<NavbarProps> = ({ setSearchValue, onSearch, showSearchInput }) => {
  const { userName } = useUser();
  console.log(userName);

  const [isDisplay, setIsDisplay] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSearch = () => {
    setSearchValue && setSearchValue(searchValueLocal);
    onSearch && onSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const colors = Colors();

  const divStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    backgroundColor: isDarkMode ? colors.darkNavbarBackgroundColor : colors.lightNavbarBackgroundColor,
    height: '10%',
    width: '100vw',
  };

  const userLogoPosition: React.CSSProperties = {
    position: 'absolute',
    marginTop: '15px',
    marginLeft: '1250px',
  };

  const userLogoStyle: React.CSSProperties = {
    backgroundColor: colors.darkUserLogoBackgroundColor,
    borderRadius: '50%',
    padding: '7px',
  };

  const inputStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: isDarkMode ? colors.darkInputBackgroundColor : colors.lightInputBackgroundColor,
    color: colors.darkInputColor,
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
    color: isDarkMode ? colors.light : colors.dark,
  };

  const darkModeLogoStyle: React.CSSProperties = {
    position: 'absolute',
    fontSize: '30px',
    marginTop: '18px',
    cursor: 'pointer',
    marginLeft: '1110px',
    color: isDarkMode ? colors.darkModeLogo : colors.lightModeLogo,
  };

  return (
    <UserProvider>
      <div className="navbar" style={divStyle}>
        <FontAwesomeIcon style={navLogoStyle} onMouseEnter={() => { setIsDisplay(true); }} icon={faBars} />
        {isDisplay ? <Sidebar /> : <br />}
        <h2 style={userLogoPosition}><FontAwesomeIcon style={userLogoStyle} icon={faUser} /> {userName}</h2>
        {showSearchInput && (
          <TextField
            label="Search"
            variant="outlined"
            style={inputStyle}
            size='small'
            value={searchValueLocal}
            onChange={(e) => { searchValueLocal = e.target.value; setSearchValueLocal && setSearchValueLocal(e.target.value); console.log(searchValueLocal)}}
            onKeyDown={handleKeyDown}
          />
        )}
        {isDarkMode ? <FontAwesomeIcon style={darkModeLogoStyle} icon={faSun} onClick={() => { setIsDarkMode(false); }} /> :
          <FontAwesomeIcon style={darkModeLogoStyle} icon={faMoon} onClick={() => { setIsDarkMode(true); }} />}
      </div>
    </UserProvider>
  );
};

export default Navbar;
