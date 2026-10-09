import { useState, useEffect } from 'react';
import { GiCookingPot } from 'react-icons/gi';
import RecipeCard from '../components/RecipeCard';
import '../App.css';

function Home({ favorites, toggleFavorite }) {
  const [recept, setRecept] = useState([]);
  
  const [laddar, setLaddar] = useState(true);
  
  const [felmeddelande, setFelmeddelande] = useState(null);

  
  useEffect(() => {
    const hamtaRecept = async () => {
      try {
        setLaddar(true);
        setFelmeddelande(null);
        
        const promises = [];
        for (let i = 0; i < 9; i++) {
          promises.push(
            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
              .then(res => res.json())
          );
        }
        const resultat = await Promise.all(promises);
        const matratter = resultat.map(result => result.meals[0]);
        
        
        setRecept(matratter);
        setLaddar(false);
      } catch (error) {
        
        setFelmeddelande('Kunde inte hämta recept just nu. Försök igen senare!');
        setLaddar(false);
      }
    };

    hamtaRecept();
  }, []);

  // Hjälpfunktion som kollar om ett recept är favorit
  const arFavorit = (receptId) => {
    return favorites.some(fav => fav.idMeal === receptId);
  };

  
  if (laddar) {
    return (
      <section className="container">
        <p className="loading-text">Laddar recept...</p>
      </section>
    );
  }

  // Om något gick fel, visar felmeddelande:
  if (felmeddelande) {
    return (
      <section className="container">
        <p className="error-text">{felmeddelande}</p>
      </section>
    );
  }

  // Annars, visa alla recept!
  return (
    <section className="container">
      <header className="page-header">
        <h1>
          <GiCookingPot className="page-icon" aria-hidden="true" />
          Dagens Recept
        </h1>
        <p className="subtitle">Upptäck fantastiska maträtter från hela världen</p>
      </header>
      
      <div className="recipe-grid" role="list">
        {recept.map(recipe => (
          <RecipeCard 
            key={recipe.idMeal}
            recipe={recipe}
            isFavorite={arFavorit(recipe.idMeal)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
