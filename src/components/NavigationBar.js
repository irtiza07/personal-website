import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Irtiza Hafiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav className="mr-auto">
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/blog">Blog</Link>
                    <Link className="nav-item" to="/gallery">Gallery</Link>
                    <Link className="nav-item" to="/projects">Projects</Link>

                </Nav>
            </Navbar>
        </div>
    )
}