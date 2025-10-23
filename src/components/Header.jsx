import { Link } from 'react-router-dom'

function Header(){
return (
    <>
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/">
                <span className="logo-fit">FIT</span>
                <span className="logo-recipes">RECIPES</span>
            </Link>
        </div>
        
        <div className="navbar-menu">
            <Link to="/aplikacja" className="nav-link">Aplikacja</Link>
            <a href="#" className="nav-link">O nas</a>
            <a href="#" className="nav-link">Baza wiedzy</a>
            <a href="#" className="nav-link">Kontakt</a>
        </div>
        
        <div className="navbar-actions">
            <div className="user-icon">
                👤
            </div>
            <div className="cart-icon">
                🛒
                <span className="cart-count">0</span>
            </div>
            <button className="btn-primary">Sprawdź apkę</button>
        </div>
    </nav>
    </>
)
}
export default Header