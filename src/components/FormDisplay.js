import React, { useState } from 'react';
import AlbumForm from './AlbumForm';
import AlbumContainer from './AlbumContainer';

function FormDisplay({ albums, setAlbums }) {
  const [postMade, setPostMade] = useState(false);

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
    .then(json => {
      setAlbums([...albums, json]); // Update the albums state
      setPostMade(true); // Set the postMade state to true after successful post
    })
  }

  return (
    <>
      <div id="album-form-container">
        <div className="album-form-wrapper">
          <AlbumForm onAddAlbum={onAddAlbum} className="album-form" />
        </div>
      </div>
      {postMade && <AlbumContainer albums={albums} />}
    </>
  );
}

export default FormDisplay;