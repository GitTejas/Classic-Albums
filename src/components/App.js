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

  return (
    <>
    <div id="album-header">
      <img
        src="https://i.imgur.com/M5maHKl.png"
        alt="albums header"
      />
    </div>
      {/* <h1>Classic Albums</h1>
      <br /> */}
      <div class="nav-container">
      <NavBar />
  {/* <a href="#" class="nav-link">Link 1</a>
  <a href="#" class="nav-link">Link 2</a> */}
</div>
      <Outlet context = {albums}/>
      <AlbumContainer albums={albums} />
      {/* <AlbumForm />  */}
    </>
  );
}

export default App;