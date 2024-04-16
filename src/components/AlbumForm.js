import React, { useState } from "react";

function AlbumForm({ onAddAlbum }) {
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [image, setImage] = useState("");
  const [sales, setSales] = useState("");
  const [trackCount, setTrackCount] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();

    const newAlbum = {
      name: albumName,
      artist: artistName,
      image: image,
      sales: sales,
      trackCount: trackCount
    };

    onAddAlbum(newAlbum);

    // Reset form fields after submission
    setAlbumName("");
    setArtistName("");
    setImage("");
    setSales("");
    setTrackCount("");
  }

  return (
    <div className="container">
      <form className="add-album-form" onSubmit={handleSubmit}>
      <h3 className="cool-text">Submit an album!</h3>
        <input
          type="text"
          name="name"
          value={albumName}
          placeholder="Enter an album's name..."
          className="input-text"
          onChange={e => setAlbumName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="name"
          value={artistName}
          placeholder="Enter the artist's name..."
          className="input-text"
          onChange={e => setArtistName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          value={image}
          placeholder="Enter an artwork URL..."
          className="input-text"
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="sales"
          value={sales}
          placeholder="Enter the album sales..."
          className="input-text"
          onChange={e => setSales(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="trackCount"
          value={trackCount}
          placeholder="Enter number of tracks..."
          className="input-text"
          onChange={e => setTrackCount(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit Album"
          className="submit"
        />
      </form>
    </div>
  );
}
export default AlbumForm;
