/**
 * src/App.jsx
 * Main application component defining routes for the recipe app
 * Imports necessary components and styles
 */
import { Route, Routes } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import './App.css'

/**
 * App component defining application routes
 * Sets up routing using React Router
 * Defines routes for RecipeList and RecipeDetails pages
 * Renders the appropriate component based on the URL path
 */
function App() {
  return (
    <Routes>
      {/* Defines route for the recipe list page */}
      <Route path="/" element={<RecipeList />} />
      {/* Defines route for the recipe details page */}
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;