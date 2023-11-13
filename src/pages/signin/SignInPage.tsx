import React, { FunctionComponent, useContext, useState } from "react";
import avatarImg from '../../img/avatar.png';
import './SignInPage.css'
import { AppContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const SignInPage: FunctionComponent = () => {
    const {setIsAuth, setUserName} = useContext(AppContext);
    const [userNameValue, setUserNameValue] = useState<string>('');
    const router = useNavigate();

    const signInInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserNameValue(e.target.value);
    }

    const signInClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', "true");
        setUserName(userNameValue);
        localStorage.setItem('username', userNameValue);
        router('/books');
    }

    return (
        <div className="signin-container">
            <div className="signin-image-container">
                <img className="signin-image" src={avatarImg} alt="avatar"/>
            </div>
            <form className="signin-form">
                <label className="signin-label">Username</label>
                <input 
                    value={userNameValue} 
                    onChange={signInInputHandler} 
                    type="text" 
                    name="username" 
                    id="username" 
                    className="signin-input"
                />
                <button 
                    disabled={!(userNameValue.length >= 4 && userNameValue.length <= 16)} 
                    onClick={signInClickHandler}
                    type="submit" 
                    className="signin-btn"
                >
                    Sign-In
                </button>
            </form>
        </div>
    )
}

export default SignInPage;