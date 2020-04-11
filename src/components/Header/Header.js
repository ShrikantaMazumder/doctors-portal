import React from 'react';
import './Header.css'; 
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className="header-section">
            <div className="top-menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Dental Services</Link>
                <Link to="/review">Reviews</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/doctor/dashboard">Admin</Link>
            </div>
        </Container>
    );
};

export default Header;