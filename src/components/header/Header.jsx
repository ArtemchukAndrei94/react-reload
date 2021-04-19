import classes from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://i.ytimg.com/vi/dFIAiW8ymt4/maxresdefault.jpg"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;


