import { Link } from 'react-router-dom'
import '../styles/Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo i opis */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">
                            <span className="logo-fit">FIT</span>
                            <span className="logo-recipes">RECIPES</span>
                        </h3>
                        <p className="footer-description">
                            Fit Recipes to miejsce, gdzie znajdziesz zdrowe przepisy i narzędzia, 
                            które pomogą Ci osiągnąć Twoje cele żywieniowe.
                        </p>
                        <div className="social-section">
                            <p>Obserwuj nas:</p>
                            <div className="social-icons">
                                <a href="#" className="social-icon">📷</a>
                                <a href="#" className="social-icon">🎵</a>
                                <a href="#" className="social-icon">📘</a>
                                <a href="#" className="social-icon">▶️</a>
                            </div>
                        </div>
                    </div>

                    {/* Nawigacja */}
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Nawigacja</h4>
                            <ul>
                                <li><Link to="/aplikacja">Aplikacja</Link></li>
                                <li><a href="#">O nas</a></li>
                                <li><Link to="/kalkulator">Kalkulator Kalorii</Link></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Kontakt</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Informacje</h4>
                            <ul>
                                <li><a href="#">Regulamin sklepu</a></li>
                                <li><a href="#">Polityka prywatności</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Linia oddzielająca */}
                <div className="footer-divider"></div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>Copyright Fit Recipes 2025 © Wszelkie prawa zastrzeżone</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
