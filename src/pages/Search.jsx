import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import RecipeCard from '../components/RecipeCard';
import '../App.css';

function Search({ favorites, toggleFavorite }) {
  const [sokOrd, setSokOrd] = useState('');
  const [recept, setRecept] = useState([]);
  const [laddar, setLaddar] = useState(false);
  const [felmeddelande, setFelmeddelande] = useState(null);
  const [harSokt, setHarSokt] = useState(false);

  // Körs när användaren klickar på Sök knappen
  const hanteraSokning = async (e) => {
    e.preventDefault();

    if (!sokOrd.trim()) return;
    
    try {
      setLaddar(true);
      setFelmeddelande(null);
      setHarSokt(true);
      
      
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${sokOrd}`
      );
      const data = await response.json();
      
      if (data.meals) {
        setRecept(data.meals);
      } else {
        setRecept([]);
      }
      
      setLaddar(false);
    } catch (error) {
      setFelmeddelande('Något gick fel. Försök igen!');
      setLaddar(false);
    }
  };

  const arFavorit = (receptId) => {
    return favorites.some(fav => fav.idMeal === receptId);
  };

  return (
    <section className="container">
      <header className="page-header">
        <h1>
          <IoSearchOutline className="page-icon" aria-hidden="true" />
          Sök Recept
        </h1>
      </header>
      
      
      <form onSubmit={hanteraSokning} className="search-form" role="search">
        <label htmlFor="search-input" className="sr-only">
          Sök efter recept
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Vad vill du laga idag?"
          value={sokOrd}
          onChange={(e) => setSokOrd(e.target.value)}
          className="search-input"
          aria-label="Sök efter recept"
        />
        <button type="submit" className="search-button">
          <IoSearchOutline className="button-icon" aria-hidden="true" />
          Sök
        </button>
      </form>

      
      {laddar && <p className="loading-text" role="status" aria-live="polite">Söker recept...</p>}

      
      {felmeddelande && <p className="error-text" role="alert">{felmeddelande}</p>}

      
      {harSokt && !laddar && recept.length === 0 && (
        <p className="no-results">Hittade inga recept på "{sokOrd}". Prova söka på något annat!</p>
      )}

      
      {recept.length > 0 && (
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
      )}
    </section>
  );
}

export default Search;
