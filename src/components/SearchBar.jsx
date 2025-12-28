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
        <form className='flex flex-row gap-4 mb-8 w-full justify-center font-[Poppins]' role='search' aria-label='Recipe search' onSubmit={handleSubmit}>
            <input type="search" className="border-2 border-[#ececec] rounded-full px-6 py-3 w-96 focus:ring-2 focus:ring-[#fc8019] bg-[#fafafa] text-[#222] placeholder-[#aaa}" placeholder='Search recipes...' value={value} onChange={e => setValue(e.target.value)} aria-label='Search recipes by name or keyword' />
            <button type="submit" className='bg-[#fc8019] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#ff944d] transition-colors duration-500'>Search</button>
        </form>
    );
}

export default SearchBar;