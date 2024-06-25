import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'left',
      height: '100vh',
      width: '75%',
      margin: '0 auto',
      fontSize: '1.5rem',
      color: '#333'
    }}>
      <h1 style={{
        fontSize: '6rem',
      }}>404</h1>
      <h2>Something's wrong here...</h2>
      <p>We can't find the page you were looking for. Check our help center or head back home.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '24px' }}>
        <Link to="/" style={{ ...buttonStyle, textAlign: 'center' }}>Home</Link>
        <Link to="/help" style={{ ...buttonStyle, textAlign: 'center' }}>Help Center</Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '12px',
  textDecoration: 'none',
};

export default NotFoundPage;
