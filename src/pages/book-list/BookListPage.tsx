import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import './BookListPage.css'
import BooksFilter from "../../components/books-filter/BooksFilter";
import { AppContext } from "../../context/Context";
import BooksList from "../../components/books-list/BooksList";
import { useBooks } from "../../hooks/useBooks";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";


const BookListPage: FunctionComponent = () => {
    const {books} = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams(location.search);
    const [filter, setFilter] = useState({query: '', priceOption: 'any', level: 'any'})
    const searchedBooks = useBooks(books, filter.query, filter.priceOption, filter.level)

    useEffect(() => {
        const updatedParams = new URLSearchParams(searchParams);

        if (filter.query) {
            updatedParams.set('query', filter.query);
        } else {
            updatedParams.delete('query');
        }
    
        if (filter.priceOption !== 'any') {
            updatedParams.set('priceOption', filter.priceOption);
        } else {
            updatedParams.delete('priceOption');
        }
    
        if (filter.level !== 'any') {
            updatedParams.set('level', filter.level);
        } else {
            updatedParams.delete('level');
        }
    
        setSearchParams(updatedParams.toString());
    }, [filter, searchParams, setSearchParams]);

    useEffect(() => {
        navigate({ search: searchParams.toString() });
    }, [searchParams, navigate]);

    return (
        <div className="container">
            <BooksFilter searchParams={searchParams} filter={filter} setFilter={setFilter}/>
            <BooksList books={searchedBooks}/>
        </div>
    )
}

export default BookListPage;