import React, { useState } from 'react';
import PostSnippet from './PostSnippet';

export default function Blog() {
    //Placeholder to have hardcoded post snippets for now
    const initialPosts = [
        {
            title: "Post 1",
            text: "This is the small summary of the post. On clicking the post you can go and watch more details..."
        },
        {
            title: "Post 2",
            text: "This is the small summary of the post. On clicking the post you can go and watch more details..."
        },
        {
            title: "Post 3",
            text: "This is the small summary of the post. On clicking the post you can go and watch more details..."
        }
    ]
    const [posts, setPosts] = useState(initialPosts);

    return (
        <div className="blog">
            {
                posts.map((post, index) => {
                    return (
                        <PostSnippet key={index} post={post}></PostSnippet>
                    )
                })
            }
        </div>
    )
}
