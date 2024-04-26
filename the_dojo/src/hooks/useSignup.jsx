// React
import { useState } from "react";

// Firebase
import {
  projectAuthentication,
  projectFirestore,
  projectStorage,
} from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "./useAuthenticationContext";

const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthenticationContext();

  const signupUser = async (email, password, displayName, profilePicture) => {
    try {
      setError(null);
      setIsPending(true);

      // Create user
      let response = await projectAuthentication.createUserWithEmailAndPassword(
        email,
        password
      );

      // Upload picture to storage
      const uploadPath = `/thumbails/${response.user.uid}/${profilePicture.name}`;
      const img = await projectStorage.ref(uploadPath).put(profilePicture);
      const photoURL = await img.ref.getDownloadURL();

      // Save the user info in the firestore
      await projectFirestore
        .collection("users")
        .doc(response.user.uid)
        .set({ photoURL, displayName, online: true });

      // Update profile with the display name
      await response.user.updateProfile({ displayName, photoURL });

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
