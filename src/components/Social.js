import React from 'react'

export default function Social() {
    return (
        <div className="socialContainer">
            <a href="https://www.facebook.com/md.irtiza.purbit"><img className="social-logo" src={require('../assets/facebook.png')} alt="facebook-logo" /></a>

            <a href="https://www.instagram.com/irtiza.hafiz/?hl=en"><img className="social-logo" src={require('../assets/instagram.png')} alt="instagram-logo" /></a>

            <a href="https://www.linkedin.com/in/md-irtiza-hafiz-91a139127"><img className="social-logo" src={require('../assets/linkedin.png')} alt="linkedin-logo" /></a>
        </div>
    )
}
