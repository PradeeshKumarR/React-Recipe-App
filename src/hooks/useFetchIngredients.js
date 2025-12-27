/**
 * src/hooks/useFetchIngredients.js
 * Custom hook to fetch ingredients from TheMealDB API
 */
import axios from "axios";
import { useEffect, useState } from "react";

// Base URL for TheMealDB API
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Custom hook to fetch ingredients from TheMealDB API
 * @returns {Object} An object containing ingredients and error state
 * Uses useState to manage ingredients and error states
 * Uses useEffect to fetch ingredients on component mount
 * Fetches ingredient list from TheMealDB API and updates state
 * Handles errors during fetch and updates error state
 * Returns ingredients array and error message
 * Exports the custom hook for use in components
 */
const useFetchIngredients = () => {
    const [ingredients, setIngredients] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchIngredients() {
            try {
                const response = await axios.get(`${API_BASE_URL}/list.php?i=list`);
                setIngredients(response.data.meals || []);
            } catch (err) {
                setError('Failed to fetch ingredients');
            }
        }
        fetchIngredients();
    }, []);

    return { ingredients, error };
}

export default useFetchIngredients;