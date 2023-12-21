import { FunctionComponent, useEffect, useState } from 'react';
import { useUser } from '../../contexts/userContext';
import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import { TextField } from '@mui/material';
import Colors from '../../colors/colors';
import { useDarkMode } from '../../contexts/darkModeContext';

interface NavbarProps {
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  onSearch?: () => void;
  showSearchInput: boolean;
}


const Navbar: FunctionComponent<NavbarProps> = ({ setSearchValue, onSearch, showSearchInput }) => {

  const { username } = useUser();
  console.log(username);
  const [isDisplay, setIsDisplay] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [searchValue, setSearchValueLocal] = useState('');

  useEffect(() => {
    console.log('Username:', username);
  }, [username]);
  
  const handleSearch = () => {
    setSearchValue && setSearchValue(searchValue);
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
    backgroundColor: isDarkMode ? colors.darkGray : colors.coffee,
    height: '10%',
    width: '100vw',
  };

  const userLogoPosition: React.CSSProperties = {
    position: 'absolute',
    marginTop: '15px',
    marginLeft: '1250px',
    color: isDarkMode ? colors.light : colors.coffee,
  };

  const userLogoStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? colors.black : colors.beige,
    borderRadius: '50%',
    padding: '7px',
  };

  const inputStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: isDarkMode ? colors.darkCharcoal : colors.darkBeige,
    color: colors.ivory,
    fontSize: '20px',
    borderRadius: '5px',
    width: '25vw',
    marginLeft: '450px',
    marginTop: '13px',
  };

  const navLogoStyle: React.CSSProperties = {
    fontSize: '30px',
    marginTop: '18px',
    marginLeft: '18px',
    color: isDarkMode ? colors.light : colors.beige,
  };

  const darkModeLogoStyle: React.CSSProperties = {
    position: 'absolute',
    fontSize: '30px',
    marginTop: '18px',
    cursor: 'pointer',
    marginLeft: '1110px',
    color: isDarkMode ? colors.light : colors.beige,
  };

  return (
      <div className="navbar" style={divStyle}>
        <FontAwesomeIcon style={navLogoStyle} onMouseEnter={() => { setIsDisplay(true); }} icon={faBars} />
        {isDisplay ? <Sidebar /> : <br />}
        <h2 style={userLogoPosition}><FontAwesomeIcon style={userLogoStyle} icon={faUser} /> {username}</h2>
        {showSearchInput && (
          <TextField
            label="Search"
            variant="outlined"
            value={searchValue}
            style={inputStyle}
            size='small'
            onChange={(e) => setSearchValueLocal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
        {isDarkMode ? <FontAwesomeIcon style={darkModeLogoStyle} icon={faSun} onClick={() => { setIsDarkMode(false); }} /> :
          <FontAwesomeIcon style={darkModeLogoStyle} icon={faMoon} onClick={() => { setIsDarkMode(true); }} />}
      </div>
  );
};

export default Navbar;
