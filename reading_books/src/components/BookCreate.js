import { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

const BookCreate = () => {
    const { handleBookCreation } = useContext(BooksContext);
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleBookCreation(title)
        setTitle('');
    }

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <input className="input" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <button className="button">Add book</button>
            </form>
        </div>
    )
}

export default BookCreate
