import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <h1>Munamii Cakery</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </footer>
    );
}

export default Footer;