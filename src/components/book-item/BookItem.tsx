import React, {FunctionComponent} from 'react'
import { IBook } from '../../types/types'
import notFoundBook from '../../img/imageNotFound.png'
import {Link} from 'react-router-dom';
import './BookItem.css'

interface BookItemProps {
    book: IBook
}

const BookItem: FunctionComponent<BookItemProps> = ({book}) => {

    const bookTitle = book.title.length > 24 ? `${book.title.slice(0, 24)}...` : book.title;
    const bookAuthor = book.author.length > 24 ? `${book.author.slice(0, 24)}...` : book.author;

    return (
        <li className='book-item'>
            <div className='book-item-image-container'>
                <Link className='book-item-image-link' to={`/book/${book.id}`}>
                    <img 
                        className={book.image === '' ? '' : 'book-item-image'} 
                        src={book.image === '' ? notFoundBook : book.image} 
                        alt={bookTitle}
                    />
                </Link>
            </div>
            <div className='book-item-body'>
                <h3 className='book-item-title'>{bookTitle}</h3>
                <p className='book-item-author'>{bookAuthor}</p>
                <div className='book-item-price-view-container'>
                    <span className='book-item-price'>${book.price}</span>
                    <Link to={`/book/${book.id}`} className='book-item-view-link'>View</Link>
                </div>
            </div>
        </li>
    )
} 

export default BookItem;