import { useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";

const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw Error("Please use authentication context within its correct scope");
  }

  return { ...context };
};

export { useAuthenticationContext };
