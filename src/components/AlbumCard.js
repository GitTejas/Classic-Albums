import React from "react";

function AlbumCard({album}) {
  
const {name, image, artist, sales, trackCount} = album

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <img
        src={image}
        alt={name}
        className="album-avatar"
      />
      <p>{trackCount} Tracks </p>
      <span>{sales} Sales</span>
    </div>
  );
}

export default AlbumCard;
