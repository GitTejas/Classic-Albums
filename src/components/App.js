import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlbumContainer from './AlbumContainer';
import NavBar from './NavBar';
import FormDisplay from './FormDisplay';
import About from '../pages/About';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then(resp => resp.json())
      .then(setAlbums);
  }, []);

  return (
    <>
      <div id="album-header">
        <img
          src="https://i.imgur.com/M5maHKl.png"
          alt="albums header"
        />
      </div>
      <div className="nav-container">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<AlbumContainer albums={albums} />} />
        <Route path="/form" element={<FormDisplay albums={albums} setAlbums={setAlbums} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;