import React from 'react';
import { Link, Element } from 'react-scroll';
import '../styles/Header.css';
import siteLogo from '../assets/images/animation.gif';
import lineAnimate from '../assets/images/floor.gif';

function Header() {
    console.log('Header renderizado');
    return (
        <div className="container">
            <div className="content-wrapper">
                <div className="image-container">
                    <img src={siteLogo} alt="andarilo" />
                </div>

                <div className="line-animate">
                    <img src={lineAnimate} alt="linha animada" />
                </div>

                <div className="text-container">
                    <header>
                        <div id="fontLogo">
                            <h1>Andarilo</h1>
                            <h2>studio</h2>
                        </div>
                    </header>
                </div>
            </div>
            <div className="nav-container">
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
