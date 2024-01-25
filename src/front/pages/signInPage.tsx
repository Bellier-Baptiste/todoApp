import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { addUser, users as initialUsers} from '../bdd/database';
import Colors from '../colors/colors';
import { useUser } from '../contexts/userContext';

const SignInPage: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState(initialUsers);
  const { setUsername } = useUser();
  const navigate = useNavigate();

  const addNewUser = () => {
    if (!users.some(user => user.name === name)) {
      const newUser = {
        id: users.length + 1,
        name: name,
        password: password,
      };
      setUsers(prevUsers => [...prevUsers, newUser]);
      addUser(newUser);
      setUsername(newUser.name);
      navigate('/today');
    } else {
      setError('Username already exists. Please choose a different username.');
    }
  };

    const colors = Colors();
    
    const divStyle: React.CSSProperties = {
        backgroundColor: 'rgba(38, 39, 38, 1)',
        color: colors.amethyst,
        width: '90vw',
        height: 'auto',
        margin: 'auto',
    };

    const formStyle: React.CSSProperties = {
        color: 'black',
        backgroundColor: colors.slightlyDarkerGray,
        margin: 'auto',
        alignContent: 'center',
        width: '60%',
        height: 'auto',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyle: React.CSSProperties = {
        fontSize: '30px',
        margin: '20px',
    };

    const propStyle: React.CSSProperties = {
      color: colors.bone,
    };

    const labelStyle: React.CSSProperties = {
      color: colors.bone,
    };
    
    const buttonStyle: React.CSSProperties = {
      marginBottom: '20px', 
      width: '200px',
      backgroundColor: colors.amethyst,
    };

  return (
    <div style={divStyle}>
      <h1>Sign In</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form style={formStyle}>
      <TextField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        style={inputStyle}
        InputProps={{style: propStyle}} 
        InputLabelProps={{style: labelStyle}}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        style={inputStyle}
        InputProps={{style: propStyle}} 
        InputLabelProps={{style: labelStyle}}
      />
      <Button variant="contained" onClick={addNewUser} style={buttonStyle}>
          Sign in
      </Button>
    </form>
    <p>Already have an account ? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default SignInPage;

