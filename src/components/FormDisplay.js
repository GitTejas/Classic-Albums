import React, { useState, useEffect } from 'react';
import AlbumContainer from './AlbumContainer';
import AlbumForm from './AlbumForm';
import NavBar from './NavBar';
import {Outlet} from "react-router-dom"

function FormDisplay() {
  return (
    <>
      <div id="album-header">
        <img
          src="https://i.imgur.com/M5maHKl.png"
          alt="albums header"
        />
      </div>
      <div class="nav-container">
        <NavBar />
      </div>
      <div id="album-form-container">
        <div className="album-form-wrapper">
          <AlbumForm className="album-form" />
        </div>
      </div>
    </>
  );
}

export default FormDisplay;