import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__contact-info">
          <a href="mailto:emailgoeshere@whatever.com" className="header__contact-link">
            emailgoeshere@whatever.com
          </a>
          <a href="tel:515-123-4567" className="header__contact-link">
            Call us at 515-123-4567
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;