import React from "react";
import PropTypes from "prop-types";

export default function Basic(props) {
  const { title, content } = props;
  return (
    <div className="basic-section">
      <h1 className="basic-section-title">{title}</h1>
      <h2 className="basic-section-text">{content}</h2>
    </div>
  );
}

Basic.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
