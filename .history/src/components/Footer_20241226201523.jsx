import React from 'react';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer__wrapper">
                    <img src={logo} className='footer_logo' alt="" />
                    <div className="footer_socials">
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
