import '../styles/Application.css';
import { useState } from 'react';

function Application() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const recipes = [
        // ...przepisy...
        {
            id: 1,
            name: "Sałatka z kurczakiem i awokado",
            calories: 420,
            time: "15 min",
            difficulty: "Łatwe",
            image: "https://www.przyslijprzepis.pl/media/cache/gallery_view/uploads/media/recipe/0006/94/salatka-z-awokado-i-kurczakiem.jpeg",
            ingredients: ["Kurczak", "Awokado", "Pomidor", "Rukola"]
        },
        // ...pozostałe przepisy...
        {
            id: 2,
            name: "Omlet białkowy z warzywami",
            calories: 280,
            time: "10 min",
            difficulty: "Łatwe",
            image: "https://tse2.mm.bing.net/th/id/OIP.r1o6APdR1FSn4yxj2TiD5wHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
            ingredients: ["Białka jaj", "Szpinak", "Pomidor", "Papryka"]
        },
        {
            id: 3,
            name: "Smoothie proteinowe",
            calories: 350,
            time: "5 min",
            difficulty: "Bardzo łatwe",
            image: "https://tse4.mm.bing.net/th/id/OIP.ohuZAKwxwjRQZKLhtU0vJwHaD4?w=323&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            ingredients: ["Banan", "Białko", "Mleko migdałowe", "Szpinak"]
        },
        {
            id: 4,
            name: "Łosoś z quinoa",
            calories: 520,
            time: "25 min",
            difficulty: "Średnie",
            image: "https://tse2.mm.bing.net/th/id/OIP.7eQvzYbC2HVJr1UoJa5higHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
            ingredients: ["Łosoś", "Quinoa", "Brokuły", "Cytryna"]
        },
        {
            id: 5,
            name: "Owsianka z owocami",
            calories: 320,
            time: "8 min",
            difficulty: "Łatwe",
            image: "https://1.bp.blogspot.com/-s3lueEXQ78g/V45iMihXUVI/AAAAAAAAU6Y/Kqj6G6W15MUDSoGUhlc6OV_nW-ccXMWGQCLcB/s1600/IS_owsianka%2Bkulinarna%2Bmaniusia%2B%25281%2529.jpg",
            ingredients: ["Płatki owsiane", "Maliny", "Orzech", "Miód"]
        },
        {
            id: 6,
            name: "Wrap z tuńczykiem",
            calories: 380,
            time: "12 min",
            difficulty: "Łatwe",
            image: "https://tlustegary.pl/wp-content/uploads/2025/04/IMG_6167.jpeg",
            ingredients: ["Tortilla", "Tuńczyk", "Ogórek", "Sałata"]
        }
    ];

     const isImageUrl = (img) => typeof img === "string" && img.startsWith("http");

    return (
        <div className="application-page">
            <div className={`main-content${selectedRecipe ? ' blurred' : ''}`}>
                {/* Hero sekcja */}
                <section className="app-hero">
                    <div className="app-hero-content">
                        <h1>Fit Recipes — baza zdrowych przepisów</h1>
                        <p>Przeglądaj nasze zdrowe przepisy i znajdź inspiracje na każdy posiłek</p>
                    </div>
                </section>

                {/* Baza przepisów */}
                <section className="recipes-section">
                    <div className="container">
                        <h2>Nasze przepisy</h2>
                        <div className="recipes-grid">
                            {recipes.map(recipe => (
                                <div key={recipe.id} className="recipe-card">
                                    <div className="recipe-image">
                                        {isImageUrl(recipe.image) ? (
                                            <img
                                                src={recipe.image}
                                                alt={recipe.name}
                                                className="recipe-img"
                                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: 64 }}>{recipe.image}</span>
                                        )}
                                    </div>
                                    <div className="recipe-content">
                                        <h3>{recipe.name}</h3>
                                        <div className="recipe-info">
                                            <span className="calories">{recipe.calories} kcal</span>
                                            <span className="time">{recipe.time}</span>
                                            <span className="difficulty">{recipe.difficulty}</span>
                                        </div>
                                        <div className="ingredients">
                                            <strong>Składniki:</strong>
                                            <p>{recipe.ingredients.join(", ")}</p>
                                        </div>
                                        <button className="btn-recipe" onClick={() => setSelectedRecipe(recipe)}>
                                            Zobacz przepis
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Modal z detalami przepisu */}
            {selectedRecipe && (
                <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
                    <div
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                        style={
                            isImageUrl(selectedRecipe.image)
                                ? {
                                    backgroundImage: `url(${selectedRecipe.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    color: "#fff",
                                    boxShadow: "0 4px 32px rgba(0,0,0,0.2)",
                                    position: "relative"
                                }
                                : {}
                        }
                    >
                        <div
                            style={
                                isImageUrl(selectedRecipe.image)
                                    ? {
                                        background: "rgba(0,0,0,0.55)",
                                        borderRadius: 16,
                                        padding: "1rem",
                                        position: "relative"
                                    }
                                    : {}
                            }
                        >
                            <h2>{selectedRecipe.name}</h2>
                            <div>
                                <span>{selectedRecipe.calories} kcal</span> | <span>{selectedRecipe.time}</span> | <span>{selectedRecipe.difficulty}</span>
                            </div>
                            <div>
                                <strong>Składniki:</strong>
                                <ul>
                                    {selectedRecipe.ingredients.map((ing, idx) => (
                                        <li key={idx}>{ing}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className='btn-primary' onClick={() => setSelectedRecipe(null)}>Zamknij</button>
                        </div>
                        {!isImageUrl(selectedRecipe.image) && (
                            <div style={{ position: "absolute", top: 24, right: 24, fontSize: 64, opacity: 0.15 }}>
                                {selectedRecipe.image}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Application;