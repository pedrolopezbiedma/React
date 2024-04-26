// React
import { useState, useEffect } from "react";

// Firebase
import { projectFirestore } from "../firebase/config";

// Component
import RecipeList from "../components/RecipeList";
// import { useFetch } from "../hooks/useFetch";

// Styles
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        let recipes = [];
        snapshot.docs.forEach((doc) => {
          const recipe = doc.data();
          recipes.push({ id: doc.id, ...recipe });
        });
        setRecipes(recipes);
        setIsPending(false);
      },
      (error) => {
        setIsPending(false);
        setError(error.message);
      }
    );

    // Cleanup
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
