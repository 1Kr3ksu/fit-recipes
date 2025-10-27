import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero_section from './components/Hero_section'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CalculatorPage from './pages/CalculatorPage'
import ApplicationPage from './pages/ApplicationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero_section />
            <Stats />
            <Testimonials />
            <div>
              <h1>🥗 Fit Recipes</h1>
              <p>Aplikacja w budowie...</p>
            </div>
          </>
        } />
        <Route path="/kalkulator" element={<CalculatorPage />} />
        <Route path="/aplikacja" element={<ApplicationPage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
