import { IoHeart, IoHeartDislikeOutline } from 'react-icons/io5';
import RecipeCard from '../components/RecipeCard';
import '../App.css';

function Favorites({ favorites, toggleFavorite }) {
  return (
    <section className="container">
      <header className="page-header">
        <h1>
          <IoHeart className="page-icon" aria-hidden="true" />
          Mina Favoriter
        </h1>
      </header>
      
      
      {favorites.length === 0 ? (
        <div className="empty-state" role="status">
          <IoHeartDislikeOutline className="empty-icon" aria-hidden="true" />
          <p>Du har inga favoriter än!</p>
          <p>Gå till Hem eller Sök för att hitta recept du gillar 😊</p>
        </div>
      ) : (
        
        <>
          <p className="favorites-count" aria-live="polite">
            {favorites.length} {favorites.length === 1 ? 'favorit' : 'favoriter'}
          </p>
          <div className="recipe-grid" role="list">
            {favorites.map(recipe => (
              <RecipeCard 
                key={recipe.idMeal}
                recipe={recipe}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Favorites;
