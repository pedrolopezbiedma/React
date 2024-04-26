// React
import { createContext, useReducer, useEffect } from "react";

// Firebase
import { projectAuthentication } from "../firebase/config";

const AuthenticationContext = createContext();

const initialState = {
  user: null,
  authenticationReady: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };

    case "LOGOUT_USER":
      return { ...state, user: null };

    case "AUTH_READY":
      return { user: action.payload, authenticationReady: true };

    default:
      return state;
  }
};

const AuthenticationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsub = projectAuthentication.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_READY", payload: user });
      unsub();
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContextProvider };
export default AuthenticationContext;
