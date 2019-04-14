import React from 'react'

export default function Backend() {
    return (
        <div class="tech-container">
            <img className="tech-logo" src={require("../assets/backend.png")} alt="backend-logo" ></img>
            <h1 className="tech-title"> Back-end Developer</h1>
            <p >Primarily I make sure the code is most efficient and secure. I also keep a keen eye on readability as the project evolves.</p>
            <p className="tech-subheading">Frameworks</p>
            <p className="tech-list"> Express </p>
            <p className="tech-list"> Django </p>
            <p className="tech-subheading">Technology Stack:</p>
            <p className="tech-list"> Python </p>
            <p className="tech-list"> Node JS </p>
            <p className="tech-list"> Java </p>
            <p className="tech-list"> RESTful APIs </p>
            <p className="tech-list"> Docker </p>
            <p className="tech-list"> PostgreSQL </p>
            <p className="tech-list"> MongoDB </p>
        </div>
    )
}
