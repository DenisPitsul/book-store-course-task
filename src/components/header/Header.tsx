import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import './Header.css'
import cardImg from '../../img/cart.svg';
import avatarImg from '../../img/avatar.png';
import icons from '../../img/icons.svg';
import { AppContext } from "../../context/Context";
import MobileMenu from "../mobile-menu/MobileMenu";

const Header: FunctionComponent = () => {
    const {setIsAuth, userName, setUserName, basketItems} = useContext(AppContext);
    const [count, setCount] = useState<number>(0);
    const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);
    const router = useNavigate();

    useEffect(() => {
        let totalCount = 0;
        basketItems.forEach(basketItem => totalCount += basketItem.amount);
        setCount(totalCount);
    }, [basketItems])

    const onSignOutClick = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
        setUserName('')
        localStorage.removeItem('username')
        router('/sign-in')
    }

    const onBurgerBtnClick = () => {
        setIsMobileMenuActive(!isMobileMenuActive);
    }

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="container">
                    <div className="header-container">
                        <Link className="header-home-link" to='/'>X-course task / Denis Pitsul</Link>
                        <div className="header-content">
                            <button 
                                type="button" 
                                className="header-burger-btn"
                                onClick={onBurgerBtnClick}>
                                <svg className="header-burger-icon">
                                    <use href={icons + "#icon-burger"}></use>
                                </svg>
                            </button>
                            <ul className="header-content-list">
                                <li className="header-content-item">
                                    <Link className="header-cart-link" to='/cart'>
                                        <img className="header-cart-img" src={cardImg} alt="cart"/>
                                        <span className={count === 0 ? "header-cart-count-hidden" : "header-cart-count"}>{count}</span>
                                    </Link>
                                </li>
                                <li className="header-content-item">
                                    <button onClick={onSignOutClick} type="button" className="header-sing-btn">Sing-Out</button>
                                </li>
                                <li className="header-content-item">
                                    <Link className="header-sing-link" to='/sign-in'>
                                        <span className="header-avatar-span">
                                            <img className="header-avatar-img" src={avatarImg} alt="avatar"/>
                                        </span>
                                        <span className="header-username">{userName === '' ? 'Username' : userName}</span>
                                    </Link>
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </div>
            </nav>
            <MobileMenu 
                isActive={isMobileMenuActive}
                setIsActive={setIsMobileMenuActive}
                setIsAuth={setIsAuth}
                userName={userName}
                setUserName={setUserName}
                basketItems={basketItems}
                count={count}
                setCount={setCount}/>
        </header>
    )
}


export default Header;