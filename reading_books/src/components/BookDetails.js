import { useContext, useState } from "react"

import BookEdit from "./BookEdit";
import BooksContext from "../context/BooksContext";

const BookDetails = ({ book }) => {
    const { handleBookDeletion } = useContext(BooksContext);
    const [editMode , setEditMode] = useState(false);

    const handleDeleteClick = () => {
        handleBookDeletion(book.id)
    }

    const handleEditClick = () => {
        setEditMode(!editMode);
    }

    const handleEditBook = () => {
        setEditMode(!editMode)
    }

    return (
       <div className="book-details">
            <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            { editMode ? <BookEdit book={book}  onBookEdition={handleEditBook}/> : <div>{ book.title }</div> }
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookDetails