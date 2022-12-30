import React from 'react';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer className='card text-center'>
            <section>
                <h4>Contact</h4>
                <a href="mailto:bksayavong@gmail.com"> <i className="fa-regular fa-envelope fa-2x m-3 icon-color"></i></a>
                <a href="https://github.com/Bsayavong" target="_blank" rel="noreferrer"> <i className="fa-brands fa-github fa-2x m-3 icon-color"></i></a>
                <a href="https://www.linkedin.com/in/bryan-sayavong-8a652a196/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin fa-2x m-3 icon-color"></i></a>
            </section>
        </footer>
    );
}