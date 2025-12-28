/**
 * src/hooks/useFetchCategories.js
 * Custom hook to fetch categories from TheMealDB API
 */
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api/constants";

/**
 * Custom hook to fetch categories from TheMealDB API
 * @returns {Object} categories and error state
 * Uses useState to manage categories and error states
 * Uses useEffect to fetch categories on component mount
 * Fetches category list from TheMealDB API and updates state
 * Handles errors during fetch and updates error state
 * Returns categories array and error message
 * Exports the custom hook for use in components
 */
const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get(`${API_BASE_URL}/list.php?c=list`);
                setCategories(response.data.meals || []);
            } catch (err) {
                setError('Failed to fetch categories');
            }
        }
        fetchCategories();
    }, []);

    return { categories, error };
}

export default useFetchCategories;