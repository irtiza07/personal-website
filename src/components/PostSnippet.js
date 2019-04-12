import React from 'react';
import PropTypes from 'prop-types';

export default function PostSnippet(props) {
    PostSnippet.propTypes = {
        post: PropTypes.object
    };


    const { title, text } = props.post;
    return (
        <div>
            <h2> {title} </h2>
            <text>{text}</text>
        </div>
    )
}
