/**
 * src/pages/RecipeList.jsx
 * RecipeList component to display list of recipes with search and filter functionality
 * Uses custom hooks to fetch categories and ingredients
 */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRecipes, clearDetails, addFavorite, removeFavorite } from '../slice/recipesSlice';
import useFetchCategories from '../hooks/useFetchCategories';
import useFetchIngredients from '../hooks/useFetchIngredients';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import RecipeCard from '../components/RecipeCard';

const RecipeList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { list, loading, error, favorites } = useSelector(state => state.recipes);
    const { categories } = useFetchCategories();
    const { ingredients } = useFetchIngredients();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [ingredient, setIngredient] = useState('');

    // Fetch recipes based on search, category, or ingredient
    useEffect(() => {
        try {
            dispatch(fetchRecipes({ search, category, ingredient }));
            dispatch(clearDetails());
        } catch (err) {
            // Error handled in slice
        }
    }, [dispatch, search, category, ingredient]);

    function handleFavorite(recipe) {
        if (favorites.includes(recipe.idMeal)) {
            dispatch(removeFavorite(recipe.idMeal));
        } else {
            dispatch(addFavorite(recipe));
        }
    }

    return (
        <main className='max-w-6xl mx-auto px-2 sm:px-4 py-4 w-full'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-center'>Recipe App</h1>
            <SearchBar onSearch={setSearch} />
            <FilterBar categories={categories} ingredients={ingredients} onCategoryChange={setCategory} onIngredientChange={setIngredient} />
            {loading && <p className='text-center'>Loading recipes...</p>}
            {error && <p className='text-center text-red-500'>{error}</p>}
            <section className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4' aria-label='Recipe list'>
                {list && list.length > 0 ? (
                    list.map(recipe => (
                        <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={favorites.includes(recipe.idMeal)} onFavorite={handleFavorite} onCardClick={() => navigate(`/recipe/${recipe.idMeal}`)} />
                    ))
                ) : (
                    !loading && <p className='col-span-full text-center'>No recipes found.</p>
                )}
            </section>
        </main>
    )
}

export default RecipeList;