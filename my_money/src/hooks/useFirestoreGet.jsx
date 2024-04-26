// React
import { useState, useEffect } from "react";

// Firebase
import { projectFirestore } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "./useAuthenticationContext";

const useFirestoreGet = (collectionName) => {
  const { user } = useAuthenticationContext();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let collectionRef = projectFirestore.collection(collectionName);

    // Filtering documents by user id
    collectionRef = collectionRef.where("user", "==", user.uid);

    // Sorting documents by createdAt
    collectionRef = collectionRef.orderBy("createdAt", "desc");

    const unsub = collectionRef.onSnapshot((snapshot) => {
      let updatedDocuments = [];
      snapshot.docs.forEach((doc) => {
        let document = { ...doc.data(), id: doc.id };
        updatedDocuments.push(document);
      });
      setDocuments(updatedDocuments);
    });

    return () => unsub();
  }, [collectionName]);

  return { documents };
};

export { useFirestoreGet };
