import React from "react";
// import { Link, useOutletContext } from "react-router-dom";

function AlbumCard({album}) {
  
const {id, name, image, artist, sales, trackCount} = album

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
