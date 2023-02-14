function Nav() {

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

    return(
        <nav>
            <ul>
                {navItems.map((navItem)=>  <li key={navItem.link}><a href={navItem.link}>{navItem.item}</a></li>)}
            </ul>
        </nav>
    )


}

export default Nav