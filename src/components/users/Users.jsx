import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../img/userDefault.jpg";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);

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
            {
                props.users.map(u => {
                    return (
                        <div>
                            <div>
                                <img src={u.photos.url != null ? u.photos.url : userPhoto}/>
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
    );
}
export default Users;