import classes from './Profile.module.css';
import React from "react";
import ProfileInfo from "./profileinfo/ProfileInfo";
import PostsContainer from "./myposts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div>
                <img src="https://w-dog.ru/wallpapers/3/1/471527542180790/tumannost-zvezdy-kosmos.jpg"/>
            </div>
            <ProfileInfo fio="Андрей Артемчук"/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;


