const { createContext, useReducer } = require("react");

const ThemeContext = createContext();

const initialState = {
  color: "#58249c",
  mode: "dark",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "CHANGE_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider
      value={{ color: state.color, mode: state.mode, changeColor, changeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
export default ThemeContext;
