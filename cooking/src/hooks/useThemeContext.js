import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext should be used in the proper scope");
  }

  return context;
};

export { useThemeContext };
