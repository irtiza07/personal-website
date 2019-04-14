import React from 'react';


import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';

export default function App() {

  return (
    <Router>
      <div className="App">
        <Home></Home>
      </div>
    </Router>
  )
}
