import { useLocation } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import RecipeList from "../components/RecipeList";

// Styles
import "./Search.css";

const Search = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get("term");

  const {
    data: recipes,
    pending,
    error,
  } = useFetch(`http://localhost:3005/recipes?q=${query}`);
  return (
    <div className="search">
      <h2 className="page-title">Recipes with text {query}</h2>
      {pending && <p className="pending">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipes && recipes.length === 0 && (
        <p className="error">No recipes found</p>
      )}
      {recipes && recipes.length > 0 && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Search;
