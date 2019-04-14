import React from 'react'

export default function Welcome() {
    return (
        <div className="welcome-section">
            <h1 className="welcome-title"> Full Stack Developer, AI Enthusiast & Tech Addict</h1>
            <h2 className="welcome-text"> I code simple and beautiful solutions to the most challegning problems  </h2>
            <img className="avatar-icon" src={require('../assets/avatar.png')} alt="my-avatar"></img>
        </div>
    )
}
