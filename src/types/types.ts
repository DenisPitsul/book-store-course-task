
export interface IBooks {
    books: IBook[]
}

export interface IBook {
    id: number,
    author: string,
    price: number,
    image: string,
    title: string,
    level: string,
    tags: string[],
    amount: number,
    shortDescription: string,
    description: string
}

export interface BasketItem {
    book: IBook,
    amount: number
}

