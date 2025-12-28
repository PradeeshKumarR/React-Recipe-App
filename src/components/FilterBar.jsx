/**
 * src/components/FilterBar.jsx
 * FilterBar component for selecting recipe categories and ingredients
 * Renders dropdowns for categories and ingredients
 * Calls callback functions on selection change
 * @param {Object} props - Component props
 * @param {Array} props.categories - Array of category objects
 * @param {Array} props.ingredients - Array of ingredient objects
 * @param {Function} props.onCategoryChange - Callback for category selection change
 * @param {Function} props.onIngredientChange - Callback for ingredient selection change
 */

const FilterBar = ({ categories, ingredients, onCategoryChange, onIngredientChange }) => {
    return (
        <section className="flex flex-row flex-wrap gap-4 mb-8 w-full justify-center font-[Poppins]" aria-label="Recipe filters">
            <label className="flex flex-col md:flex-row items-start sm:items-center w-64">
                <span className="mr-2 mb-1 md:mb-0 font-semibold text-[#222]">Category:</span>
                <select className="border-2 border-[#ececec] rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-[#fc8019] bg-[#fafafa] text-[#222]" onChange={e => onCategoryChange(e.target.value)} defaultValue="">
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                    ))}
                </select>
            </label>
            <label className="flex flex-col md:flex-row items-start md:items-center w-64">
                <span className="mr-2 mb-1 md:mb-0 font-semibold text-[#222]">Ingredient:</span>
                <select className="border-2 border-[#ececec] rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-[#fc8019] bg-[#fafafa] text-[#222]" onChange={e => onIngredientChange(e.target.value)} defaultValue="">
                    <option value="">All Ingredients</option>
                    {ingredients.map(ingredient => (
                        <option key={ingredient.strIngredient} value={ingredient.strIngredient}>{ingredient.strIngredient}</option>
                    ))}
                </select>
            </label>
        </section>
    );
}

export default FilterBar;