import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Projects from './components/Projects';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

export default function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  )
}
