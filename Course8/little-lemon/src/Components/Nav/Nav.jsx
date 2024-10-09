import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Menu</Link>
                </li>
                <li>
                    <Link to="/booking">Reservations</Link>
                </li>
                <li>
                    <Link to="/">
                        <span className="no-wrap">Order Online</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
