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
        if (favorites.some(favorite => favorite.idMeal === recipe.idMeal)) {
            dispatch(removeFavorite(recipe.idMeal));
        } else {
            dispatch(addFavorite(recipe));
        }
    }

    // Render loading, error, or recipe details
    if (loading) {
        return <main className='p-4 text-center text-[#fc8019] bg-[#f5f5f6] min-h-screen font-[Poppins]'>Loading recipe details...</main>;
    }
    if (error) {
        return <main className='p-4 text-center text-[#ef4444] bg-[#f5f5f6] min-h-screen font-[Poppins]'>{error}</main>;
    }
    if (!details) {
        return <main className='p-4 text-center text-[#fbbf24] bg-[#f5f5f6] min-h-screen font-[Poppins]'>No recipe details found.</main>;
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
        <main className='w-full min-h-screen bg-[#f5f5f6] px-8 py-8 font-[Poppins]'>
            <button className="mb-6 text-[#fc8019] underline font-semibold text-lg" onClick={() => navigate(-1)}>&larr; Back to list</button>
            <article className='bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border-2 border-[#ececec]'>
                <header className='flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-extrabold mb-4 text-center text-[#222] tracking-tight drop-shadow'>{details.strMeal}</h1>
                    <img src={details.strMealThumb} alt={details.strMeal} className='w-64 h-64 object-cover rounded-xl mb-4 border-2 border-[#ececec] shadow-sm' />
                    <p className='text-[#fc8019] text-lg mb-2 font-medium'>Category: {details.strCategory}</p>
                    <button type="button" className={`mt-2 px-8 py-2 rounded-full text-base font-semibold shadow transition-colors duration-300 ${favorites.some(favorite => favorite.idMeal === details.idMeal) ? 'bg-[#fc8019] text-white' : 'bg-[#fff] text-[#fc8019] border border-[#fc8019] hover:bg-[#fc8019] hover:text-white'} `} onClick={() => handleFavorite(details)} aria-pressed={favorites.some(favorite => favorite.idMeal === details.idMeal)} aria-label={favorites.some(favorite => favorite.idMeal === details.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}>{favorites.some(favorite => favorite.idMeal === details.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </header>
                <section className='mb-6 w-full'>
                    <h2 className='font-semibold mb-2 text-[#222] text-xl'>Ingredients</h2>
                    <ul className='list-disc list-inside text-base text-[#444]'>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </section>
                <section className='mb-6 w-full'>
                    <h2 className='font-semibold mb-2 text-[#222] text-xl'>Instructions</h2>
                    <p className='text-base text-justify whitespace-pre-line text-[#444]'>{details.strInstructions}</p>
                </section>
                {details.strYoutube && (
                    <section className='w-full'>
                        <h2 className='font-semibold mb-2 text-[#222] text-xl'>Video Tutorial</h2>
                        <a href={details.strYoutube} target='_blank' rel="noopener noreferrer" className='text-[#fc8019] underline font-semibold'>Watch on YouTube</a>
                    </section>
                )}
            </article>
        </main>
    )
}

export default RecipeDetails;