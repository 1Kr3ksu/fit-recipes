function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <h2>Co mówi o nas <span className="highlight">społeczność?</span></h2>
                
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="user-avatar">K</div>
                            <div className="user-info">
                                <h4>Kasia Ficek</h4>
                                <span className="date">16 Październik 2025</span>
                            </div>
                            <div className="google-icon">G</div>
                        </div>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>Rewelacyjna aplikacja, bogactwo przepisów i ogromna baza produktów oraz cała masa przydatnych narzędzi. Szybka i fachowa pomoc poprzez chat.</p>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="user-avatar">K</div>
                            <div className="user-info">
                                <h4>Kasia Olbryś</h4>
                                <span className="date">13 Sierpień 2025</span>
                            </div>
                            <div className="google-icon">G</div>
                        </div>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>Pierwszy przepis z załączonego przeze mnie zdjęcia e-booka za mną i mogę śmiało powiedzieć, że niezwykle polecam. Omlet wyszedł mięciutki, a w smaku przypomina dla mnie bardziej deser niż pożywne śniadanie, co mi bardzo odpowiada...</p>
                        <button className="read-more">Czytaj więcej</button>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="user-avatar">M</div>
                            <div className="user-info">
                                <h4>Maja</h4>
                                <span className="date">12 Sierpień 2025</span>
                            </div>
                            <div className="google-icon">G</div>
                        </div>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p>Świetne przepisy polecam ebook</p>
                    </div>
                </div>

                <div className="testimonials-navigation">
                    <button className="nav-arrow left">‹</button>
                    <div className="dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <button className="nav-arrow right">›</button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
