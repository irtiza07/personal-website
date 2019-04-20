import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

export default function FullPost(props) {
    const { id } = props.match.params;
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`http://ec2-18-217-52-23.us-east-2.compute.amazonaws.com/posts/${id}`)
            .then(response => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className="full-post-container">
            <Header></Header>
            <div className="post-container">
                <h1 className="post-title"> {post.title} </h1>
                <p className="post-topic"> Topic: {post.topic}</p>
                <p className="post-time"> Time: {post.time} minutes</p>
                <p className="post-body">{ReactHtmlParser(post.body)}</p>
                <p className="post-date"> {post.date} </p>
            </div>
            <Footer></Footer>
        </div>
    )
}
