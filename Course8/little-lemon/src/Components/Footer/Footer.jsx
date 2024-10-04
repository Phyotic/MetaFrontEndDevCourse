import "./Footer.css";
import logo from "../../images/Logo .svg";
import { Link } from "react-router-dom";

function Footer() {
    let headerLinks = [
        ["/", "Home"],
        ["/about", "About"],
        ["/menu", "Menu"],
        ["/booking", "Reservations"],
        ["/order-online", "Order Online"],
        ["/login", "Login"],
    ];

    let socialMediaLinks = [
        ["/", "link 1"],
        ["/", "link 2"],
        ["/", "link 3"],
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
                    <li>Address</li>
                    <li>phone number</li>
                    <li>email</li>
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
