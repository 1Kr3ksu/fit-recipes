function Application(){
    // Przykładowe przepisy (tymczasowo ręcznie dodane)
    const recipes = [
        {
            id: 1,
            name: "Sałatka z kurczakiem i awokado",
            calories: 420,
            time: "15 min",
            difficulty: "Łatwe",
            image: "🥗",
            ingredients: ["Kurczak", "Awokado", "Pomidor", "Rukola"]
        },
        {
            id: 2,
            name: "Omlet białkowy z warzywami",
            calories: 280,
            time: "10 min",
            difficulty: "Łatwe",
            image: "🍳",
            ingredients: ["Białka jaj", "Szpinak", "Pomidor", "Papryka"]
        },
        {
            id: 3,
            name: "Smoothie proteinowe",
            calories: 350,
            time: "5 min",
            difficulty: "Bardzo łatwe",
            image: "🥤",
            ingredients: ["Banan", "Białko", "Mleko migdałowe", "Szpinak"]
        },
        {
            id: 4,
            name: "Łosoś z quinoa",
            calories: 520,
            time: "25 min",
            difficulty: "Średnie",
            image: "🐟",
            ingredients: ["Łosoś", "Quinoa", "Brokuły", "Cytryna"]
        },
        {
            id: 5,
            name: "Owsianka z owocami",
            calories: 320,
            time: "8 min",
            difficulty: "Łatwe",
            image: "🥣",
            ingredients: ["Płatki owsiane", "Maliny", "Orzech", "Miód"]
        },
        {
            id: 6,
            name: "Wrap z tuńczykiem",
            calories: 380,
            time: "12 min",
            difficulty: "Łatwe",
            image: "🌯",
            ingredients: ["Tortilla", "Tuńczyk", "Ogórek", "Sałata"]
        }
    ];

    return (
        <div className="application-page">
            {/* Hero sekcja */}
            <section className="app-hero">
                <div className="app-hero-content">
                    <h1>🥗 Fit Recipes - Baza zdrowych przepisów</h1>
                    <p>Przeglądaj nasze zdrowe przepisy i znajdź inspiracje na każdy posiłek</p>
                </div>
            </section>

            {/* Baza przepisów */}
            <section className="recipes-section">
                <div className="container">
                    <h2>📚 Nasze przepisy</h2>
                    <div className="recipes-grid">
                        {recipes.map(recipe => (
                            <div key={recipe.id} className="recipe-card">
                                <div className="recipe-image">{recipe.image}</div>
                                <div className="recipe-content">
                                    <h3>{recipe.name}</h3>
                                    <div className="recipe-info">
                                        <span className="calories">{recipe.calories} kcal</span>
                                        <span className="time">⏱️ {recipe.time}</span>
                                        <span className="difficulty">📊 {recipe.difficulty}</span>
                                    </div>
                                    <div className="ingredients">
                                        <strong>Składniki:</strong>
                                        <p>{recipe.ingredients.join(", ")}</p>
                                    </div>
                                    <button className="btn-recipe">Zobacz przepis</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Application