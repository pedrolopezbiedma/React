// React
import { Link } from "react-router-dom";

// Styles
import "./ProjectList.css";

// Components
import Avatar from "./Avatar";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects to show</p>}
      {projects.length > 0 &&
        projects.map((project) => (
          <Link key={project.id} to={`project/${project.id}`}>
            <h4>{project.name}</h4>
            <p>Due by: {project.dueDate.toDate().toDateString()}</p>
            <div className="assigned-to">
              <p>
                <strong>Assigned to:</strong>
              </p>
              <ul>
                {project.users.map((user) => (
                  <li key={user.userId}>
                    <Avatar user={user} />
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
