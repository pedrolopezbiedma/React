// React
import { useParams, useHistory } from "react-router-dom";

// Styles
import "./ProjectInfo.css";

// Components
import Avatar from "./Avatar";

// Hooks
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";
import { useFirestoreUpdate } from "../hooks/useFirestoreUpdate";

const ProjectInfo = ({ project }) => {
  const { id } = useParams();
  const history = useHistory();
  const { user } = useAuthenticationContext();
  const { deleteDocument } = useFirestoreUpdate("projects");

  const handleClick = () => {
    deleteDocument(id);
    history.push("/");
  };

  return (
    <div>
      <div className="project-info">
        <h2 className="page-title">{project.name}</h2>
        <p>Created by: {project.createdBy.displayName}</p>
        <p className="due-date">{project.dueDate.toDate().toDateString()}</p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.users.length > 0 &&
            project.users.map((user) => (
              <div key={user.userId}>
                <Avatar user={user} />
              </div>
            ))}
        </div>
      </div>
      {user.uid === project.createdBy.userId && (
        <>
          {
            <button className="btn" onClick={handleClick}>
              Mark as completed
            </button>
          }
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
