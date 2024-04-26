// Styles
import './ProjectsFilter.css';

// Filters
const filters = ['all', 'mine', 'developement', 'design', 'marketing', 'sales'];

const ProjectsFilter = ({ filter, handleFilter }) => {
  const handleClick = (value) => {
    handleFilter(value);
  };

  return (
    <div className='project-filter'>
      <nav>
        <p>Filter by:</p>
        {filters.map((value) => (
          <button
            key={value}
            className={filter === value ? 'active' : ''}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectsFilter;
