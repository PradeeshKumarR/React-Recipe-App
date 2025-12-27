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
        <section className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 w-full max-w-lg mx-auto" aria-label="Recipe filters">
            <label className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                <span className="mr-2 mb-1 sm:mb-0">Category:</span>
                <select className="border rounded px-2 py-1 w-full sm:w-auto" onChange={e => onCategoryChange(e.target.value)} defaultValue="">
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                    ))}
                </select>
            </label>
            <label className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                <span className="mr-2 mb-1 sm:mb-0">Ingredient:</span>
                <select className="border rounded px-2 py-1 w-full sm:w-auto" onChange={e => onIngredientChange(e.target.value)} defaultValue="">
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