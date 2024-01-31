import React from "react";
import bannerImg from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BookingForms from './BookingForms'




const Header = () => {

    
    return(
        
        <header className='header'>
            <section>
                {/* banner text */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    {/* error here, may need to change later here */}
                    <button aria-label="On Click">Reserve Table</button>
                </div>
                {/* img banner */}
                <div className='banner-img'>
                    <img src={bannerImg} alt =''/>
                </div>
            </section>
        </header>
    );
};

export default Header;