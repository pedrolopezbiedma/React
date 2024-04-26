// React
import { useState, useEffect } from "react";

// Firebase
import { projectFirestore } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "./useAuthenticationContext";

const useFirestoreCollectionGet = (collectionName, filterBy, sortedBy) => {
  const { user } = useAuthenticationContext();
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    let collectionRef = projectFirestore.collection(collectionName);

    // Filtering documents by user id
    if (filterBy) {
      collectionRef = collectionRef.where("user", "==", user.uid);
    }

    // Sorting documents by property
    if (sortedBy) {
      collectionRef = collectionRef.orderBy(sortedBy, "desc");
    }

    const unsub = collectionRef.onSnapshot(
      (snapshot) => {
        let updatedDocuments = [];
        snapshot.docs.forEach((doc) => {
          let document = { ...doc.data(), id: doc.id };
          updatedDocuments.push(document);
        });
        setDocuments(updatedDocuments);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unsub();
  }, [collectionName, user, filterBy, sortedBy]);

  return { documents, error };
};

export { useFirestoreCollectionGet };
