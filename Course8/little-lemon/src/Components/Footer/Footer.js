import logo from "../../images/Logo .svg";

function Footer() {
    return (
        <footer>
            <img alt="Little Lemon Footer Logo" src={logo}></img>

            <h2>Doormat Navigation</h2>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order-online">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>

            <h2>Contact</h2>
            <ul>
                <li>Address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>

            <h2>Social Media Links</h2>
            <ul>
                <li>
                    <a href="/home">link 1</a>
                </li>
                <li>
                    <a href="/home">link 2</a>
                </li>
                <li>
                    <a href="/home">link 3</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
