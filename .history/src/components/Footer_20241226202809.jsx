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
                        <div className="social-icons_wrapper">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        </div>
                    </div>
                    <div className="footer__direct-links">
                        <div className="footer__links-">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
