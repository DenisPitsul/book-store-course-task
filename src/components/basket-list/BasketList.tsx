import React, {FunctionComponent} from "react";
import './BasketList.css'
import { BasketItem } from "../../types/types";
import BasketItemComp from "../basket-item/BasketItemComp";

interface BasketListProps {
    basketItems: BasketItem[],
    setBasketItems: (basketItems: BasketItem[]) => void
}

const BasketList: FunctionComponent<BasketListProps> = ({basketItems, setBasketItems}) => {
    
    const setBasketItem = (basketItemParam: BasketItem) => {
        let tempBasketItems = [...basketItems];
        const indexToUptade = 
                    basketItems.findIndex(basketItem => basketItem.book.id === basketItemParam.book.id);
        tempBasketItems[indexToUptade] = basketItemParam;
        setBasketItems(tempBasketItems)
    }

    const removeBasketItem = (basketItemToRemove: BasketItem) => {
        setBasketItems(basketItems.filter(basketItem => basketItem.book.id !== basketItemToRemove.book.id));
    }
    
    return (
        <ul className="basket-list">
            {
                basketItems.map(basketItem => 
                    <BasketItemComp 
                        key={basketItem.book.id}
                        basketItem={basketItem} 
                        setBasketItem={setBasketItem}
                        removeBasketItem={removeBasketItem}
                    />
                )
            }
        </ul>
    )
}

export default BasketList;