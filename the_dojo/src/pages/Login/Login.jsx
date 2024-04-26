// React
import { useState } from "react";

// Hooks
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { loginUser, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button disabled className="btn">
          Loading...
        </button>
      )}
      {error && <div className="error"> {error}</div>}
    </form>
  );
};

export default Login;
