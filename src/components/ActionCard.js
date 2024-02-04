import React from 'react';

const ActionCard = ({ username1, username2, location, timestamp, image1, image2 }) => {
  return (
      <div style={styles.card}>
        <div style={styles.userInfo}>
          <div style={styles.userSection}>
            {image1 ? (
                <img src={image1} alt={username1} style={styles.avatarImage} />
            ) : (
                <div style={{ ...styles.avatar, ...styles.avatarPlaceholder }}>
                  <span style={styles.avatarText}>{username1 ? username1.substring(0, 1) : ''}</span>
                </div>
            )}
            <span style={styles.username}>{username1}</span>
          </div>

          <span style={styles.crossedText}>crossed with</span>

          <div style={styles.userSection}>
            {image2 ? (
                <img src={image2} alt={username2} style={styles.avatarImage} />
            ) : (
                <div style={{ ...styles.avatar, ...styles.avatarPlaceholder }}>
                  <span style={styles.avatarText}>{username2 ? username2.substring(0, 1) : ''}</span>
                </div>
            )}
            <span style={styles.username}>{username2}</span>
          </div>
        </div>

        <div style={styles.locationInfo}>
          <span style={styles.locationText}>{location}</span>
          <span style={styles.timestampText}>{timestamp}</span>
        </div>
      </div>
  );
};

// Convert StyleSheet to CSS-in-JS
const styles = {
  card: {
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 1px 2.22px rgba(0, 0, 0, 0.22)',
    textAlign: 'center',
    margin: '10px 20px',
    backgroundColor: '#ffffff', // White background for the cards
    color: '#333', // Darker text for better readability
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    backgroundColor: '#C4C4C4',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginLeft: '10px',
  },
  crossedText: {
    fontSize: '16px',
    marginTop: '10px',
    marginBottom: '10px',
  },
  locationText: {
    fontSize: '14px',
    color: '#646464',
    marginTop: '5px',
  },
  timestampText: {
    fontSize: '12px',
    color: '#A4A4A4',
    marginBottom: '5px',
  },
  avatarImage: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
  },
  locationInfo: {
    marginTop: '10px',
  },
};

export default ActionCard;
