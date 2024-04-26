// React
import { useEffect, useState } from "react";

// Hooks
import { useFirestoreUpdate } from "../hooks/useFirestoreUpdate";

const CreateTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { isPending, success, addDocument } =
    useFirestoreUpdate("transactions");

  const handleCreate = (event) => {
    event.preventDefault();
    addDocument(name, amount);
  };

  // Clean input fields when we have added the transaction
  useEffect(() => {
    if (success) {
      setName("");
      setAmount("");
    }
  }, [success]);

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleCreate}>
        <label>
          <span>Name: </span>
          <input
            required
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <span>Amount: </span>
          <input
            required
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        {!isPending && <button className="btn">Create</button>}
        {isPending && (
          <button disabled className="btn">
            Loading...
          </button>
        )}
      </form>
    </>
  );
};

export default CreateTransaction;
