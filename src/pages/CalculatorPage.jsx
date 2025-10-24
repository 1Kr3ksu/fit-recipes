import React, { useState } from 'react';
import '../styles/KcalCalculator.css';

function CalculatorPage() {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    weight: '',
    height: '',
    activity: '1.2'
  });
  
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCalories = () => {
    const { gender, age, weight, height, activity } = formData;
    
    if (!age || !weight || !height) {
      alert('Uzupełnij wszystkie pola');
      return;
    }

    let bmr;
    
    // Wzór Mifflin-St Jeor
    if (gender === 'male') {
      bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5;
    } else {
      bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;
    }
    
    const tdee = bmr * parseFloat(activity);
    
    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      weightLoss: Math.round(tdee - 500),
      weightGain: Math.round(tdee + 500)
    });
  };

  return (
    <div className="kcal-calculator">
      <div className="calculator-container">
        <h1>Kalkulator Kalorii</h1>
        <p>Oblicz swoje dzienne zapotrzebowanie kaloryczne</p>
        
        <div className="form-section">
          <div className="input-group">
            <label>Płeć:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                Mężczyzna
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                Kobieta
              </label>
            </div>
          </div>

          <div className="input-group">
            <label>Wiek (lata):</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="np. 25"
              min="1"
              max="100"
            />
          </div>

          <div className="input-group">
            <label>Waga (kg):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="np. 70"
              min="1"
              step="0.1"
            />
          </div>

          <div className="input-group">
            <label>Wzrost (cm):</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="np. 175"
              min="1"
            />
          </div>

          <div className="input-group">
            <label>Poziom aktywności:</label>
            <select
              name="activity"
              value={formData.activity}
              onChange={handleInputChange}
            >
              <option value="1.2">Siedzący tryb życia (brak ćwiczeń)</option>
              <option value="1.375">Niska aktywność (lekkie ćwiczenia 1-3 dni w tygodniu)</option>
              <option value="1.55">Umiarkowana aktywność (ćwiczenia 3-5 dni w tygodniu)</option>
              <option value="1.725">Wysoka aktywność (intensywne ćwiczenia 6-7 dni w tygodniu)</option>
              <option value="1.9">Bardzo wysoka aktywność (praca fizyczna + ćwiczenia)</option>
            </select>
          </div>

          <button className="calculate-btn" onClick={calculateCalories}>
            Oblicz zapotrzebowanie
          </button>
        </div>

        {result && (
          <div className="results-section">
            <h2>Twoje wyniki:</h2>
            
            <div className="result-card">
              <h3>BMR (Podstawowa Przemiana Materii)</h3>
              <p className="result-value">{result.bmr} kcal/dzień</p>
              <p className="result-description">
                Minimalna ilość kalorii potrzebna do podstawowych funkcji życiowych
              </p>
            </div>

            <div className="result-card primary">
              <h3>TDEE (Całkowite Dzienne Wydatkowanie Energii)</h3>
              <p className="result-value">{result.tdee} kcal/dzień</p>
              <p className="result-description">
                Twoje dzienne zapotrzebowanie kaloryczne z uwzględnieniem aktywności
              </p>
            </div>

            <div className="goals-section">
              <h3>Cele żywieniowe:</h3>
              
              <div className="goal-card loss">
                <h4>🎯 Utrata wagi</h4>
                <p className="goal-value">{result.weightLoss} kcal/dzień</p>
                <p>Deficyt 500 kcal (utrata ~0.5 kg/tydzień)</p>
              </div>

              <div className="goal-card maintain">
                <h4>⚖️ Utrzymanie wagi</h4>
                <p className="goal-value">{result.tdee} kcal/dzień</p>
                <p>Równowaga kaloryczna</p>
              </div>

              <div className="goal-card gain">
                <h4>💪 Przyrost wagi</h4>
                <p className="goal-value">{result.weightGain} kcal/dzień</p>
                <p>Nadwyżka 500 kcal (przyrost ~0.5 kg/tydzień)</p>
              </div>
            </div>

            <div className="info-section">
              <h4>ℹ️ Informacje dodatkowe:</h4>
              <ul>
                <li>Wyniki są orientacyjne i mogą się różnić w zależności od indywidualnych czynników</li>
                <li>Skonsultuj się z dietetykiem lub lekarzem przed wprowadzeniem drastycznych zmian w diecie</li>
                <li>Regularne ważenie i obserwacja postępów pomoże w dostosowaniu planu żywieniowego</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculatorPage;