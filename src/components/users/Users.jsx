import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../img/userDefault.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.count / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.users}>
            <div>
                {
                    pages.map(p => <span className={props.currentPage === p && classes.pageActive}
                                         onClick={() => props.changePage(p)}>{p} </span>)
                }
            </div>
            <div>
                {
                    props.users.map(u => {
                        return (
                            <div key={u.id}>
                                <div>
                                    <NavLink to={'profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed === true?
                                        <button onClick={() => props.unFollow(u.id)}>UNFOLLOW</button> :
                                        <button onClick={() => props.follow(u.id)}>FOLLOW</button>
                                    }
                                </div>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
}
export default Users;