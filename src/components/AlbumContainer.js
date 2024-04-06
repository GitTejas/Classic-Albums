import React from "react";
import AlbumCard from "./AlbumCard";

function AlbumContainer({albums}) {
  return (
    <div id="album-collection">{albums.map(album => 
    <AlbumCard 
    key={album.id} 
    album={album}/>)}
    </div>
  );
}

export default AlbumContainer;
