import React from 'react';
import { RecipeProvider } from './Components/Context/RecipeContext';
import RecipeList from './Components/Recipe/RecipeList';
import AddRecipeForm from './Components/Form/AddRecipeForm';
import SearchBar from './Components/Search/SearchBar';

import './App.css'

function App() {
  return (
    <RecipeProvider>
      <div>
        <h1> Re-cipy strona</h1>
        <SearchBar />
        <RecipeList />
        <h2 className="share-heading">Chcesz podzielić się swoją specjalnością?</h2>
        <AddRecipeForm />
      </div>
    </RecipeProvider>
  );
}

export default App;
