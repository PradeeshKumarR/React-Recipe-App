/**
 * src/store/recipesStore.js
 * Redux store configuration for recipes
 * Imports the recipes reducer from recipeSlice and sets up the store
 * Uses Redux Toolkit's configureStore for simplified store setup
 */
import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../slice/recipesSlice";

const recipesStore = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
});

export default recipesStore;