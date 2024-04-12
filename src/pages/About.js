import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <header className="about-header">
          <h1>About</h1>
        </header>
        <div className="about-text">
          <h3 className="about-subheader">Introduction</h3>
          <p>
            Welcome to the Classic Albums React App, where you can share your
            favorite albums with fellow music enthusiasts! Whether it's a
            universally acclaimed classic or your personal bias, all
            submissions are welcome here. Our frontend web application allows
            you to easily submit new albums and explore a curated list of
            'classic' albums. Each entry includes
            details such as the artist, album name, sales and track count. Don't
            hesitate to add your favorite album to the mix! Even if it hasn't
            earned widespread recognition as a "classic," your submission is
            valuable. Let's spark engaging discussions about overlooked gems
            and timeless favorites alike. Join us and contribute to the
            ever-growing collection of beloved albums. Submit away and ignite
            conversations among fellow music aficionados!.
          </p>
          <p>
            With the Classic Album App you can perform album submissions. Have
            we overlooked any albums? Perhaps you believe there are other albums
            even more deserving of the "classic" title than those currently
            featured here! We're eager to discover your musical preferences.
            Remember, music is subjective, so we welcome all musical biases.
            Share an album that YOU deem as classic, and let's celebrate our
            diverse tastes in music together! Submit now and let the music
            discussions begin!
          </p>
          <h3 className="about-subheader">Music Appreciation</h3>
          <p>
            Contribute to the Classic Albums App by submitting bugs, feature
            requests, or pull requests. Let's engage the music community in
            discussions about great music. Your input is invaluable in making
            this platform better for everyone. Join us in shaping the future
            of music appreciation!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;