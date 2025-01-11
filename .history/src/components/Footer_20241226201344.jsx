import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer__wrapper">
                    <div className="footer_logo">
                    <img src={logo} className='footer_logo' alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
