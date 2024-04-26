// React
import { useReducer } from "react";

// Firebase
import { projectFirestore, timestamp } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "./useAuthenticationContext";

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { document: null, isPending: true, error: null, success: false };

    case "ERROR":
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: null,
      };

    case "CREATED":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };

    case "DELETED":
      return {
        document: null,
        isPending: false,
        error: false,
        success: true,
      };

    default:
      return state;
  }
};

const useFirestoreUpdate = (collectionName) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuthenticationContext();

  const collectionRef = projectFirestore.collection(collectionName);

  const addDocument = async (name, amount) => {
    dispatch({ type: "LOADING" });

    try {
      let transaction = {
        name,
        amount,
        createdAt: timestamp.fromDate(new Date()),
        user: user.uid,
      };
      const response = await collectionRef.add(transaction);
      dispatch({ type: "CREATED", payload: response });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const deleteDocument = async (docId) => {
    dispatch({ type: "LOADING" });

    try {
      await collectionRef.doc(docId).delete();
      dispatch({ type: "DELETED" });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  return { ...state, addDocument, deleteDocument };
};

export { useFirestoreUpdate };
