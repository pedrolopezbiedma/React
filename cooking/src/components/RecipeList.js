// React
import { Link } from "react-router-dom";

// Firebase
import { projectFirestore } from "../firebase/config";

// Context
import { useThemeContext } from "../hooks/useThemeContext";

// Styles
import TrashCan from "../assets/trashcan.svg";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const { mode } = useThemeContext();

  const handleDelete = async (recipeId) => {
    try {
      await projectFirestore.collection("recipes").doc(recipeId).delete();
    } catch (error) {
      console.log("Error when deleting a recipe", error);
    }
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          <img
            onClick={() => handleDelete(recipe.id)}
            className="delete"
            src={TrashCan}
            alt="Delete recipe"
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
