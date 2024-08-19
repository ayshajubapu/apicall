import React from 'react';

const MainContent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <img src="https://www.freeiconspng.com/uploads/great-job-icon-png-20.png" alt="Rocket Icon" style={styles.icon} />
        </div>
        <h1 style={styles.heading}>Ensure a Fast and Successful Journey to Your Next Career Move</h1>
        <button style={styles.button}>Try JobHunter for Free</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'rgb(184, 186, 180)',
    padding: '50px 20px',
    textAlign: 'center',
     
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 20px',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  }
}

export default MainContent;
