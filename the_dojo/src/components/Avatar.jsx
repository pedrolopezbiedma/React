// Styles
import "./Avatar.css";

const Avatar = ({ user }) => {
  return (
    <div className="avatar">
      <img src={user.photoURL} alt="user avatar" />
    </div>
  );
};

export default Avatar;
