import React, { FunctionComponent, useContext, useState } from "react";
import './BookListPage.css'
import BooksFilter from "../../components/books-filter/BooksFilter";
import { AppContext } from "../../context/Context";
import BooksList from "../../components/books-list/BooksList";
import { useBooks } from "../../hooks/useBooks";


const BookListPage: FunctionComponent = () => {
    const {books} = useContext(AppContext);
    const [filter, setFilter] = useState({query: '', priceOption: 'any', level: 'any'})
    const searchedBooks = useBooks(books, filter.query, filter.priceOption, filter.level)

    return (
        <div className="container">
            <BooksFilter filter={filter} setFilter={setFilter}/>
            <BooksList books={searchedBooks}/>
        </div>
    )
}

export default BookListPage;