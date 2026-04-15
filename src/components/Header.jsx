import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-neutral shadow-md">
            <div className="h-16 flex items-center px-6 justify-between md:justify-start">
                {/* Logo and Name - Left */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Munamii Cakery Logo" className="h-12 w-auto" />
                    <h1 className="hidden sm:block text-xl font-bold text-secondary m-0">Munamii Cakery</h1>
                </div>

                {/* Desktop Navigation - Middle */}
                <nav className="hidden md:flex flex-1 justify-center gap-5 text-lg font-bold">
                    <NavLink to="/" end className="nav-link">HOME</NavLink>
                    <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                    <NavLink to="/products" className="nav-link">PRODUCTS</NavLink>
                    <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                </nav>

                {/* Right Side - Shopping Cart + Hamburger Menu */}
                <div className="flex items-center gap-4 ml-auto md:ml-0">
                    <span className="shopping-cart text-2xl cursor-pointer text-secondary hover:text-primary transition-colors duration-500" title="Shopping Cart">🛒</span>

                    {/* Mobile Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center text-secondary hover:text-primary transition-colors duration-500"
                        aria-label="Toggle menu"
                    >
                        <span className="material-icons text-2xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-neutral border-t-2 border-secondary/20 flex flex-col gap-1 px-6 py-4">
                    <NavLink
                        to="/"
                        end
                        onClick={closeMenu}
                        className="mobile-nav-link"
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className="mobile-nav-link"
                    >
                        ABOUT
                    </NavLink>
                    <NavLink
                        to="/products"
                        onClick={closeMenu}
                        className="mobile-nav-link"
                    >
                        PRODUCTS
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className="mobile-nav-link"
                    >
                        CONTACT
                    </NavLink>
                </nav>
            )}
        </header>
    );
}

export default Header;