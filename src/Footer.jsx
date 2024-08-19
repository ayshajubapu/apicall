import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
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

const styles = {
  footer: {
    backgroundColor: '#fff',
    padding: '20px 0',
    borderTop: '1px solid #ddd',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
  },
  logoText: {
    marginLeft: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  right: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    fontSize: '24px',
    color: '#000',
    transition: 'color 0.10s',
  },
  iconHover: {
    color: '#0083b1',
  }
}

export default Footer;
