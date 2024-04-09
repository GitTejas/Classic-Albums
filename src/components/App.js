import React, { useState, useEffect } from 'react';
import AlbumContainer from './AlbumContainer';
import NavBar from './NavBar';
import {Outlet} from "react-router-dom"
import AlbumForm from './AlbumForm';
import FormDisplay from './FormDisplay';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then(resp => resp.json())
      .then(setAlbums);
  }, []);

  // function onAddAlbum(newAlbum) {
  //   fetch("http://localhost:3000/albums", {
  //     method: "POST",
  //     headers: {
  //       Accepts: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newAlbum)
  //   })
  //   .then(resp => resp.json())
  //   .then (json => setAlbums([json, ...albums]))
  // }

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
      <Outlet context = {albums}/>
      <AlbumContainer albums={albums} />
    </>
  );
}

export default App;