import React, { useState, useEffect, useRef } from 'react';
import { data, locationData } from "./Content"; // Assuming locationData is also imported from Content.js
import ActionCard from "./components/ActionCard";

const App = () => {
  const [usernamePairs, setUsernamePairs] = useState([]);
  const fadeAnim = useRef(0); // Initial value for opacity: 0

  useEffect(() => {
    let mounted = true;

    const addCardWithDelay = () => {
      if (!mounted) return;

      let index1 = Math.floor(Math.random() * data.length);
      let index2;
      do {
        index2 = Math.floor(Math.random() * data.length);
      } while (index1 === index2);

      const locationIndex = Math.floor(Math.random() * locationData.length);
      const newPair = {
        username1: data[index1],
        username2: data[index2],
        location: locationData[locationIndex], // Random location
        timestamp: new Date().toLocaleString() // Current timestamp
      };

      setUsernamePairs(currentPairs => [newPair, ...currentPairs]); // Prepend new pair

      fadeAnim.current = 1; // Update opacity for web

      const nextDelay = Math.random() * 3000 + 1000; // Random delay between 1s and 4s
      setTimeout(addCardWithDelay, nextDelay);
    };

    addCardWithDelay();

    return () => { mounted = false; };
  }, []);

  return (
      <div style={styles.container}>
        {usernamePairs.map((pair, index) => (
            <div key={index} style={{ ...styles.fadeIn, opacity: fadeAnim.current }}>
              <ActionCard
                  username1={pair.username1.username}
                  username2={pair.username2.username}
                  location={pair.location}
                  timestamp={pair.timestamp}
                  image1={pair.username1.image}
                  image2={pair.username2.image}
              />
            </div>
        ))}
      </div>
  );
};

// Convert StyleSheet to regular CSS-in-JS
const styles = {
  container: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: '#f0f2f5', // Light grey background for the container
    minHeight: '100vh', // Ensure the container takes at least the full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center children horizontally
  },
  fadeIn: {
    transition: 'opacity 1s ease-in-out',
    marginBottom: '20px', // Adds space between cards
    width: '80%', // Set a max width for the cards
    maxWidth: '600px', // Maximum width for larger screens
    opacity: 0, // Initial opacity for animation
    borderRadius: '8px', // Slightly rounded corners for a softer look
    overflow: 'hidden', // Ensures the content fits within the border radius
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
};

export default App;
