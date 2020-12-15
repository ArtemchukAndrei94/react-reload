import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../img/userDefault.jpg";

const UsersFunctionalComponentUseBeforeClassIn53Lesson = (props) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items);
        })


    return (
        <div className={classes.users}>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </div>
                            {u.followed ?
                                <button onClick={() => (props.unFollowUser(u.id))}>UnFollow</button> :
                                <button onClick={() => (props.followUser(u.id))}>Follow</button>}
                            </span>
                        <span>
                            <span>
                                <div>{u.name}</div><div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div><div>{"u.location.country"}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
}

export default UsersFunctionalComponentUseBeforeClassIn53Lesson;