import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  async function createUser() {
    const response = await fetch('/dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'test@example.com',
        username: 'test'
      })
    })
    const body = await response.json()
    console.log(body)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={createUser}
        >
          Create User!
        </button>
      </header>
    </div>
  );
}

export default App;
