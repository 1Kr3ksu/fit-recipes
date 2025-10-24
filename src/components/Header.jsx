import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header(){
return (
    <>
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/" className="logo-link">
                <div className="logo-container">
                    <div className="logo-icon">
                        <span className="logo-symbol">🍃</span>
                    </div>
                    <div className="logo-text">
                        <span className="logo-fit">FIT</span>
                        <span className="logo-recipes">RECIPES</span>
                    </div>
                </div>
            </Link>
        </div>
        
        <div className="navbar-menu">
            <Link to="/aplikacja" className="nav-link">Aplikacja</Link>
            <Link to="/kalkulator" className="nav-link">Kalkulator</Link>
            <a href="#" className="nav-link">O nas</a>
            <a href="#" className="nav-link">Baza wiedzy</a>
            <a href="#" className="nav-link">Kontakt</a>
        </div>
        
      <div className="user-avatar">
                      <div className="avatar-circle">
                        <span className="material-icons">person</span>
                      </div>
            <div className="icon-item">
              <span className="material-icons shopping-icons">shopping_bag</span>
            </div>
            <button className="btn-primary">Sprawdź apkę</button>
        </div>
    </nav>
    </>
)
}
export default Header