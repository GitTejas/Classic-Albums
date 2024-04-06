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
      <p>{trackCount} tracks </p>
      <span>{sales} sales</span>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default AlbumCard;
