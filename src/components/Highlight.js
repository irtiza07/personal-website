import React from "react";
import uuid from "uuid";

export default function Highlight(props) {
  const { icon, title, summary, frameworks, technologies } = props;
  return (
    <div className="tech-container">
      <img className="tech-logo" src={icon} />
      <h1 className="tech-title"> {title}</h1>
      <p className="tech-list">{summary}</p>
      <p className="tech-subheading">Frameworks</p>
      {frameworks.map(value => (
        <p key={uuid()} className="tech-list">
          {value}
        </p>
      ))}
      <p className="tech-subheading">Technology</p>
      {technologies.map(value => (
        <p key={uuid()} className="tech-list">
          {value}
        </p>
      ))}
    </div>
  );
}
