import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer__wrapper">
                    <img src={logo} className='footer_logo' alt="" />
                    <div className="footer_socials">
                        <h1></h1>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
