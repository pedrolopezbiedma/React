// React
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

// Styles
import './CreateProject.css';

// Firebase
import { timestamp } from '../../firebase/config';

// Hooks
import { useFirestoreCollectionGet } from '../../hooks/useFirestoreCollectionGet';
import { useAuthenticationContext } from '../../hooks/useAuthenticationContext';
import { useFirestoreUpdate } from '../../hooks/useFirestoreUpdate';

// Categories
const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

const CreateProject = () => {
  const { user } = useAuthenticationContext();
  const { documents: users } = useFirestoreCollectionGet('users');
  const { error, isPending, addDocument } = useFirestoreUpdate('projects');
  const history = useHistory();
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState(null);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const usersOptions = users.map((user) => {
    return { value: user, label: user.displayName };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormError(null);
    if (!category) {
      setFormError('You need to assign a category');
      return;
    }

    if (assignedUsers.length === 0) {
      setFormError('You need to assign at least one user');
      return;
    }

    const createdBy = {
      userId: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    const users = assignedUsers.map((assignedUser) => {
      return {
        userId: assignedUser.value.id,
        displayName: assignedUser.value.displayName,
        photoURL: assignedUser.value.photoURL,
      };
    });

    const project = {
      name,
      details,
      category,
      dueDate: timestamp.fromDate(new Date()),
      comments: [],
      createdBy,
      users,
    };

    await addDocument(project);
    history.push('/');
  };

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            required
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <textarea
            required
            type='text'
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />
        </label>
        <label>
          <input
            required
            type='date'
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </label>
        <label>
          <Select
            value={category}
            options={categories}
            onChange={(event) => setCategory(event)}
          />
        </label>
        <label>
          <Select
            isMulti
            options={usersOptions}
            onChange={(event) => setAssignedUsers([...event])}
          />
        </label>
        {!isPending && <button className='btn'>Create Project</button>}
        {isPending && (
          <button
            disabled
            className='btn'
          >
            Creating...
          </button>
        )}
        {error && <div className='error'>{error}</div>}
        {formError && <div className='error'>{formError}</div>}
      </form>
    </div>
  );
};

export default CreateProject;
