import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import notFoundBook from '../../img/imageNotFound.png'
import { AppContext } from "../../context/Context";
import icons from "../../img/icons.svg";
import './SpecificBookPage.css'

const SpecificBookPage: FunctionComponent = () => {
    const {books, basketItems, setBasketItems} = useContext(AppContext);
    const [count, setCount] = useState<number>(1);
    const params = useParams();
    const specificBook = books.find(book => book.id === Number.parseInt(params.id as string));  
    const [totalPrice, setTotalPrice] = useState(specificBook?.price) 

    useEffect(() => {
        if(specificBook?.price) {
            setTotalPrice(Number.parseFloat((count * specificBook?.price).toFixed(2)))
            if(isNaN(count))
                setTotalPrice(specificBook?.price)
        }
    }, [count, specificBook?.price])

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basketItems))
    }, [basketItems])

    const onCountInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(specificBook?.amount) {
            if(Number.parseInt(e.target.value) < 1 || e.target.value === '') 
                setCount(1)
            else if(Number.parseInt(e.target.value) > specificBook?.amount)
                setCount(specificBook?.amount)  
            else
                setCount(Number.parseInt(e.target.value))
            if(specificBook?.price)
                setTotalPrice(Number.parseFloat((count * specificBook?.price).toFixed(2)))
        }
    }

    const onBlurInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') 
            setCount(1)
    }

    const onPlusClick = () => {
        if(specificBook?.amount) {
            if(count < 1) 
                setCount(1)
            else if(count >= specificBook?.amount)
                setCount(specificBook?.amount)        
            else {
                setCount(count + 1)
            }
        }
    }

    const onMinusClick = () => {
        if(specificBook?.amount) {
            if(count <= 1) 
                setCount(1)
            else if(count > specificBook?.amount)
                setCount(specificBook?.amount)        
            else
                setCount(count - 1)
        }
    }

    const addToCart = () => {
        if (specificBook) {
            let tempBasketItems = [...basketItems];
            if(basketItems.some(basketItem => basketItem.book.id === specificBook?.id)) {
                const indexToUptade = 
                    basketItems.findIndex(basketItem => basketItem.book.id === specificBook?.id);
                tempBasketItems[indexToUptade] = {book: specificBook, amount: count}
            } else {
                tempBasketItems.push({book: specificBook, amount: count})
            }
            setBasketItems(tempBasketItems)
        }
    }


    return (
        <div className="container spesific-book-container">
            <div className="specific-book-content">
                <div className="specific-book-info-image-container">
                    <div className="specific-book-image-container">
                        <img 
                            className="specific-book-image" 
                            src={specificBook?.image === '' ? notFoundBook : specificBook?.image} 
                            alt={specificBook?.title}/>
                    </div>
                    <div className="specific-book-info-container">
                        <h2 className="specific-book-title">{specificBook?.title}</h2>
                        <p className="specific-book-info">Author(s): {specificBook?.author}</p>
                        <p className="specific-book-info">Book level: {specificBook?.level}</p>
                        <p className="specific-book-info">Book tags: {specificBook?.tags.join(", ")}</p>
                    </div>
                </div>
                <p className="specific-book-description">{specificBook?.description}</p>
            </div>
            <div className="specific-book-basket-container">
                <div className="specific-book-basket-wrapper">
                    <ul className="specific-book-basket">
                        <li className="specific-book-basket-item">
                            <span className="specific-book-basket-title">Price, $</span>
                            <span className="specific-book-basket-value">{specificBook?.price}</span>
                        </li>
                        <li className="specific-book-basket-item">
                            <span className="specific-book-basket-title">Count</span>
                            <div className="specific-book-basket-count-container">
                                <button 
                                    type="button" 
                                    className="specific-book-basket-count-btn minus"
                                    onClick={onMinusClick}
                                >
                                    <svg className="specific-book-basket-count-icon">
                                        <use href={icons + '#icon-minus'}></use>
                                    </svg>
                                </button>
                                <input 
                                    type="number"
                                    min="1" max="42" 
                                    value={count} 
                                    onChange={onCountInputHandler}
                                    onBlur={onBlurInputHandler}
                                    className="specific-book-basket-count-input"
                                />
                                <button 
                                    type="button" 
                                    className="specific-book-basket-count-btn plus"
                                    onClick={onPlusClick}
                                >
                                    <svg className="specific-book-basket-count-icon">
                                        <use href={icons + '#icon-plus'}></use>
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li className="specific-book-basket-item">
                            <span className="specific-book-basket-title">Total price, $</span>
                            <span className="specific-book-basket-value">{totalPrice}</span>
                        </li>
                    </ul>
                    <div className="specific-book-basket-btn-container">
                        <button 
                            type="button" 
                            className="specific-book-basket-btn"
                            onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecificBookPage;