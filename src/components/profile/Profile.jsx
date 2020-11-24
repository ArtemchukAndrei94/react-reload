import classes from './Profile.module.css';
import React from "react";
import Posts from "./myposts/Posts";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div>
                <img src="https://w-dog.ru/wallpapers/3/1/471527542180790/tumannost-zvezdy-kosmos.jpg"/>
            </div>
            <ProfileInfo fio="Андрей Артемчук"/>
            <Posts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;


