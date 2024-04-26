// React
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Firebase
import { projectFirestore } from "../firebase/config";

// Context
import { useThemeContext } from "../hooks/useThemeContext";

// Styles
import "./Recipe.css";

const Recipe = () => {
  const { mode } = useThemeContext();
  const { id: recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection("recipes")
      .doc(recipeId)
      .onSnapshot(
        (snapshot) => {
          const recipe = snapshot.data();
          setRecipe({ id: snapshot.id, ...recipe });
          setIsPending(false);
        },
        (error) => {
          setIsPending(false);
          setError(error);
        }
      );

    // Cleanup
    return () => {
      unsub();
    };
  }, [recipeId]);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
