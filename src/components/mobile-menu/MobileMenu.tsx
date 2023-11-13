import {FunctionComponent, useEffect} from "react";
import './MobileMenu.css';
import {Link, useNavigate} from "react-router-dom"
import { BasketItem } from "../../types/types";
import cardImg from '../../img/cart.svg';
import avatarImg from '../../img/avatar.png';

interface MobileMenuProps {
    isActive: boolean,
    setIsActive: (isActive: boolean) => void,
    setIsAuth: (isAuth: boolean) => void,
    userName: string,
    setUserName: (userName: string) => void,
    basketItems: BasketItem[],
    count: number,
    setCount: (count: number) => void
}

const MobileMenu: FunctionComponent<MobileMenuProps> 
    = ({isActive, setIsActive, setIsAuth, userName, setUserName, basketItems, count, setCount}) => {
    const router = useNavigate();

    useEffect(() => {
        let totalCount = 0;
        basketItems.forEach(basketItem => totalCount += basketItem.amount);
        setCount(totalCount);
    }, [basketItems, setCount])
    
    const onSignOutClick = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
        setUserName('')
        localStorage.removeItem('username')
        router('/sign-in')
    }

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        setIsActive(false);
    });
    
    return (
        <div className={!isActive ? "mobile-menu" : "mobile-menu mobile-menu-active"}>
            <ul className="mobile-menu-content-list">
                <li className="mobile-menu-content-item">
                    <Link className="mobile-menu-cart-link" to='/basket'>
                        <img className="mobile-menu-cart-img" src={cardImg} alt="cart"/>
                            <span className={count === 0 ? "mobile-menu-cart-count-hidden" : "mobile-menu-cart-count"}>{count}</span>
                        </Link>
                    </li>
                <li className="mobile-menu-content-item">
                    <button onClick={onSignOutClick} type="button" className="mobile-menu-sing-btn">Sing-Out</button>
                </li>
                <li className="mobile-menu-content-item">
                    <Link className="mobile-menu-sing-link" to='/sign-in'>
                        <span className="mobile-menu-avatar-span">
                            <img className="mobile-menu-avatar-img" src={avatarImg} alt="avatar"/>
                        </span>
                        <span className="mobile-menu-username">{userName === '' ? 'Username' : userName}</span>
                    </Link>
                </li>
            </ul>  
        </div>
    ) 
}

export default MobileMenu;