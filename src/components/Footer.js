import React from 'react';
import Social from './Social';

export default function Footer() {
    return (
        <div className="footer-container">
            <img className="footer-logo" src={require("../assets/logo.png")} alt="logo"></img>
            <Social></Social>
        </div>
    )
}
