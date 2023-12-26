import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { users } from '../bdd/database';
import { useUser } from '../contexts/userContext';
import { Button, TextField } from '@mui/material';
import Colors from '../colors/colors';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUsername } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((user) => user.name === name && user.password === password);
  
    if (user) {
      setUsername(name);
      navigate('/today');
    } else {
      setError('Wrong username or password');
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
    borderRadius: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    fontSize: '30px',
    margin: '20px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: colors.amethyst,
    marginBottom: '20px', 
    width: '200px' 
  };

  const propStyle: React.CSSProperties = {
    color: colors.bone,
  };

  const labelStyle: React.CSSProperties = {
    color: colors.bone,
  };

  return (
    <div style={divStyle}>
      <h1>Login</h1>
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
        <Button variant="contained" onClick={handleLogin} style={buttonStyle}>
          Log in
        </Button>
      </form>
      <p>
        Don't have an account ? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default LoginPage;
