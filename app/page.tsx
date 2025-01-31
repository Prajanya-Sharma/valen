'use client'; // Mark this as a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [hintCount, setHintCount] = useState(0); // Track hint count
  const [yesClicked, setYesClicked] = useState(false); // Track if "Yes" button has been clicked before
  const [noClicks, setNoClicks] = useState(0); // Track number of failed No clicks
  const [noPosition, setNoPosition] = useState({ x: 50, y: 50 }); // Start below Yes button
  const router = useRouter();

  // Array of hints
  const hints = [
    "Hint 1: username sochhle",
    "Hint 2: The password is a special date.",
    "Hint 3: The password is a 4-digit number.",
    "Hint 4: The password represents a day and month.",
    "Hint 5: Bhai call krle ",
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send login data to the API route
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      router.push('/valentines'); // Redirect to /valentines page
    } else {
      setError(data.message || 'Try again 😢');
      setHintCount((prev) => prev + 1); // Increment hint count on failure

      // If hint count reaches 5, show an alert
      if (hintCount + 1 >= 5) {
        alert('Bhai call krle 😢');
      }
    }
  };

  // Function to move the "No" button randomly within the viewport
  const moveNoButton = () => {
    const maxX = window.innerWidth - 1000; // Ensure it stays within the viewport
    const maxY = window.innerHeight - 1000;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    setNoPosition({ x, y });
    setNoClicks((prev) => prev + 1);

    if (noClicks + 1 >= 7) {
      alert('Hahah tujhe kya lga krlegi No click 😆 Chalo click Yes now!');
    }
  };

  // Handle "Yes" button click
  const handleYesClick = () => {
    if (!yesClicked) {
      alert('Bhai no to click krke dekh');
      setYesClicked(true);
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="container">
      <h1>Will You Be My Valentine?</h1>
      {!showForm ? (
        <div className="button-container">
          <button
            className="yes-button"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="no-button"
            onMouseEnter={moveNoButton}
            style={{
              position: 'absolute',
              left: `${noPosition.x}px`,
              top: `${noPosition.y}px`,
            }}
          >
            No
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}

          {/* Display hints */}
          {hintCount > 0 && (
            <div className="hints">
              <p>Hints:</p>
              {hints.slice(0, hintCount).map((hint, index) => (
                <p key={index}>{hint}</p>
              ))}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
