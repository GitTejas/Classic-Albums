import React, { useState, useEffect } from 'react';
import AlbumForm from './AlbumForm';
import NavBar from './NavBar';
import { Outlet } from "react-router-dom"

function FormDisplay() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then(resp => resp.json())
      .then(setAlbums);
  }, []);

  function onAddAlbum(newAlbum) {
    fetch("http://localhost:3000/albums", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAlbum)
    })
    .then(resp => resp.json())
    .then(json => setAlbums([json, ...albums]))
    .catch(error => console.error("Error adding album:", error));
  }

  return (
    <>
      {/* <NavBar /> */}
      <div id="album-form-container">
        <div className="album-form-wrapper">
          <AlbumForm onAddAlbum={onAddAlbum} className="album-form" />
        </div>
      </div>
    </>
  );
}

export default FormDisplay;