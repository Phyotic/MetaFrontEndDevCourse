import logo from "../../images/Logo.svg";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo"></img>
            <Nav />
        </header>
    );
}

export default Header;
