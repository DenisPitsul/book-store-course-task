import React, {FunctionComponent} from "react";
import './BasketItem.css'
import { BasketItem } from "../../types/types";
import icons from "../../img/icons.svg";
import {Link} from "react-router-dom"

interface BasketItemProps {
    basketItem: BasketItem,
    setBasketItem: (basketItem: BasketItem) => void
    removeBasketItem: (basketItem: BasketItem) => void
}

const BasketItemComp: FunctionComponent<BasketItemProps> 
    = ({basketItem, setBasketItem, removeBasketItem}) => {

    const onCountInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number.parseInt(e.target.value) < 1) 
            setBasketItem({book: basketItem.book, amount: 1})
        else if(Number.parseInt(e.target.value) > basketItem.book.amount)
            setBasketItem({book: basketItem.book, amount: basketItem.book.amount})
        else
            setBasketItem({book: basketItem.book, amount: Number.parseInt(e.target.value)})
    }

    const onBlurInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') 
            setBasketItem({book: basketItem.book, amount: 1})
    }

    const onPlusClick = () => {
        if(basketItem.amount < 1) 
            setBasketItem({book: basketItem.book, amount: 1})
        else if(basketItem.amount >= basketItem.book.amount)
            setBasketItem({book: basketItem.book, amount: basketItem.book.amount})
        else {
            setBasketItem({book: basketItem.book, amount: basketItem.amount + 1})
        }
    }

    const onMinusClick = () => {
        if(basketItem.amount <= 1) 
            setBasketItem({book: basketItem.book, amount: 1})
        else if(basketItem.amount > basketItem.book.amount)
            setBasketItem({book: basketItem.book, amount: basketItem.book.amount})
        else
            setBasketItem({book: basketItem.book, amount: basketItem.amount - 1})
    }

    return (
        <li className="basket-item">
            <Link to={`/book/${basketItem.book.id}`} className="basket-item-title">{basketItem.book.title}</Link>
            <div className="basket-item-container">
                <div className="basket-item-count-container">
                    <button 
                        type="button" 
                        className="basket-item-count-btn minus"
                        onClick={onMinusClick}
                    >
                        <svg className="basket-item-count-icon">
                            <use href={icons + '#icon-minus'}></use>
                        </svg>
                    </button>
                    <input 
                        type="number"
                        min="1" max="42" 
                        value={basketItem.amount} 
                        onChange={onCountInputHandler}
                        onBlur={onBlurInputHandler}
                        className="basket-item-count-input"
                    />
                    <button 
                        type="button" 
                        className="basket-item-count-btn plus"
                        onClick={onPlusClick}
                    >
                        <svg className="basket-item-count-icon">
                            <use href={icons + '#icon-plus'}></use>
                        </svg>
                    </button>
                </div>
                <span className="basket-item-price">${(basketItem.book.price * basketItem.amount).toFixed(2)}</span>
                <button 
                    type="button" 
                    className="basket-item-remove-btn"
                    onClick={() => removeBasketItem(basketItem)}
                >
                    <svg className="basket-item-remove-icon">
                        <use href={icons + '#icon-delete'}></use>
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default BasketItemComp;