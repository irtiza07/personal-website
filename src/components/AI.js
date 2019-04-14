import React from 'react'

export default function AI() {
    return (
        <div class="tech-container">
            <img className="tech-logo" src={require("../assets/ai.png")} alt="ai-logo" ></img>
            <h1 className="tech-title"> Artificial Intelligence</h1>
            <p >Huge interest in recent breakthroughs in Deep Learning. Worked with both predictive and classification models.</p>
            <p className="tech-subheading">Frameworks</p>
            <p className="tech-list"> TensorFlow </p>
            <p className="tech-list"> Pytorch & Torch </p>
            <p className="tech-subheading">Technology Stack:</p>
            <p className="tech-list"> Scikit-Learn </p>
            <p className="tech-list"> Pandas </p>
            <p className="tech-list"> Matplotlib </p>
            <p className="tech-list"> Google Cloud ML Engine </p>
            <p className="tech-list"> Bulma </p>
        </div>
    )
}
