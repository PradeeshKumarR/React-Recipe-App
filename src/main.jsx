/**
 * src/main.jsx
 * Entry point for the React application
 * Sets up Redux store provider and React Router
 * Renders the main App component
 * Imports necessary modules and styles
 * Creates root and renders the application within StrictMode
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import recipesStore from './store/recipesStore.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={recipesStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode >,
)
