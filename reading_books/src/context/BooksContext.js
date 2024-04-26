import { createContext, useCallback, useState } from "react";
import axios from "axios";

// Creating the context
const BooksContext = createContext();

// Create the Provider component
const BooksContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }, [])
        
    const handleBookCreation = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title })
        setBooks([
           ...books, {...response.data}
        ])
    }

    const handleBookEdition = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{ title: newTitle })

        setBooks([...books.map((book) => {
        if (book.id === id) {
            return { ...response.data };
        }
    
        return book;
        })]);
    }

    const handleBookDeletion = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        setBooks([
            ...books.filter((book) => {
                return book.id !== id;
              })
        ])
    }

    return (
        <BooksContext.Provider value={{ books, fetchBooks, handleBookCreation, handleBookEdition, handleBookDeletion }}>
            { children }
        </BooksContext.Provider>
    )
}

export { BooksContextProvider }
export default BooksContext;