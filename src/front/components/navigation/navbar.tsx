import { FunctionComponent, useState } from 'react';
import { useUser } from '../../contexts/userContext';
import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import { TextField } from '@mui/material';
import Colors from '../../colors/colors';
import { useDarkMode } from '../../contexts/darkModeContext';
import { useSidebar } from '../../contexts/sidebarContext';
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  onSearch?: (value: string) => void;
  showSearchInput: boolean;
}


const Navbar: FunctionComponent<NavbarProps> = ({ setSearchValue, onSearch, showSearchInput }) => {
  const { username, setUsername } = useUser();
  console.log(username);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [searchValue, setSearchValueLocal] = useState('');
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  if (username === undefined) {
    setUsername('Guest');
  }
  
  const handleSearch = () => {
    setSearchValue && setSearchValue(searchValue);
    onSearch && onSearch(searchValue);
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
    height: '12%',
    width: '100vw',
  };

  const userStyle: React.CSSProperties = {
    grid: 'true',
    //gridTemplate: 'repeat(2, 2fr)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '13px',
    marginLeft: '90vw',
    fontSize: '20px',
  };

  const userLogoStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? colors.black : colors.beige,
    borderRadius: '50%',
    padding: '7px',
    fontSize: '28px',
    color: isDarkMode ? colors.amethyst : colors.coffee,
  };

  const dropdownStyle: React.CSSProperties = {
    //fontSize: '20px',
    //borderRadius: '50%',
    //position: 'absolute',
    //marginTop: '50px',
    //marginLeft: '1110px',
    backgroundColor: 'beige',
    //cursor: 'pointer',
    //marginTop: '10px',
    color: 'blue',
  };

  const dropdownItemsStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? colors.darkGray : colors.coffee,
    color: isDarkMode ? colors.bone : colors.black,
    width: '200px',
    borderRadius: '0px',
    paddingTop: '10px',
    //fontSize: '10px',
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
    color: isDarkMode ? colors.bone : colors.beige,
  };

  const darkModeLogoStyle: React.CSSProperties = {
    position: 'absolute',
    fontSize: '30px',
    marginTop: '20px',
    cursor: 'pointer',
    marginLeft: '1000px',
    color: isDarkMode ? colors.bone : colors.beige,
  };

  const propStyle: React.CSSProperties = {
    color: isDarkMode ? colors.bone : colors.black,
  };

  const labelStyle: React.CSSProperties = {
    color: isDarkMode ? colors.bone : colors.black,
  };

  return (
      <div className="navbar" style={divStyle}>
        <FontAwesomeIcon style={navLogoStyle} onMouseEnter={() => { setIsSidebarOpen(true); }} icon={faBars} />
        {isSidebarOpen ? <Sidebar /> : <br />}
        <div style={userStyle}>
          <Dropdown label='' style={dropdownStyle} renderTrigger={() => <span><FontAwesomeIcon icon={faUser} style={userLogoStyle}/></span>}>
            <Dropdown.Header style={dropdownItemsStyle}>
              <span className="block text-sm">Hi, <b style={{color: isDarkMode ? colors.amethyst : colors.beige}}>{username?.toUpperCase()}</b></span>
            </Dropdown.Header>
            <Link to="/today">
              <Dropdown.Item style={dropdownItemsStyle}>
                <FontAwesomeIcon icon={faHome} />
              </Dropdown.Item>
            </Link>
            <Link to="/login">
              <Dropdown.Item style={dropdownItemsStyle}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} /> Log out
              </Dropdown.Item>
            </Link>
          </Dropdown>
        </div>
        {showSearchInput && (
          <TextField
            label="Search"
            variant="outlined"
            value={searchValue}
            style={inputStyle}
            size='small'
            onChange={(e) => setSearchValueLocal(e.target.value)}
            onKeyDown={handleKeyDown}
            InputProps={{style: propStyle}}
            InputLabelProps={{style: labelStyle}}
          />
        )}
        {isDarkMode ? <FontAwesomeIcon style={darkModeLogoStyle} icon={faSun} onClick={() => { setIsDarkMode(false); }} /> :
          <FontAwesomeIcon style={darkModeLogoStyle} icon={faMoon} onClick={() => { setIsDarkMode(true); }} />}
      </div>
  );
};

export default Navbar;
