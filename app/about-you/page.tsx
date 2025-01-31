'use client'; // Mark this as a Client Component

import React, { useState } from 'react';

const AboutYouPage = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Array of random text for the cards
  const cards = [
    'You are the most amazing person I know. ❤️',
    'Your smile brightens up my day. 🌟',
    'I love how kind and caring you are. 💖',
    'You make me a better person every day. 🌈',
    'Your laughter is my favorite sound. 😊',
    'I am so grateful to have you in my life. 🙏',
    'You are my everything. 💕',
    'I love you more than words can express. 🥰',
  ];

  // Handle next card
  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  // Handle previous card
  const handlePrevious = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="about-you-container">
      <h1>About You ❤️</h1>
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrevious}>
          &lt;
        </button>
        <div className="cards-wrapper">
          {cards.map((text, index) => (
            <div
              key={index}
              className={`card ${index === currentCard ? 'active' : ''}`}
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AboutYouPage;