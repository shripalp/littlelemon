import logo from '../components/assets/Logo.svg';
import "../components/styles/Header.css";
import { NavLink } from 'react-router-dom';

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

    return (
        <header className="container-header">

            <div className="header-item1">
                <NavLink to= '/'>
                    <img className="logo-img" src={logo} alt = "Little Lemon logo" />
                </NavLink>
            </div>
            

            <nav className="header-item2">
                <ul className="nav-menu">
                {navItems.map((navItem)=>  <li key={navItem.link}><a href={navItem.link}>{navItem.item}</a></li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header