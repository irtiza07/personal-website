import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PostSnippet from "./PostSnippet";
import Basic from "./Basic";
import axios from "axios";

export default function Blog() {
  const content =
    "From software development tutorials to good software engineering practices to software architecture to fitness and lifestyle for software engineers, I cover quite a few different topics in my blog. One of the main purpose of the blog is to track my progress as a software engineer as I learn new skills and improve my coding skills. Not only do I track my technical skills in this blog, but I also talk about my personal growth as a software engineer. Hopefully, someone who goes through the posts will find something to relate to and take away a couple of important things having spent some time here.";

  const [posts, setPosts] = useState([]);
  const fetchArticles = () => {
    axios
      .get("http://ec2-18-217-52-23.us-east-2.compute.amazonaws.com/posts")
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(fetchArticles, []);

  return (
    <div className="blog-page-container">
      <Header />
      <Basic title="My Blog" content={content} />
      {posts.map(item => (
        <PostSnippet key={item._id} post={item} />
      ))}
      <Footer />
    </div>
  );
}
