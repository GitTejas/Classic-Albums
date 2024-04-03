import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
const [albums, setAlbums] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/albums")
  .then(resp => resp.json())
  .then(setAlbums)
}, [])

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
      </header>
    </div>
  );
}

export default App;
