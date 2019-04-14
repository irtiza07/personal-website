import React from 'react';
import Navigation from './Navigation';


export default function Header() {
    return (
        <div className="header-container">
            <img className="logo" src={require('../assets/logo.png')} alt="my-logo"></img>
            <Navigation></Navigation>
        </div>
    )
}
