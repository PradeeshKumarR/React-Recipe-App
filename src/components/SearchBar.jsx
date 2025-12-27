/**
 * src/components/SearchBar.jsx
 * Search bar for recipes
 * Handles user input and triggers search on form submission
 * Uses useState to manage input value
 * Calls onSearch prop function with trimmed input value on submit
 * Catches errors during search and alerts the user
 * Exports the SearchBar component for use in other parts of the app
 * Uses a form with an input field and a submit button
 * @param {Object} props - Component props
 * @param {Function} onSearch - Function to call with search term on form submission
 * 
 */
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        try {
            onSearch(value.trim());
        } catch (err) {
            alert('Search failed. Please try again.');
        }
    }

    return (
        <form className='flex flex-col sm:flex-row gap-2 mb-4 w-full max-w-lg mx-auto' role='search' aria-label='Recipe search' onSubmit={handleSubmit}>
            <input type="search" className="border rounded px-3 py-2 w-full" placeholder='Search recipes...' value={value} onChange={e => setValue(e.target.value)} aria-label='Search recipes by name or keyword' />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded w-full sm-w-auto'>Search</button>
        </form>
    );
}

export default SearchBar;