import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer__wrapper">
                    <img src={logo} className='footer_logo' alt="" />
                    <div className="footer_socials">
                        <h1>Find us on social media!</h1>
                        .social-icon
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
