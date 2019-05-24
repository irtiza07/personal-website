import React from "react";

export default function PostSnippet(props) {
  const { title, topic, time, summary, date, body } = props.post;
  return (
    <div className="post-container">
      <h1 className="post-title"> {title} </h1>
      <p className="post-topic"> Topic: {topic}</p>
      <p className="post-time"> Time: {time} minutes</p>
      <p className="post-summary"> {summary} </p>
      <p className="post-date"> {date} </p>
      <a href={body} target="_blank">
        <button className="read-more-button"> Read More </button>
      </a>
    </div>
  );
}
