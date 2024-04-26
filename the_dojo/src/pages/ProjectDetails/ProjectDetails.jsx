// Styles
import "./ProjectDetails.css";

// React
import { useParams } from "react-router-dom";

// Hooks
import { useFirestoreDocumentGet } from "../../hooks/useFirestoreDocumentGet";

// Components
import ProjectInfo from "../../components/ProjectInfo";
import ProjectComments from "../../components/ProjectComments";

const ProjectDetails = () => {
  const { id: docId } = useParams();
  const { document: project, error } = useFirestoreDocumentGet(
    "projects",
    docId
  );

  return (
    <>
      {error && <div className="error">{error}</div>}
      {!error && project === "" && <div>No data for that id.</div>}
      {project && (
        <>
          <div className="project-details">
            <ProjectInfo project={project} />
            <ProjectComments project={project} />
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetails;
