import React from "react";
import Message from "./message/Message";
import DialogItem from "./dialogitem/DialogItem";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {

    const dialogsComponents = props.dialogs.map(dialogs => {
        return <DialogItem name={dialogs.name} id={dialogs.id}/>})

    const messageComponents = props.messages.map(messages => {
        return <Message msg={messages.msg} id={messages.id}/>})


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsComponents}
            </div>
            <div className={classes.messages}>
                {messageComponents}
            </div>
        </div>
    );
}

export default Dialogs;

