import { useContext, useEffect } from "react";

import BooksContext from "./context/BooksContext";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
    const { fetchBooks } = useContext(BooksContext)

    // Initial books loading
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate />
            <BookList />
        </div>
    )
}

export default App;