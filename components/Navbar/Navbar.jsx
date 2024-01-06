// Import React and any other necessary dependencies
import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

// Create your functional component
const Navbar = () => {
  // Use state to track the active state of the header
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state of the header
  const toggleHeader = () => {
    setIsActive(!isActive);
  };

  // Inline styles
  const headerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: isActive ? 'var(--white)' : 'var(--eerie-black-1)',
    paddingBlock: '15px',
    zIndex: 4,
  };

  const headerActiveStyle = {
    position: 'fixed',
    top: '-66px',
    backgroundColor: 'var(--white)',
    borderBlockStart: '1px solid var(--cultured)',
    boxShadow: 'var(--shadow-1)',
    animation: 'slideIn 0.25s var(--cubic-out) forwards',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  };


  // ... other styles

  // Return the JSX structure with inline styles
  return (
   

        <header className={`header ${isActive ? 'active' : ''}`}>
          <div className="container">
          <a  className="logo">
          CoinCrafters
        </a>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
            <Link to= {'/'}>
              <a className="navbar-link" >
                Homepage
              </a>
              </Link>
            </li>
            <li className="navbar-item">
            <Link to= {'/coins'}>
              <a className="navbar-link" >
                Coins
              </a>
              </Link>
            </li>
          
           
          </ul>
        </nav>

          <div>
        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggler
          onClick={toggleHeader}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
          </div>
        <div>
        <a  className="btn btn-outline">
          Wallet
        </a>
        </div>
      </div>
    </header>
  

   
     
  )
}

// Export your component
export default Navbar;
