import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function FullPost(props) {
    const { id } = props.match.params;
    const post = {
        id: id,
        title: "2019 Resolutions",
        topic: "Personal Growth",
        time: 15,
        summary: "The goal of 2019 is to get enough practical experience and do side projects to learn the fundamentals of software engineering. Fundamentals include mastering one framework, end-to-end deployment of a web application with separate frontend and backend. testing, logging and focusing on the architecture of the projects.",
        body: "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. Ought these are balls place mrs their times add she. Taken no great widow spoke of it small. Genius use except son esteem merely her limits. Sons park by do make on. It do oh cottage offered cottage in written. Especially of dissimilar up attachment themselves by interested boisterous. Linen mrs seems men table. Jennings dashwood to quitting marriage bachelor in. On as conviction in of appearance apartments boisterous.",
        date: "20th January 2019",
    };
    return (
        <div className="full-post-container">
            <Header></Header>
            <div className="post-container">
                <h1 className="post-title"> {post.title} </h1>
                <p className="post-topic"> Topic: {post.topic}</p>
                <p className="post-time"> Time: {post.time} minutes</p>
                <p className="post-body">{post.body}</p>
                <p className="post-date"> {post.date} </p>
            </div>
            <Footer></Footer>
        </div>
    )
}
