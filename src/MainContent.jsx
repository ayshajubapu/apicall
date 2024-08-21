import React, { useState, useEffect } from 'react';

const MainContent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(windowWidth);

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

const getStyles = (windowWidth) => {
  const isMobile = windowWidth <= 576;
  const isTablet = windowWidth <= 768 && windowWidth > 576;

  return {
    container: {
      backgroundColor: 'rgb(184, 186, 180)',
      padding: isMobile ? '30px 10px' : '50px 20px',
      textAlign: 'center',
    },
    content: {
      maxWidth: isMobile ? '100%' : '800px',
      margin: '0 auto',
    },
    iconContainer: {
      backgroundColor: '#fff',
      borderRadius: '50%',
      width: isMobile ? '60px' : '80px',
      height: isMobile ? '60px' : '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto 20px',
    },
    icon: {
      width: isMobile ? '30px' : '40px',
      height: isMobile ? '30px' : '40px',
    },
    heading: {
      fontSize: isMobile ? '18px' : '24px',
      fontWeight: 'bold',
      margin: '0 0 20px',
    },
    button: {
      backgroundColor: '#000',
      color: '#fff',
      padding: isMobile ? '8px 16px' : '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: isMobile ? '14px' : '16px',
    }
  };
}

export default MainContent;
