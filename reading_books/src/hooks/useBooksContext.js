
import { useContext } from 'react'

import BooksContext from '../context/BooksContext'

const useBooksContext = () => {
    return useContext(BooksContext)
}

export default useBooksContext;