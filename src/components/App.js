import React, { useState, useEffect } from 'react';
import Header from './Header'
// import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then(resp => resp.json())
      .then(setAlbums);
  }, []);

  return (
    <>
      <Header />
      <h1>Classic Albums</h1>
      <br />
      <AlbumContainer  />
      <br />
      <AlbumForm />
    </>
  );
}

export default App;