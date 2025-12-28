# React Recipe App

This is a React application that fetches data from TheMealDB API and allows users to search, filter, and view recipes with a modern, responsive interface.

## Features

- Fetches recipe data from TheMealDB API
- Displays recipes in a grid layout with individual recipe cards
- Search bar for finding recipes by name or keyword
- Filter bar for filtering recipes by category and ingredient
- View detailed recipe information, including ingredients and instructions
- Add and remove favorite recipes
- Responsive design for optimal viewing on all devices

## Installation

Clone the repository:

```
git clone https://github.com/PradeeshKumarR/React-Recipe-App.git
```

Navigate to the project directory:

```
cd React-Recipe-App/
```

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

After running `npm run dev`, open your browser and navigate to the localhost URL shown in the terminal to view the application.

## Directory Structure

The project is organized into the following directory structure:

```
React-Recipe-App-main/
	src/
		api/
			constants.js
		components/
			FilterBar.jsx
			RecipeCard.jsx
			SearchBar.jsx
		hooks/
			useFetchCategories.js
			useFetchIngredients.js
		pages/
			RecipeDetails.jsx
			RecipeList.jsx
		slice/
			recipesSlice.js
		store/
			recipesStore.js
		App.css
		App.jsx
		index.css
		main.jsx
	.gitignore
	README.md
	eslint.config.js
	index.html
	package.json
	tailwind.config.js
	vite.config.js
```

- `src/components/` — React components for UI
- `src/hooks/` — Custom React hooks
- `src/api/` — API constants
- `src/pages/` — Page components
- `src/slice/` — Redux slice for recipes
- `src/store/` — Redux store configuration
- `App.jsx` — Main application logic

## Usage

- Browse through the available recipes
- Search for recipes by name or keyword
- Filter recipes by category or ingredient
- Click on a recipe card to view detailed information
- Add or remove recipes from your favorites

## Technologies Used

- React
- React Hooks
- Redux Toolkit
- Tailwind CSS for styling
- TheMealDB API for recipe data
- Vite (for fast development and build)

## Live Demo

View the deployed landing page here:
[https://reactrecipeapppradeeshkumarr.netlify.app/](https://reactrecipeapppradeeshkumarr.netlify.app/)

## License

This project is for educational and demonstration purposes only.
