import classes from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    );
}

export default Navbar;


