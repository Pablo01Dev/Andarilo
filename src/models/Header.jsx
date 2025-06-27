import React from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import siteLogo from '../assets/images/animation.gif';
import lineAnimate from '../assets/images/floor.svg';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <header>
          <div className={styles.fontLogo}>
            <h1>Andarilo</h1>
            <h2>studio</h2>
          </div>
        </header>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img src={siteLogo} alt="Andarilo logo animado" />
        </div>

        <div className={styles.parallaxFloor}>
          <div
            className={styles.floor}
            style={{ backgroundImage: `url(${lineAnimate})` }}
          ></div>
          <div
            className={styles.floor}
            style={{ backgroundImage: `url(${lineAnimate})` }}
          ></div>
        </div>
      </div>

      <div className={styles.navContainer}>
        <nav>
          <Link to="portfolio" spy={true} smooth={true} offset={-80} duration={500}>
            <button>Portfólio</button>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <button>Quem sou?</button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
            <button>Contato</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
