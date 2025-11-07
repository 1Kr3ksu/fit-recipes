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
            <Link to="/about" className="nav-link">O nas</Link>
               <a href="#" className="nav-link">Baza wiedzy</a>
               <Link to="/contact" className="nav-link">Kontakt</Link>
        </div>
        
      <div className="user-avatar">
                      <div className="avatar-circle">
                        <span className="material-icons">person</span>
                      </div>
            <div className="icon-item">
              <span className="material-icons shopping-icons">shopping_bag</span>
            </div>
             <Link to="/aplikacja" className="btn-primary">Sprawdź aplikacje</Link>
        </div>
    </nav>
    </>
)
}
export default Header