import React, {FunctionComponent} from 'react'
import { IBook } from '../../types/types'
import BookItem from '../book-item/BookItem'
import './BooksList.css'

interface BooksListProps {
    books: IBook[],
}

const BooksList: FunctionComponent<BooksListProps> = ({books}) => {

    return (
        <ul className='books-list'>
            {
                books.map(book => <BookItem key={book.id} book={book}/>)
            }
        </ul>
    )
} 

export default BooksList;