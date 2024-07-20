// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from '../custom/custom';
import Investment from '../custom/invest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        < ParentComponent name="Elisha" age={27} email="elishadamu@gmail.com"/>
        < Investment />
      </header>

    </div>
  );
}

export default App;
