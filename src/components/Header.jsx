import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Qwerty Cakery</h1>

            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    );
}

export default Header;