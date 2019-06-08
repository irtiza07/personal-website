import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav-container">
      <Link to="/">
        <button className="nav-buttons"> Home </button>
      </Link>
      <Link to="/blog">
        <button className="nav-buttons"> Blog </button>
      </Link>
      <Link to="/contact">
        <button className="nav-buttons"> Contact </button>
      </Link>
    </div>
  );
}
