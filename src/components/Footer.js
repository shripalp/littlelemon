import "../components/styles/Footer.css"
import footerlogo from '../components/assets/Logo.svg'
function Footer() {
    return (
        <footer className="footer-background">
            <div className="footer-container">
            <img src={footerlogo} alt="footerlogo"/>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
            <div className="footer-content">
            <div className="locations">
                <h5>Locations</h5>
                <ul>
                    <li>Calgary</li>
                    <li>Edmonton</li>
                    <li>Toronto</li>
                    <li>Vancouver</li>
                </ul>
            </div>
            <div className="opening-times">
                <h5>Opening Times</h5>
                <ul>
                    <li>Mon - Wed: 10:30AM - 12:00AM</li>
                    <li>Fri: 12:00PM - 1:00AM</li>
                    <li>Sat - Sun: 10:30AM - 12:00AM</li>
                </ul>
            </div>
            <div className="contact">
                <h5>Contact Us</h5>
                <ul>
                    <li>300 Capri Ave SE</li>
                    <li>Calgary, Albera T2Y-0C9</li>
                    <li>Tel: 403-332-1234</li>
                    <li>Email: shripalp@gmail.com</li>
                </ul>
            </div>

            </div>
            
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>

            </div>
        </footer>
    )
}

export default Footer