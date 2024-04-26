// React
import { useReducer } from "react";

// Firebase
import { projectFirestore } from "../firebase/config";

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

    case "UPDATED":
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

  const collectionRef = projectFirestore.collection(collectionName);

  const addDocument = async (data) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await collectionRef.add(data);
      dispatch({ type: "CREATED", payload: response });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const updateDocument = async (docId, update) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await collectionRef.doc(docId).update({ ...update });
      dispatch({ type: "UPDATED", payload: response });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const deleteDocument = async (docId) => {
    dispatch({ type: "LOADING" });

    console.log("id is >>", docId);
    try {
      await collectionRef.doc(docId).delete();
      dispatch({ type: "DELETED" });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  return { ...state, addDocument, updateDocument, deleteDocument };
};

export { useFirestoreUpdate };
