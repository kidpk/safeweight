import React, { useState } from 'react';
import { Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import './index.css';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import API from '../../utils/API';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    const formData = {
      email: email,
      passwd: password
    };
    API.getUserByLogin(formData)
      .then(res => {
        console.log('API result data', res);
        history.push('/User/' + res.data.id);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    // <Router>
    <div className="Login">
      <h1>Login</h1>




      
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bssize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <p>Don't have an account? Sign up.</p>
        <Button
          href="/Signup"
          block
          bssize="large"
          disabled={!validateForm()}
          type="submit"
        >
          Signup
        </Button>
      </form>
    </div>
    // </Router>
  );
}
