import React from 'react'
import { Link } from 'react-router-dom';

export default function PostSnippet(props) {
    const { id, title, topic, time, summary, date } = props.post;
    return (
        <div className="post-container">
            <h1 className="post-title"> {title} </h1>
            <p className="post-topic"> Topic: {topic}</p>
            <p className="post-time"> Time: {time} minutes</p>
            <p className="post-summary"> {summary} </p>
            <p className="post-date"> {date} </p>
            <Link to={`/posts/${id}`}><button className="read-more-button"> Read More </button></Link>
        </div>
    )
}
