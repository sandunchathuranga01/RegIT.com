import React from 'react';
import './PromoSection.css';

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="container">
        {/* Left section with text */}
        <div className="promo-text">
          <h1>Your Time Capsule</h1>
          <p>Throw it back with nostalgic tracks picked just for you.</p>
          <div className="spotify-logo">
            <img src="/path/to/spotify-logo.png" alt="Spotify Logo" />
            <span>Spotify</span>
          </div>
        </div>

        {/* Right section with mobile phone graphic */}
        <div className="promo-image">
          <img src="/path/to/phone-image.png" alt="Phone displaying app" />
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
