import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./Contact.css";
import "./Blog.css";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  );
}
