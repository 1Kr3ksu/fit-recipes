import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ania Biernacka",
      date: "21 Marzec 2025",
      avatar: "A",
      rating: 5,
      text: "Dzięki temu człowiekowi wiem co powinnam wiedzieć wtedy kiedy powinnam 😊",
      verified: true
    },
    {
      id: 2,
      name: "Monika Monika",
      date: "19 Styczeń 2025",
      avatar: "M",
      rating: 5,
      text: "Dużo wartościowych sugestii w wyborach produktów, promocja zdrowego i rozsądnego stylu życia. Polecam",
      verified: true
    },
    {
      id: 3,
      name: "Przemysław Jahnz",
      date: "30 Grudzień 2024",
      avatar: "P",
      rating: 5,
      text: "Fajnie i w prosty sposób przekazywanie najważniejszych informacji. Wszystko zrobione z głową. Pozdrawiam",
      verified: true
    },
    {
      id: 4,
      name: "Katarzyna Nowak",
      date: "15 Luty 2025",
      avatar: "K",
      rating: 5,
      text: "Świetne przepisy i profesjonalne podejście do zdrowego odżywiania. Polecam każdemu!",
      verified: true
    },
    {
      id: 5,
      name: "Marcin Kowalski",
      date: "5 Styczeń 2025",
      avatar: "M",
      rating: 5,
      text: "Dzięki aplikacji schudłem 15kg w 4 miesiące. Najlepsza inwestycja w moje zdrowie!",
      verified: true
    }
  ];

  const slidesToShow = 3;
  const maxSlide = Math.max(0, testimonials.length - slidesToShow);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlay, maxSlide]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>
          Co mówi o nas <span className="highlight">społeczność?</span>
        </h2>
        
        <div 
          className="testimonials-slider"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div 
            className="testimonials-wrapper"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p className="testimonial-date">{testimonial.date}</p>
                  </div>
                  <div className="google-icon"></div>
                </div>
                
                <div className="stars">
                  {renderStars(testimonial.rating)}
                  {testimonial.verified && (
                    <span className="verified-badge">✓</span>
                  )}
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button 
            className="slider-btn" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ‹
          </button>
          
          <div className="slider-dots">
            {Array.from({ length: maxSlide + 1 }, (_, i) => (
              <span
                key={i}
                className={`dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
          
          <button 
            className="slider-btn" 
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
          >
            ›
          </button>
        </div>

        {isAutoPlay && (
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;