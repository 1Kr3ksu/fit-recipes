import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Hero_section from './components/Hero_section'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CalculatorPage from './pages/CalculatorPage'
import ApplicationPage from './pages/ApplicationPage'
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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
