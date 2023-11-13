import { IBook } from "../types/types"
import { useMemo } from "react"

export const useBooks = (books: IBook[], query: string, priceOption: string, level: string) => {
    const searchedBooks = useMemo(() => {
        let filteredBookByQuery = books.filter(book => book.title.toLocaleLowerCase().includes(query.toLowerCase())); 

        if (priceOption === 'up_to_15')
            filteredBookByQuery = filteredBookByQuery.filter(book => book.price <= 15)
        else if (priceOption === '15_30')
            filteredBookByQuery = filteredBookByQuery.filter(book => book.price >= 15 && book.price <= 30)
        else if (priceOption === 'from_30')
            filteredBookByQuery = filteredBookByQuery.filter(book => book.price >= 30)
        
        if(level === 'Beginner')
            return filteredBookByQuery.filter(book => book.level === 'Beginner')
        else if (level === 'Middle')
            return filteredBookByQuery.filter(book => book.level === 'Middle')
        else if (level === 'Pro')
            return filteredBookByQuery.filter(book => book.level === 'Pro')

        return filteredBookByQuery
    }, [books, query, priceOption, level])

    return searchedBooks;
}