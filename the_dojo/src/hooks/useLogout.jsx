// React
import { useState } from "react";

// Firebase
import { projectAuthentication, projectFirestore } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";

const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const { user, dispatch } = useAuthenticationContext();

  const logoutUser = async () => {
    try {
      setIsPending(true);

      // Update user in the firestore
      await projectFirestore
        .collection("users")
        .doc(user.uid)
        .update({ online: false });

      // Logout the user
      await projectAuthentication.signOut();
      dispatch({ type: "LOGOUT_USER" });
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
    }
  };

  return { logoutUser, isPending };
};

export { useLogout };
