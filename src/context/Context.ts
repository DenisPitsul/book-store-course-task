import { createContext } from "react";
import { BasketItem, IBook } from "../types/types";

interface AppContextType {
    isAuth: boolean,
    setIsAuth: (isAuth: boolean) => void,
    userName: string,
    setUserName: (userName: string) => void,
    books: IBook[],
    setBooks: (books: IBook[]) => void,
    basketItems: BasketItem[]
    setBasketItems: (basketItems: BasketItem[]) => void,
}

export const AppContext = createContext<AppContextType>({
    isAuth: false, 
    setIsAuth: () => {},
    userName: '',
    setUserName: () => {},
    books: [],
    setBooks: () => {},
    basketItems: [],
    setBasketItems: () => {} 
});