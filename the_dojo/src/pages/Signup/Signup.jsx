// React
import { useState } from "react";

// Styles
import "./Signup.css";

// Hooks
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const { signupUser, isPending, error } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [profilePicture, setProfilePicture] = useState([]);
  const [profilePictureError, setProfilePictureError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    signupUser(email, password, displayName, profilePicture);
  };

  const handlePicture = (event) => {
    setProfilePictureError(null);
    const picture = event.target.files[0];

    if (picture === undefined) {
      setProfilePictureError("Please, select an image as profile picture");
      return;
    }

    if (!picture.type.includes("image")) {
      setProfilePictureError("Please, use an image for the profile picture");
      return;
    }

    if (picture.size > 100000) {
      setProfilePictureError(
        "Please, use a smaller picture for the profile ( Max. 100.000 Kb )"
      );
      return;
    }

    setProfilePicture(picture);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

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
      <label>
        <span>Display Name:</span>
        <input
          required
          type="text"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
      </label>
      <label>
        <span>Profile Photo:</span>
        <input
          required
          type="file"
          onChange={(event) => handlePicture(event)}
        />
        {profilePictureError && (
          <div className="error">{profilePictureError}</div>
        )}
      </label>

      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button disabled className="btn">
          Loading...
        </button>
      )}
      {error && <div className="error"> {error}</div>}
    </form>
  );
};
export default Signup;
