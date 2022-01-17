import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Configuration, UserApi } from "./api-client";

function App() {
  async function createUser() {
    const api = new UserApi(new Configuration({ basePath: '/dev/' }))
    const response = await api.createUser({
      createUser: {
        email: 'test2@example.com',
        username: 'test2',
      }
    })
    console.log(response.message)
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
