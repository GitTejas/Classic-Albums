import React, { useState, useEffect } from 'react';
import AlbumContainer from './AlbumContainer';
import AlbumForm from './AlbumForm';
import NavBar from './NavBar';
import {Outlet} from "react-router-dom"

function FormDisplay() {

// function onAddAlbum(newAlbum) {
//   fetch(`http://localhost:3000/albums`, {
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
      <div id="album-form-container">
        <div className="album-form-wrapper">
          <AlbumForm
          className="album-form" 
          />
        </div>
      </div>
    </>
  );
}

export default FormDisplay;