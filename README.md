# React Recipe App

The **React Recipe App** is a dynamic, responsive web application that allows users to browse, search, and filter recipes using data fetched from [TheMealDB API](https://www.themealdb.com/api.php). Users can view detailed information about each recipe and optionally mark recipes as favorites, which are persisted in the browser's localStorage.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Core Concepts](#core-concepts)
  - [State Management](#state-management)
  - [API Integration](#api-integration)
  - [Routing](#routing)
  - [Styling](#styling)
- [Key Components & Files](#key-components--files)
- [Extending the App](#extending-the-app)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)
- [License](#license)

---

## Features

- Fetches recipe data from TheMealDB API
- Displays recipes in a grid layout with individual recipe cards
- Search bar for finding recipes by name or keyword
- Filter bar for filtering recipes by category and ingredient
- View detailed recipe information, including ingredients and instructions
- Add and remove favorite recipes
- Responsive design for optimal viewing on all devices

---

## Project Structure

The project is organized into the following directory structure:

```
React-Recipe-App/
├── src/
│   ├── api/
│   │   └── constants.js
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── RecipeCard.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   ├── useFetchCategories.js
│   │   └── useFetchIngredients.js
│   ├── pages/
│   │   ├── RecipeDetails.jsx
│   │   └── RecipeList.jsx
│   ├── slice/
│   │   └── recipesSlice.js
│   ├── store/
│   │   └── recipesStore.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

- `src/components/` — React components for UI
- `src/hooks/` — Custom React hooks
- `src/api/` — API constants
- `src/pages/` — Page components
- `src/slice/` — Redux slice for recipes
- `src/store/` — Redux store configuration
- `App.jsx` — Main application logic

---

## Setup & Installation

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

---

## Core Concepts

### State Management

- Uses **Redux Toolkit** for global state management.
- The main slice is [`recipesSlice`](src/slice/recipesSlice.js), which manages:
  - Recipe list
  - Recipe details
  - Loading/error states
  - Favorites (with localStorage persistence)

### API Integration

- All API requests use **Axios**.
- The base URL is defined in [`src/api/constants.js`](src/api/constants.js).
- Custom hooks:
  - [`useFetchCategories`](src/hooks/useFetchCategories.js): Fetches recipe categories.
  - [`useFetchIngredients`](src/hooks/useFetchIngredients.js): Fetches ingredients.

### Routing

- Uses **React Router** for navigation.
- Main routes are defined in [`App.jsx`](src/App.jsx):
  - `/` — Recipe list
  - `/recipe/:id` — Recipe details

### Styling

- Uses **Tailwind CSS** for utility-first styling.
- Custom colors and fonts are defined in [`tailwind.config.js`](tailwind.config.js) and [`App.css`](src/App.css).

---

## Key Components & Files

- [`src/App.jsx`](src/App.jsx): Main app component, sets up routes.
- [`src/pages/RecipeList.jsx`](src/pages/RecipeList.jsx): Displays the recipe grid, search bar, and filters.
- [`src/pages/RecipeDetails.jsx`](src/pages/RecipeDetails.jsx): Shows detailed info for a selected recipe.
- [`src/components/RecipeCard.jsx`](src/components/RecipeCard.jsx): Card UI for each recipe.
- [`src/components/SearchBar.jsx`](src/components/SearchBar.jsx): Search input for recipes.
- [`src/components/FilterBar.jsx`](src/components/FilterBar.jsx): Dropdowns for category and ingredient filters.
- [`src/slice/recipesSlice.js`](src/slice/recipesSlice.js): Redux slice for recipes and favorites.
- [`src/store/recipesStore.js`](src/store/recipesStore.js): Redux store configuration.
- [`src/api/constants.js`](src/api/constants.js): API base URL.

---

## Extending the App

- **Add More Filters:** Extend [`FilterBar`](src/components/FilterBar.jsx) and update the Redux slice to support more filter types.
- **User Authentication:** Integrate authentication to allow users to save favorites to their account.
- **Pagination:** Implement pagination for large result sets.
- **UI Enhancements:** Add animations, dark mode, or more detailed recipe views.

---

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
