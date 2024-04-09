import React from 'react';
import AlbumForm from './AlbumForm';
import AlbumContainer from './AlbumContainer';

function FormDisplay({ albums, setAlbums }) {
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
    .then(json => setAlbums([json, ...albums])) // Update the albums state
  }

  return (
    <>
      <div id="album-form-container">
        <div className="album-form-wrapper">
          <AlbumForm onAddAlbum={onAddAlbum} className="album-form" />
        </div>
      </div>
      <AlbumContainer albums={albums} />
    </>
  );
}

export default FormDisplay;