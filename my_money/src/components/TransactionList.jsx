// Styles
import styles from "../pages/home/Home.module.css";

// Hooks
import { useFirestoreGet } from "../hooks/useFirestoreGet";
import { useFirestoreUpdate } from "../hooks/useFirestoreUpdate";

const TransactionList = () => {
  const { documents } = useFirestoreGet("transactions");
  const { deleteDocument } = useFirestoreUpdate("transactions");

  const handleDelete = (docId) => {
    deleteDocument(docId);
  };

  return (
    <ul className={styles.transactions}>
      {documents &&
        documents.map((doc) => (
          <li key={doc.id}>
            <p className={styles.name}>{doc.name}</p>
            <p className={styles.amount}>{doc.amount} €</p>
            <button onClick={() => handleDelete(doc.id)}>x</button>
          </li>
        ))}
    </ul>
  );
};

export default TransactionList;
