import React from "react";
import classes from "./Message.module.css";


const Message = (props) => {
    return (
        <div className={classes.message} id={props.id}>{props.msg}</div>
    );
}

export default Message;