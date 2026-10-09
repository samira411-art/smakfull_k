import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { MdRestaurant, MdLocationOn } from 'react-icons/md';
import '../App.css';
function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  return (
    <article className="recipe-card" role="listitem">
      
      <div className="recipe-image-container">
        <img 
          src={recipe.strMealThumb} 
          alt={`Bild på ${recipe.strMeal}`}
          className="recipe-image"
          loading="lazy"
        />
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.strMeal}</h3>
        
        
        <div className="recipe-category">
          <span className="category-item">
            <MdRestaurant className="category-icon" aria-hidden="true" />
            <span>{recipe.strCategory}</span>
          </span>
          <span className="separator" aria-hidden="true">•</span>
          <span className="category-item">
            <MdLocationOn className="category-icon" aria-hidden="true" />
            <span>{recipe.strArea}</span>
          </span>
        </div>
        
        
        <button 
          onClick={() => onToggleFavorite(recipe)}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? `Ta bort ${recipe.strMeal} från favoriter` : `Lägg till ${recipe.strMeal} i favoriter`}
          aria-pressed={isFavorite}
        >
          {isFavorite ? (
            <>
              <IoHeart className="heart-icon" aria-hidden="true" />
              <span>Ta bort från favoriter</span>
            </>
          ) : (
            <>
              <IoHeartOutline className="heart-icon" aria-hidden="true" />
              <span>Spara som favorit</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
