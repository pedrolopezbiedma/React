import { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

const BookEdit = ({ book, onBookEdition }) => {
    const { handleBookEdition } = useContext(BooksContext);
    const [title, setTitle] = useState(book.title)

    const handleSubmit =  (event) => {
        event.preventDefault();
        onBookEdition()
        handleBookEdition(book.id, title)
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <input className="input" type="input" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <button className="button is-primary">Save</button>
        </form>
    )
}

export default BookEdit;