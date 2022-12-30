import React from 'react';
import '../styles/nav.css';

export default function Nav({ handlePageChange }) {
    return (
        <header>
            <nav>
                <h3>Hello, World</h3>
                <ul className='navlinks'>
                    <li><a href="#about" onClick={() => handlePageChange('about')}>About Me</a></li>
                    <li><a href="#portfolio" onClick={() => handlePageChange('portfolio')}>Portfolio</a></li>
                    <li><a href="#contact" onClick={() => handlePageChange('contact')}>Contact</a></li>
                    <li><a href="#resume" onClick={() => handlePageChange('resume')}>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}