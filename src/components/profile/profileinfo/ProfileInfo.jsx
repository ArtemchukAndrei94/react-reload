import React from "react";
import classes from "./ProfileInfo.module.css";
import userPhoto from "../../../img/userDefault.jpg";


const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfo}>
            <div>
                <div>{props.fio}</div>
                <img src={props.avatar != null ? props.avatar : userPhoto}/>
                <div>{props.aboutMe}</div>
            </div>
            <div>
                <div><a href={props.contacts.facebook}>facebook</a></div>
                <div><a href={props.contacts.website}>website</a></div>
                <div><a href={props.contacts.vk}>vk</a></div>
                <div><a href={props.contacts.twitter}>twitter</a></div>
                <div><a href={props.contacts.instagram}>instagram</a></div>
                <div><a href={props.contacts.youtube}>youtube</a></div>
                <div><a href={props.contacts.github}>github</a></div>
                <div><a href={props.contacts.mainLink}>mainLink</a></div>
            </div>
        </div>
    );
}

export default ProfileInfo;