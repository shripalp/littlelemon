import React from 'react'
import "../components/styles/Main.css";
import { NavLink } from 'react-router-dom'
import HeroImage from "../components/assets/restaurant.jpg"
import SpecialsCard from './SpecialsCard'



function HeroSection() {
    return (
        <div className="hero-section-background">
            <div className="hero-section-container">
            <div className="hero-section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="hero-section-right">
                <div className="image-box">
                    <img src={HeroImage} alt="Serving delicious dish" />
                </div>
            </div>

            </div>
            

        </div>

    )
}
function Specials() {
    return (
        <div className="specials-section-container">
             <div className="specials-section-title">
                <h1>This Week's Specials</h1>
                <div className="btn-container">
                    <button className="btn btn-menu">Online Menu</button>
                </div>
            </div>
            <SpecialsCard />

        </div>

    )

}

function Main() {
    return (
        <main>
            <HeroSection />
            <Specials />
        </main>
    )
}

export default Main