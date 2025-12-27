/**
 * src/slice/recipeSlice.js
 * Redux slice for recipes (fetch, search, filter, favorites)
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for TheMealDB API
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Async thunk to fetch recipes based on search, or filter
export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async ({ search, category, ingredient }, { rejectWithValue }) => {
        try {
            let url = `${API_BASE_URL}/search.php?s=${search || ''}`;
            if (category) {
                url = `${API_BASE_URL}/filter.php?c=${category}`;
            }
            if (ingredient) {
                url = `${API_BASE_URL}/filter.php?i=${ingredient}`;
            }
            const response = await axios.get(url);
            return response.data.meals || [];
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to fetch recipes');
        }
    }
);

// Async thunk to fetch recipe details by ID
export const fetchRecipeDetails = createAsyncThunk(
    'recipes/fetchRecipeDetails',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
            return response.data.meals ? response.data.meals[0] : null;
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to fetch recipe details');
        }
    }
);

/**
 * Recipe Slice
 * Manages state for recipes, including list, details, loading, error, and favorites
 * Reducers:
 * - addFavorite: Add a recipe to favorites
 * - removeFavorite: Remove a recipe from favorites
 * - clearDetails: Clear the current recipe details
 * Extra reducers handle async thunk actions for fetching recipes and details
 * Initial state includes loading and error states, and favorites are persisted in localStorage
 * Exports actions and reducer
 */
const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        list: [],
        details: null,
        loading: false,
        error: null,
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(favorite => favorite.idMeal !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        clearDetails: (state) => {
            state.details = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchRecipeDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.details = action.payload;
            })
            .addCase(fetchRecipeDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { addFavorite, removeFavorite, clearDetails } = recipesSlice.actions;
export default recipesSlice.reducer;