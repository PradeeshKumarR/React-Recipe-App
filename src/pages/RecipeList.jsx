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
        if (favorites.some(favorite => favorite.idMeal === recipe.idMeal)) {
            dispatch(removeFavorite(recipe.idMeal));
        } else {
            dispatch(addFavorite(recipe));
        }
    }

    return (
        <main className='w-full min-h-screen bg-[#f5f5f6] px-8 py-8 font-[Poppins]'>
            <h1 className='text-4xl font-extrabold mb-8 text-center text-[#fc8019] tracking-tight drop-shadow'>Recipe App</h1>
            <SearchBar onSearch={setSearch} />
            <FilterBar categories={categories} ingredients={ingredients} onCategoryChange={setCategory} onIngredientChange={setIngredient} />
            {loading && <p className='text-center text-[#6366f1]'>Loading recipes...</p>}
            {error && <p className='text-center text-[#ef4444]'>{error}</p>}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 w-full' aria-label='Recipe list'>
                {list && list.length > 0 ? (
                    list.map(recipe => (
                        <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={favorites.some(favorite => favorite.idMeal === recipe.idMeal)} onFavorite={handleFavorite} onCardClick={() => navigate(`/recipe/${recipe.idMeal}`)} />
                    ))
                ) : (
                    !loading && <p className='col-span-full text-center text-[#fbbf24]'>No recipes found.</p>
                )}
            </section>
        </main>
    )
}

export default RecipeList;