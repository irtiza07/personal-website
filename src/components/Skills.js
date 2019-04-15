import React from 'react'
import Highlight from './Highlight';


export default function Skills() {
    const frontendSummary = 'I like to keep the design minimalistic and use the most suited framework to achieve my goals.';
    const frontendFrameworks = ['React JS', 'Ember JS'];
    const frontendTechnologies = ['HTML', 'CSS', 'Bootstrap', 'Bulma', 'Responsive Mobile Design'];

    const backendSummary = 'Primarily I make sure the code is most efficient and secure. I also keep a keen eye on readability as the project evolves.';
    const backendFrameworks = ['Express', 'Django'];
    const backendTechnologies = ['Python', 'Node JS', 'Java', 'RESTful APIs', 'Docker', 'PostgreSQL', 'MongoDB'];

    const aiSummary = 'Huge interest in recent breakthroughs in Deep Learning. Worked with both predictive and classification models.';
    const aiFrameworks = ['TensorFlow', 'Pytorch & Torch'];
    const aiTechnologies = ['Scikit-Learn', 'Pandas', 'Matplotlib', 'Google Cloud ML Engine'];



    return (
        <div className="skills-container">
            <Highlight icon={require("../assets/frontend.png")} title={"Front-end Developer"} summary={frontendSummary} frameworks={frontendFrameworks} technologies={frontendTechnologies}></Highlight>
            <Highlight icon={require("../assets/backend.png")} title={"Back-end Developer"} summary={backendSummary} frameworks={backendFrameworks} technologies={backendTechnologies}></Highlight>
            <Highlight icon={require("../assets/ai.png")} title={"Artificial Intelligence"} summary={aiSummary} frameworks={aiFrameworks} technologies={aiTechnologies}></Highlight>
        </div>
    )
}
