import { useState } from "react";

function KcalCalculator(){
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(175);
    const [age, setAge] = useState(30);
    const [sex, setSex] = useState('male');
    const [activity, setActivity] = useState('1.2');
    const [tdee, setTdee] = useState(null);

    const calculate = (e) => {
        e.preventDefault();
        const w = Number(weight) || 0;
        const h = Number(height) || 0;
        const a = Number(age) || 0;
        const act = Number(activity) || 1;

        // Mifflin-St Jeor
        let bmr = 10 * w + 6.25 * h - 5 * a + (sex === 'male' ? 5 : -161);
        const total = Math.round(bmr * act);
        setTdee(total);
    }

    const reset = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setSex('male');
        setActivity('1.2');
        setTdee(null);
    }

    return (
        <div className="kcal-calculator">
            <form className="kcal-form" onSubmit={calculate}>
                <div>
                    <label className="input-label">Waga (kg)</label>
                    <input type="number" min="0" value={weight} onChange={e=>setWeight(e.target.value)} />
                </div>

                <div className="row">
                    <div style={{flex:1}}>
                        <label className="input-label">Wzrost (cm)</label>
                        <input type="number" min="0" value={height} onChange={e=>setHeight(e.target.value)} />
                    </div>
                    <div style={{width:120}}>
                        <label className="input-label">Wiek</label>
                        <input type="number" min="0" value={age} onChange={e=>setAge(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div style={{flex:1}}>
                        <label className="input-label">Płeć</label>
                        <select value={sex} onChange={e=>setSex(e.target.value)}>
                            <option value="male">Mężczyzna</option>
                            <option value="female">Kobieta</option>
                        </select>
                    </div>
                    <div style={{flex:1}}>
                        <label className="input-label">Aktywność</label>
                        <select value={activity} onChange={e=>setActivity(e.target.value)}>
                            <option value="1.2">Siedzący tryb życia</option>
                            <option value="1.375">Lekko aktywny</option>
                            <option value="1.55">Umiarkowanie aktywny</option>
                            <option value="1.725">Bardzo aktywny</option>
                            <option value="1.9">Ekstremalnie aktywny</option>
                        </select>
                    </div>
                </div>

                        <div className="kcal-actions">
                            <button type="submit" className="btn-calc">Oblicz zapotrzebowanie</button>
                            <button type="button" className="btn-reset" onClick={reset}>Wyczyść</button>
                            <div className="kcal-note muted">* Wynik przybliżony</div>
                        </div>
            </form>

            <aside className="kcal-result">
                <div className="title">Twoje zapotrzebowanie</div>
                <div className="value">{tdee !== null ? `${tdee} kcal/d` : '—'}</div>
                <div className="sub">Kalorie potrzebne dziennie</div>

                <div className="macro-list">
                    <div className="macro-item">
                        <div className="label">Białko</div>
                        <div className="num">{tdee ? Math.round((tdee * 0.25) / 4) + ' g' : '—'}</div>
                    </div>
                    <div className="macro-item">
                        <div className="label">Węglowodany</div>
                        <div className="num">{tdee ? Math.round((tdee * 0.50) / 4) + ' g' : '—'}</div>
                    </div>
                    <div className="macro-item">
                        <div className="label">Tłuszcz</div>
                        <div className="num">{tdee ? Math.round((tdee * 0.25) / 9) + ' g' : '—'}</div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default KcalCalculator