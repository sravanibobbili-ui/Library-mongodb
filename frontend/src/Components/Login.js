import React from 'react';
import { useState } from 'react';

 
import { Button, Stack } from 'react-bootstrap';
//import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
  setPassword(e.target.value);
  setSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || password === '') {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
    }
};
const successMessage = () => {
  return (
      <div
          className="success"
          style={{
              display: submitted ? '' : 'none',
          }}>
          <h1>User {name} successfully registered!!</h1>
          
      </div>
  );
};
const errorMessage = () => {
  return (
      <div
          className="error"
          style={{
              display: error ? '' : 'none',
          }}>
          <h2>Please enter all the fields</h2>
      </div>
  );
};
  return (

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div>
              <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
                <form>
                  <div>
                  <h1>User Registration</h1>
                    <div className="form-group mt-3">
                      <label>Username</label>
                      <input
                        className="form-control mt-1"
                        placeholder="Enter username"
                        onChange={handleName} 
                        value={name} type="text" />
                    </div>
                    <div className="form-group mt-3">
                      <label>Password</label>
                      <input
                        onChange={handlePassword} 
                        value={password}
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                      />
                    </div>
                   
                    <div className="d-grid gap-2 mt-3">
                      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                        submit
                      </button>
                    </div>
                    <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;