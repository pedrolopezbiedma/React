import useBooksContext from "../hooks/useBooksContext"
import BookDetails from "./BookDetails"

const BookList = () => {
    const { books } = useBooksContext()

    return (
        <div className="book-list">
            { 
                books.map((book) => 
                    <BookDetails
                        key={book.id}
                        book={book}/>
                )
            }
        </div>
    )
}

export default BookList