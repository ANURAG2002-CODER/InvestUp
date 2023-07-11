import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [accountAddress, setAccountAddress] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    // Validate the account address and password here
    // If valid, redirect to the entrepreneur platform
    history.push('/platform');
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Account Address:
          <input type="text" value={accountAddress} onChange={(e) => setAccountAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
