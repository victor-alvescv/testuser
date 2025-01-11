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
                        <div className="social-icon_wrapper">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
