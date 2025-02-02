'use client'; // Mark this as a Client Component

import React, { useState } from 'react';

const AboutYouPage = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Array of random text for the cards
  const cards = [
    'Thank you meri jaan for being the mostamazing person I know. ❤️',
    'Your smile makes me the happiest person its so eye-pleasing,It has my heart. 🌟',
    'I love the way you care for me on even the smallest things cutuu. 💖',
    'Your eyes i could watch forever they are so gorgeous so pretty so perfectt!!. 🌈',
    'I love the way you giggle like an idiot(mwahh) on our silliest moments. 😊',
    'I am so so grateful to have you in my life. ',
    'these almost 2 and a half years have been the best everr i could have imagined. 💕',
    'So will you pleaseee be my valentinee. 🥰',
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