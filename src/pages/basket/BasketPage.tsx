import React, { FunctionComponent, useContext, useState, useEffect } from "react";
import './BasketPage.css'
import BasketList from "../../components/basket-list/BasketList";
import { AppContext } from "../../context/Context";
import cartImg from "../../img/cart.svg";

const BasketPage: FunctionComponent = () => {
    const {basketItems, setBasketItems} = useContext(AppContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        let totalPriceTemp = 0;
        basketItems.forEach(basketItem => {
            totalPriceTemp += basketItem.amount * basketItem.book.price;
        });
        setTotalPrice(Number.parseFloat(totalPriceTemp.toFixed(2)));
        localStorage.setItem('basket', JSON.stringify(basketItems))
    }, [basketItems])

    const purchaseBtnClick = () => {
        setBasketItems([]);
    }

    return (
        basketItems.length === 0
        ?
        <img className="basket-img" src={cartImg} alt="cart"/>
        :
        <div className="container">
            <div className="basket-purchase-btn-container">
                <button onClick={purchaseBtnClick} type="button" className="basket-purchase-btn">Purchase</button>
            </div>
            <BasketList basketItems={basketItems} setBasketItems={setBasketItems}/>
            <p className="basket-total-price-text">
                Total price: $<span className="basket-total-price">{totalPrice}</span>
            </p>
        </div>
    )
}

export default BasketPage;