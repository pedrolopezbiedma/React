// React
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

// Styles
import './ProjectComments.css';

// Firebase
import { timestamp } from '../firebase/config';

// Hooks
import { useAuthenticationContext } from '../hooks/useAuthenticationContext';
import { useFirestoreUpdate } from '../hooks/useFirestoreUpdate';

// Components
import Avatar from './Avatar';

const ProjectComments = ({ project }) => {
  const { id: docId } = useParams();
  const { updateDocument } = useFirestoreUpdate('projects');
  const [newComment, setNewComment] = useState(``);
  const { user } = useAuthenticationContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      id: Math.random() * 100,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      user: {
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
    };
    const commentsToUpdate = [...project.comments, comment];
    updateDocument(docId, { comments: commentsToUpdate });
    setNewComment(``);
  };

  return (
    <div className='project-comments'>
      <h4>Project Comments</h4>
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className='comment-author'>
                <Avatar user={comment.user} />
                <p>{comment.user.displayName}</p>
              </div>
              <div className='comment-date'>
                {formatDistanceToNow(comment.createdAt.toDate(), {
                  addSuffix: true,
                })}
              </div>
              <div className='comment-content'>{comment.content}</div>
            </li>
          ))}
      </ul>

      <form
        className='add-comment'
        onSubmit={handleSubmit}
      >
        <label>
          <span>Add new comments</span>
          <textarea
            required
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
        </label>
        <button className='btn'>Add Comment</button>
      </form>
    </div>
  );
};

export default ProjectComments;
