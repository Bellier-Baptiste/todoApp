import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../bdd/database';
import { useUser } from '../userContext';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez implémenter la logique de connexion, par exemple, vérifier les informations dans une base de données
    // Si la connexion réussit, vous pouvez rediriger l'utilisateur vers la page principale
    // Sinon, vous pouvez afficher un message d'erreur
    if (users.find(user => user.name === name && user.password === password)) {
        window.location.href = '/board'; // par la suite ce sera /today
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { setUser } = useUser();
        setUser(name);
    } else {
      setError('Wrong username or password');
    }
  };

    const divStyle: React.CSSProperties = {
        backgroundColor: 'rgba(38, 39, 38, 1)',
        width: '90vw',
        height: 'auto',
        margin: 'auto',
    };

    const formStyle: React.CSSProperties = {
        color: 'black',
        backgroundColor: 'white',
        margin: 'auto',
        alignContent: 'center',
        width: '60%',
        height: 'auto',
        borderRadius: '20px',
    };

    const inputStyle: React.CSSProperties = {
        fontSize: '30px',
        margin: '20px',
    }
    

  return (
    <div style={divStyle}>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form style={formStyle}>
        <label>
          Name:
          <input style={inputStyle} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button style={{marginBottom: '20px'}}type="button" onClick={handleLogin}>
          Log in
        </button>
      </form>
      <p>Don't have account ? <Link to="/inscription">Sign in</Link></p>
    </div>
  );
};

export default LoginPage;
