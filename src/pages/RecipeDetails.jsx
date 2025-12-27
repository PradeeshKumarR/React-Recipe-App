/**
 * src/pages/RecipeDetails.jsx
 * RecipeDetails component to display detailed information about a selected recipe
 * Fetches recipe details based on the recipe ID from URL parameters
 * Allows adding/removing the recipe to/from favorites
 * Uses Redux for state management
 * Handles loading and error states
 * Displays recipe details including ingredients and a link to a YouTube tutorial if available
 * Imports necessary hooks and components
 * Defines the RecipeDetails component
 * Exports the RecipeDetails component as default
 */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRecipeDetails, clearDetails, addFavorite, removeFavorite } from '../slice/recipesSlice';

const RecipeDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { details, loading, error, favorites } = useSelector(state => state.recipes);

    useEffect(() => {
        try {
            dispatch(fetchRecipeDetails(id));
            return () => {
                dispatch(clearDetails());
            }
        } catch (err) {
            // Error handled in slice
        }
    }, [dispatch, id]);

    // Handle adding/removing favorites
    function handleFavorite(recipe) {
        if (favorites.includes(recipe.idMeal)) {
            dispatch(removeFavorite(recipe.idMeal));
        } else {
            dispatch(addFavorite(recipe));
        }
    }

    // Render loading, error, or recipe details
    if (loading) {
        return <main className='p-4 text-center'>Loading recipe details...</main>;
    }
    if (error) {
        return <main className='p-4 text-center text-red-500'>{error}</main>;
    }
    if (!details) {
        return <main className='p-4 text-center'>No recipe details found.</main>;
    }

    // Extract ingredients and measures
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = details[`strIngredient${i}`];
        const measure = details[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${ingredient} (${measure || ''})`);
        }
    }
    return (
        <main className='max-w-2xl mx-auto px-2 sm:px-4 py-4 w-full'>
            <button className="mb-4 text-blue-500 underline" onClick={() => navigate(-1)}>&larr; Back to list</button>
            <article className='bg-white rounded-lg shadow p-4 sm:p-6'>
                <header className='flex flex-col items-center mb-4'>
                    <h1 className='text-xl sm:text-2xl font-bold mb-2 text-center'>{details.strMeal}</h1>
                    <img src={details.strMealThumb} alt={details.strMeal} className='w-40 h-40 sm:w-64 sm:h-64 object-cover rounded mb-2' />
                    <p className='text-gray-500 text-sm'>Category: {details.strCategory}</p>
                    <button type="button" className={`mt-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-semibold ${favorites.includes(details.idMeal) ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleFavorite(details)} aria-pressed={favorites.includes(details.idMeal)} aria-label={favorites.includes(details.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}>{favorites.includes(details.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </header>
                <section className='mb-4'>
                    <h2 className='font-semibold mb-2'>Ingredients</h2>
                    <ul className='list-disc list-inside text-sm'>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </section>
                <section className='mb-4'>
                    <h2 className='font-semibold mb-2'>Instructions</h2>
                    <p className='text-sm whitespace-pre-line'>{details.strInstructions}</p>
                </section>
                {details.strYoutube && (
                    <section>
                        <h2 className='font-semibold mb-2'>Video Tutorial</h2>
                        <a href={details.strYoutube} target='_blank' rel="noopener noreferrer" className='text-blue-500 underline'>Watch on YouTube</a>
                    </section>
                )}
            </article>
        </main>
    )
}

export default RecipeDetails;