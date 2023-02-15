import "../components/styles/Footer.css"
import footerlogo from '../components/assets/footerlogo.png'
function Footer() {
    return (
        <footer className="container-footer">
            <img src={footerlogo} alt="footerlogo"></img>
            <div>
                <h5>Locations</h5>
                <ul>
                    <li>Calgary</li>
                    <li>Edmonton</li>
                    <li>Toronto</li>
                    <li>Vancouver</li>
                </ul>
            </div>
            <div>
                <h5>Opening Times</h5>
                <ul>
                    <li>Mon - Wed: 10:30AM - 12:00AM</li>
                    <li>Fri: 12:00PM - 1:00AM</li>
                    <li>Sat - Sun: 10:30AM - 12:00AM</li>
                </ul>
            </div>
            <div>
                <h5>Contact Us</h5>
                <ul>
                    <li>300 Capri Ave SE</li>
                    <li>Calgary, Albera T2Y-0C9</li>
                    <li>Tel: 403-332-1234</li>
                    <li>Email: shripalp@gmail.com</li>
                </ul>
            </div>
            <div>
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer