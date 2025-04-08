import './Footer.scss';
import React from 'react';

export default function Footer() {
    return (
        <div className="footer-div">
            <p className="footer-title">© {new Date().getFullYear()}, Zuke Store</p>
        </div>
    );
}