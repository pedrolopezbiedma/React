// React
import { useState } from 'react';

// Hooks
import { useAuthenticationContext } from '../../hooks/useAuthenticationContext';
import { useFirestoreCollectionGet } from '../../hooks/useFirestoreCollectionGet';

// Components
import ProjectList from '../../components/ProjectList';
import ProjectsFilter from '../../components/ProjectsFilter';

const Dashboard = () => {
  const { user } = useAuthenticationContext();
  const { documents, error } = useFirestoreCollectionGet('projects');
  const [filter, setFilter] = useState('all');

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const projects = documents
    .map((project) => {
      switch (filter) {
        case 'all':
          return project;
        case 'mine':
          if (project.createdBy.userId === user.uid) {
            return project;
          }
          return undefined;
        case 'development':
          if (project.category.value === 'development') {
            return project;
          }
          return undefined;
        case 'design':
          if (project.category.value === 'design') {
            return project;
          }
          return undefined;
        case 'marketing':
          if (project.category.value === 'marketing') {
            return project;
          }
          return undefined;
        case 'sales':
          if (project.category.value === 'sales') {
            return project;
          }
          return undefined;
        default:
          return undefined;
      }
    })
    .filter((project) => project);
  console.log('Projects are >>', projects);

  return (
    <div className='dashboard'>
      <h2 className='page.title'>Dashboard</h2>
      <ProjectsFilter
        filter={filter}
        handleFilter={handleFilter}
      />
      {error && <div className='error'>{error}</div>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Dashboard;
