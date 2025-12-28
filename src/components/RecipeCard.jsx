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
        <article className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center cursor-pointer hover:shadow-2xl transition w-full focus:outline-none focus:ring-2 focus:ring-[#fc8019] border-2 border-[#ececec]/20 font-[Poppins]" onClick={onCardClick} aria-label={`View details for ${recipe.strMeal}`} tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}>
            <div className="w-full flex justify-center mb-4">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="object-cover rounded-2xl border-4 border-[#fc8019]/40 shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <header className="w-full flex flex-col items-center">
                <h2 className="text-lg font-semibold text-center text-[#222] line-clamp-2">{recipe.strMeal}</h2>
                <p className="text-xs text-[#fc8019] font-medium mt-1">{recipe.strCategory}</p>
            </header>
            <button type="button" className={`mt-4 px-6 py-2 rounded-full text-sm font-semibold shadow transition-colors duration-300 ${isFavorite ? 'bg-[#fc8019] text-white' : 'bg-[#fff] text-[#fc8019] border border-[#fc8019] hover:bg-[#fc8019] hover:text-white'} `} onClick={(e) => { e.stopPropagation(); onFavorite(recipe); }} aria-pressed={isFavorite} aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </article >
    )
}

export default RecipeCard;