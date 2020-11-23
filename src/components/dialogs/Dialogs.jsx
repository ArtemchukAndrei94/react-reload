import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./message/Message";
import DialogItem from "./dialogitem/DialogItem";

const Dialogs = (props) => {

    const dialogsData = [
        {id : "1", name : "Andrey"},
        {id : "2", name : "Sveta"},
        {id : "3", name : "Anna"}
    ];

    const messagesData = [
        {id : "1", msg : "Hello"},
        {id : "2", msg : "Yo man"},
        {id : "3", msg : "NIGGA"}
    ];

    const dialogsComponents = dialogsData.map(dialogs => {
        return <DialogItem name={dialogs.name} id={dialogs.id}/>})

    const messageComponents = messagesData.map(messages => {
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

