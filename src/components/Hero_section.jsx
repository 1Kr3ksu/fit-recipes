import { Link } from 'react-router-dom'

function Hero_section(){
return (
    <>
    <section className="hero">
        <h1>Jedz ulubione produkty i osiągnij wymarzoną sylwetkę</h1>
        <p>Odkryj zdrowe przepisy, które pomogą Ci w drodze do lepszego zdrowia i kondycji</p>
        <div className="hero-button">
            <button className="btn-primary">Sprawdź aplikacje</button>
        </div>
    </section>

    <section className="features">
        <div className="features-content">
            <div className="phone-mockup">
                <img src="/phone-app.jpg" alt="Aplikacja mobilna" />
            </div>
            
            <div className="features-text">
                <h2>Elastyczna dieta w aplikacji, wsparcie eksperta i społeczność</h2>
                <p>Chcesz schudnąć lub przytyć? Masz problemy z motywacją? Pomożemy Ci osiągnąć swoje cele i zbudować zdrowe nawyki żywieniowe.</p>
                
                <div className="feature-list">
                    <div className="feature-item">
                        <span className="feature-icon">📱</span>
                        <div>
                            <h3>Interaktywny jadłospis</h3>
                            <p>Spersonalizowana dieta dopasowana do Twoich potrzeb. Wybieraj z tysięcy przepisów i jedz to, co lubisz.</p>
                        </div>
                    </div>
                    
                    <div className="feature-item">
                        <span className="feature-icon">👨‍⚕️</span>
                        <div>
                            <h3>Wsparcie eksperta</h3>
                            <p>Pomoc dietetyka, gdy jej potrzebujesz. Zadawaj pytania i otrzymuj profesjonalne porady.</p>
                        </div>
                    </div>
                    
                    <div className="feature-item">
                        <span className="feature-icon">👥</span>
                        <div>
                            <h3>Motywująca społeczność</h3>
                            <p>Dołącz do grupy osób o podobnych celach. Dziel się sukcesami i czerpij motywację od innych.</p>
                        </div>
                    </div>
                </div>
                
                <button className="btn-primary">Sprawdź aplikację</button>
            </div>
        </div>
    </section>
        <h1>Nie wiesz ile jeść?</h1>
    <h1>Kalkulator Kalorii</h1>
    <p>Kalkulator kalorii Fit Recipes pokaże Ci, ile powinieneś jeść, żeby osiągnąć swój cel. Chcesz schudnąć, przytyć lub utrzymać aktualną masę ciała?</p>
    <Link to="/kalkulator">
        <button className="btn-calculate">Oblicz swoje zapotrzebowanie</button>
    </Link>
    </>
)
}
export default Hero_section