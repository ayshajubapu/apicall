import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(windowWidth);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src="https://www.freeiconspng.com/uploads/great-job-icon-png-20.png" alt="JobHunter logo" style={styles.logo} />
          <span style={styles.logoText}>JobHunter</span>
        </div>
        <div style={styles.right}>
          <a href="https://www.linkedin.com" style={styles.icon}><FaLinkedin /></a>
          <a href="https://www.instagram.com" style={styles.icon}><FaInstagram /></a>
          <a href="https://www.facebook.com" style={styles.icon}><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
}

const getStyles = (windowWidth) => {
  const isMobile = windowWidth <= 576;
  const isTablet = windowWidth <= 768 && windowWidth > 576;

  return {
    footer: {
      backgroundColor: '#fff',
      padding: isMobile ? '10px 0' : '20px 0',
      borderTop: '1px solid #ddd',
    },
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '10px' : '0',
    },
    logo: {
      width: isMobile ? '30px' : '40px',
      height: isMobile ? '30px' : '40px',
    },
    logoText: {
      marginLeft: isMobile ? '5px' : '10px',
      fontSize: isMobile ? '18px' : '24px',
      fontWeight: 'bold',
    },
    right: {
      display: 'flex',
      gap: isMobile ? '10px' : '15px',
    },
    icon: {
      fontSize: isMobile ? '20px' : '24px',
      color: '#000',
      transition: 'color 0.10s',
    },
  };
}

export default Footer;
