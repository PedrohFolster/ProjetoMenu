import React, { useState } from 'react';
import './Header.css';
import logoSenac from './logo_senac_branco.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <header className="header-bottom">
        <div className="header-logo">
          <img src={logoSenac} alt="Logotipo Senac" />
        </div>
        <nav className="header-nav">
          <div className="menu-toggle-container">
            <button className="menu-toggle" onClick={toggleMenu}>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </button>
            {menuOpen && (
              <nav className="menu-hamburger">
                <a href="/inicio">Início</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
              </nav>
            )}
          </div>
          <a href="/cursos">Cursos</a>
          <a href="/servicos">Serviços</a>
          <a href="/para-empresa">Para empresa</a>
          <a href="/institucional">Institucional</a>
          <a href="/biblioteca">Biblioteca</a>
          <a href="/eventos">Eventos</a>
          <a href="/contato">Contato</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
