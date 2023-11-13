import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AppContext } from './context/Context';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import booksData from './data/books.json';
import { BasketItem, IBook } from "./types/types";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [books, setBooks] = useState<IBook[]>(booksData.books);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    if(localStorage.getItem('username')) {
      setUserName(localStorage.getItem('username') as string)
    }
    if(localStorage.getItem('basket')) {
      const basketItemsJson = localStorage.getItem('basket');
      setBasketItems(basketItemsJson !== null ? JSON.parse(basketItemsJson) : []);
    }
  }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        isAuth,
        setIsAuth,
        userName,
        setUserName,
        books,
        setBooks,
        basketItems,
        setBasketItems
      }}
      >
        <Header/>
        <main className="wrapper">
          <AppRouter/>
        </main>
        <Footer/>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
