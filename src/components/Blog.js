import React from 'react'
import Header from './Header';
import Footer from './Footer';
import PostSnippet from './PostSnippet';
import Basic from './Basic';

export default function Blog() {
    const content = 'From software development tutorials to good software engineering practices to software architecture to fitness and lifestyle for software engineers, I cover quite a few different topics in my blog. One of the main purpose of the blog is to track my progress as a software engineer as I learn new skills and improve my coding skills. Not only do I track my technical skills in this blog, but I also talk about my personal growth as a software engineer. Hopefully, someone who goes through the posts will find something to relate to and take away a couple of important things having spent some time here.';

    const blogPosts = [
        {
            id: 1,
            title: "2019 Resolutions",
            topic: "Personal Growth",
            time: 15,
            summary: "The goal of 2019 is to get enough practical experience and do side projects to learn the fundamentals of software engineering. Fundamentals include mastering one framework, end-to-end deployment of a web application with separate frontend and backend. testing, logging and focusing on the architecture of the projects. Other than that, also need to focus on the infrastructure side of things and learn a fair bit about Kubernates, Docker and other such platforms. Lastly, will focus on web security to learn about CSRF attacks and XSS attacks and other common attacks. ",
            date: "20th January 2019",
        },
        {
            id: 2,
            title: "2019 Projects",
            topic: "Software Development",
            time: 20,
            summary: "The goal of 2019 is to get enough practical experience and do side projects to learn the fundamentals of software engineering. Fundamentals include mastering one framework, end-to-end deployment of a web application with separate frontend and backend. testing, logging and focusing on the architecture of the projects. Other than that, also need to focus on the infrastructure side of things and learn a fair bit about Kubernates, Docker and other such platforms. Lastly, will focus on web security to learn about CSRF attacks and XSS attacks and other common attacks. ",
            date: "20th January 2019",
        }
    ]

    return (
        <div className="blog-page-container">
            <Header></Header>
            <Basic title="My Blog" content={content}></Basic>
            {blogPosts.map(item => <PostSnippet key={item.id} post={item}></PostSnippet>)}
            <Footer></Footer>
        </div>

    )
}
