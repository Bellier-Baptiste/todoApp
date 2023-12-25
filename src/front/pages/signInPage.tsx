import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { users as initialUsers} from '../bdd/database';
import Colors from '../colors/colors';

const SignInPage: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState(initialUsers);

  const addUser = () => {
    if (!users.some(user => user.name === name)) {
      const newUser = {
        id: users.length + 1,
        name: name,
        password: password,
      };
      setUsers(prevUsers => [...prevUsers, newUser]);
    } else {
      alert('Username already exists. Please choose a different username.');
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
      <Link to='/list'>
        <Button variant="contained" onClick={addUser} style={buttonStyle}>
            Sign in
        </Button>
      </Link>
    </form>
    <p>Already have an account ? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default SignInPage;
