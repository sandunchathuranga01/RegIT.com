import React from 'react';
import './ConnectWhatsapp.css'; // External CSS for styling

const SwipeToConnect = () => {
  const handleConnect = () => {
    window.open('https://wa.me/', '_blank'); // Replace with actual WhatsApp link
  };

  return (
    <div className="connect-container">
      <h2>If you need <span className="highlight">help or support </span>  with our product</h2>
      <p>Connect via WhatsApp</p>
      <button className="connect-btn" onClick={handleConnect}>
        Connect Now
      </button>
    </div>
  );
};

export default SwipeToConnect;




