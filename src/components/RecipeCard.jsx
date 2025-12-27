/**
 * src\components\RecipeCard.jsx
 * RecipeCard component to display individual recipe information
 * Renders recipe image, name, category, and favorite button
 * @param {Object} props - Component props
 * @param {Object} props.recipe - Recipe object
 * @param {boolean} props.isFavorite - Whether the recipe is favorited
 * @param {Function} props.onFavorite - Callback to toggle favorite status
 * @param {Function} props.onCardClick - Callback for card click event
 */

const RecipeCard = ({ recipe, isFavorite, onFavorite, onCardClick }) => {
    if (!recipe) return null; // Handle case where recipe is undefined

    return (
        <article className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={onCardClick} aria-label={`View details for ${recipe.strMeal}`} tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded mb-2" />
            <header className="w-full flex flex-col items-center">
                <h2 className="text-base sm:text-lg font-bold text-center line-clamp-2">{recipe.strMeal}</h2>
                <p className="text-xs sm:text-sm text-gray-500">{recipe.strCategory}</p>
            </header>
            <button type="button" className={`mt-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-semibold ${isFavorite ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700s'}`} onClick={(e) => { e.stopPropagation(); onFavorite(recipe); }} aria-pressed={isFavorite} aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </article >
    )
}

export default RecipeCard;