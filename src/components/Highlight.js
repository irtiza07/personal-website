import React from 'react'

export default function Highlight(props) {
    const { icon, title, summary, frameworks, technologies } = props
    return (
        <div class="tech-container">
            <img className="tech-logo" src={icon} alt="frontend-logo" ></img>
            <h1 className="tech-title"> {title}</h1>
            <p >{summary}</p>
            <p className="tech-subheading">Frameworks</p>
            {frameworks.map(value => <p className="tech-list">{value}</p>)}
            <p className="tech-subheading">Technology Stack:</p>
            {technologies.map(value => <p className="tech-list">{value}</p>)}
        </div>
    )
}
