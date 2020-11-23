import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    const dialogsId = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}><NavLink to={dialogsId}>{props.name}</NavLink></div>
    );
}

export default DialogItem;