import "./Footer.css";
import logo from "../../images/Logo .svg";
import { Link } from "react-router-dom";

function Footer() {
    let headerLinks = [
        ["/", "Home"],
        ["/", "About"],
        ["/", "Menu"],
        ["/booking", "Reservations"],
        ["/", "Order Online"],
        ["/", "Login"],
    ];

    let socialMediaLinks = [
        ["/", "Facebook"],
        ["/", "Instagram"],
        ["/", "Tik Tok"],
    ];

    return (
        <footer>
            <section id="footer-logo">
                <img alt="Little Lemon Footer Logo" src={logo}></img>
            </section>

            <section className="header-and-list">
                <h2>Doormat Navigation</h2>
                <ul>
                    {headerLinks.map((arr) => {
                        return (
                            <li key={arr[1]}>
                                <Link to={arr[0]}>{arr[1]}</Link>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className="header-and-list">
                <h2>Contact</h2>
                <ul>
                    <li>1234 W Lemon St.</li>
                    <li>312-555-1234</li>
                    <li>little-lemon@email.com</li>
                </ul>
            </section>

            <section className="header-and-list">
                <h2>Social Media Links</h2>
                <ul>
                    {socialMediaLinks.map((arr) => {
                        return (
                            <li key={arr[1]}>
                                <Link to={arr[0]}>{arr[1]}</Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </footer>
    );
}

export default Footer;
