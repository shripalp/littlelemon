import React, { useState} from 'react';
import logo from '../components/assets/Logo.svg';
import "../components/styles/Header.css";
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const navItems =  [
    {
        item:'Home',
        link:'/'
    },
    {
        item:'About',
        link:'/about'
    },
    {
        item:'Menu',
        link:'/menu'
    },
    {
        item:'Reservations',
        link:'/reservations'
    },
    {
        item:'Order Online',
        link:'/orderonline'
    },
    {
        item:'Login',
        link:'/login'
    },
]


function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <header className="container-header">


                <NavLink to= '/'>
                    <img className="logo-img" src={logo} alt = "Little Lemon logo" />
                </NavLink>


            <nav>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                {navItems.map((navItem)=>  <li key={navItem.link}><NavLink to={navItem.link}>{navItem.item}</NavLink></li>)}
                </ul>
            </nav>
            <div className="hamburger" onClick = {handleClick}>
                {click ? (<AiOutlineClose size={20} style={{ color: "#333333"}}/>) : (<AiOutlineMenu size={30} style={{ color: "#333333", borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px"}}/>)}  
            </div>

        </header>
    )
}

export default Header