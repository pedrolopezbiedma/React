// Context
import { useThemeContext } from "../hooks/useThemeContext";

// Styles
import "./ThemeSelector.css";
import modeIcon from "../assets/mode-icon.svg";

const colors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { mode, changeColor, changeMode } = useThemeContext();

  const handleMode = () => {
    mode === "dark" ? changeMode("light") : changeMode("dark");
  };

  const handleColor = (color) => {
    changeColor(color);
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={handleMode}
          src={modeIcon}
          alt="mode toggle"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {colors.map((color) => (
          <div
            key={color}
            style={{ background: color }}
            onClick={() => handleColor(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
