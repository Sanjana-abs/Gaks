import React from 'react';
import '../style/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="" alt="Recipe Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search recipes..." />
                <button type="button">Search</button>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/meal-planning">Meal Planning</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/collections">Recipe Collections</a></li>
                </ul>
            </nav>
            <div className="user-options">
                <a href="/Login">Account/Login</a>
                <a href="/favorites">Favorites</a>
                <a href="/cart">Shopping Cart</a>
            </div>
            <div className="language-selector">
                <select>
                    <option value="en">ENGLISH</option>
                    <option value="es">HINDI</option>
                    <option value="fr">PUNJABI</option>
                    
                </select>
            </div>
            <div className="call-to-action">
                <button type="button" className="cta-button">Subscribe</button>
                <button type="button" className="cta-button">Submit Recipe</button>
            </div>
            <div className="social-links">
                <a href="https://facebook.com"><img src="facebook.png" alt="Facebook" /></a>
                <a href="https://twitter.com"><img src="twitter.png" alt="Twitter" /></a>
                <a href="https://instagram.com"><img src="instagram.png" alt="Instagram" /></a>
                
            </div>
        </header>
    );
}

export default Header;