import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h4>This is Home Page</h4>
            <button><Link to="/appointment">Get Appointment</Link></button>
        </div>
    );
};

export default Home;