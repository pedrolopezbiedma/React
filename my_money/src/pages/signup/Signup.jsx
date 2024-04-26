// React
import { useState } from "react";

// Styles
import styles from "./Signup.module.css";

// Hooks
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signupUser, isPending, error } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    signupUser(email, password, displayName);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email: </span>
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        <span>Password: </span>
        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
        <span>Dislay Name: </span>
        <input
          required
          type="text"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
      </label>
      {isPending && (
        <button disabled className="btn">
          Loading...
        </button>
      )}
      {!isPending && <button className="btn">Signup</button>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
