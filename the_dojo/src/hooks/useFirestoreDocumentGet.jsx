// React
import { useState, useEffect } from "react";

// Firestore
import { projectFirestore } from "../firebase/config";

const useFirestoreDocumentGet = (collection, docId) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const unsubcribe = projectFirestore
      .collection(collection)
      .doc(docId)
      .onSnapshot(
        (snapshot) => {
          setDocument(snapshot.data());
        },
        (error) => {
          setError(error.message);
        }
      );

    // Clean up
    return () => unsubcribe();
  }, [collection, docId]);
  return { document, error };
};

export { useFirestoreDocumentGet };
