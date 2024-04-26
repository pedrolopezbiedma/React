// React
import { useState } from "react";

// Firebase
import { projectAuthentication } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "./useAuthenticationContext";

const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthenticationContext();

  const signupUser = async (email, password, displayName) => {
    try {
      setError(null);
      setIsPending(true);
      // Create user
      let response = await projectAuthentication.createUserWithEmailAndPassword(
        email,
        password
      );

      // Update profile with the display name
      await response.user.updateProfile({ displayName });
      dispatch({ type: "LOGIN_USER", payload: response.user });
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signupUser, isPending, error };
};

export { useSignup };
